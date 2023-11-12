import { baseURL } from "@/constants";
import { TournamentsProps } from "@/types";
import Link from "next/link";

export default function TournamentCard({
  tournament,
}: {
  tournament: TournamentsProps;
}) {
  const { id, teams, name, description, time } = tournament;
  const timeStart = new Date(time);

  const cardStyle = {
    backgroundImage: `url(${baseURL}/tours/tour/${id}/image/)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Link href={`/tournaments/${id}`}>
      <div
        className="flex flex-col p-6 justify-end items-center rounded-lg h-[350px] hover:border border-green-500"
        style={cardStyle}
      >
        <div className="bg-glassmorphism backdrop-blur-lg rounded-lg text-center p-1">
          <h4 className="text-heading3-bold text-light-1 break-all">{name}</h4>
          <h5 className="text-heading4-medium text-light-2 break-all">
            Начало {timeStart.toLocaleString("ru-RU").slice(0, -3)}
          </h5>
          <p className="text-body-normal text-gray-1">
            Участников: {teams.length}
          </p>
        </div>
      </div>
    </Link>
  );
}
