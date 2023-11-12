import { baseURL } from "@/constants";
import { TeamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface TeamCardProps {
  team: TeamProps;
  captainName: [];
}

export default function TeamCard({ team, captainName }: TeamCardProps) {
  const { id, members, name, description, captain } = team;

  return (
    <Link href={`/teams/${id}`}>
      <div className="team-card">
        <Image
          src={`${baseURL}/teams/team/${id}/image/`}
          alt="team_logo"
          className="rounded-full w-44 h-44 border border-light-2"
          width={176}
          height={176}
        />
        <h4 className="text-heading3-bold text-light-1 break-all text-center">
          {name}
        </h4>
        <h5 className="text-heading4-medium text-light-2 break-all text-center">
          Капитан {captainName}
        </h5>
        <p className="text-body-normal text-gray-1">
          Участников: {members.length}
        </p>
      </div>
    </Link>
  );
}
