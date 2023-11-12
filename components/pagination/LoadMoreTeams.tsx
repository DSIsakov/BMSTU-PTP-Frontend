"use client";

import { getCaptains, getSearchTeams } from "@/lib/actions/actions";
import { TeamProps } from "@/types";
import React from "react";
import { useInView } from "react-intersection-observer";
import TeamCard from "../cards/TeamCard";
import { Spinner } from "../ui/spinner";

export default function LoadMoreTeams({
  search,
  initialTeams,
  initialCaptains,
}: {
  search: string | undefined;
  initialTeams: TeamProps[];
  initialCaptains: [];
}) {
  const [page, setPage] = React.useState(1);
  const [teams, setTeams] = React.useState<TeamProps[]>(initialTeams);
  const [captains, setCaptains] = React.useState<[]>(initialCaptains);
  const [isTeams, setIsTeams] = React.useState(true);

  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreTeams = async () => {
    await delay(1000);
    const nextPage = page + 1;
    const newTeams = await getSearchTeams({ page: nextPage, search });
    const newCaptains = await getCaptains(newTeams);

    if (newTeams?.length) {
      setPage(nextPage);
      setTeams((prevTeams: TeamProps[]) => [...prevTeams, ...newTeams]);
      setCaptains((prevCaptains: []) => [...prevCaptains, ...newCaptains]);
    }

    if (newTeams?.length < 12) {
      setIsTeams(false);
    }
  };

  React.useEffect(() => {
    if (inView) {
      loadMoreTeams();
    }
  }, [inView]);

  return (
    <>
      <div className="teams_list-wrapper">
        {teams.map((team, index) => (
          <TeamCard key={team.id} team={team} captainName={captains[index]} />
        ))}
      </div>

      {isTeams && (
        <div className="flex items-center justify-center m-4" ref={ref}>
          <Spinner className="h-12 w-12" />
        </div>
      )}
    </>
  );
}
