"use client";

import { getSearchTournaments } from "@/lib/actions/actions";
import { TournamentsProps } from "@/types";
import React from "react";
import { useInView } from "react-intersection-observer";
import TournamentCard from "../cards/TournamentCard";
import { Spinner } from "../ui/spinner";

export default function LoadMoreTournaments({
  search,
  initialTournaments,
}: {
  search: string | undefined;
  initialTournaments: TournamentsProps[];
}) {
  const [page, setPage] = React.useState(1);
  const [tournaments, setTournaments] =
    React.useState<TournamentsProps[]>(initialTournaments);
  const [isTournaments, setIsTournaments] = React.useState(true);

  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreTournaments = async () => {
    await delay(1000);
    const nextPage = page + 1;
    const newTournaments = await getSearchTournaments({
      page: nextPage,
      search,
    });

    if (newTournaments?.length) {
      setPage(nextPage);
      setTournaments((prevTeams: TournamentsProps[]) => [
        ...prevTeams,
        ...newTournaments,
      ]);
    }

    if (newTournaments?.length < 12) {
      setIsTournaments(false);
    }
  };

  React.useEffect(() => {
    if (inView) {
      loadMoreTournaments();
    }
  }, [inView]);

  return (
    <>
      <div className="teams_list-wrapper">
        {tournaments.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </div>

      {isTournaments && (
        <div className="flex items-center justify-center m-4" ref={ref}>
          <Spinner className="h-12 w-12" />
        </div>
      )}
    </>
  );
}
