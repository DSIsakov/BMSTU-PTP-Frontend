import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { baseURL } from "@/constants";
import { getTournamentData } from "@/lib/actions/actions";
import Image from "next/image";

export default async function Page({ params }: { params: { id: number } }) {
  const tournamentData = await getTournamentData(params.id);
  console.log(tournamentData);
  const timeStart = new Date(tournamentData.time);

  return (
    <section className="grid xl:grid-cols-2 md:grid-cols-1 w-full gap-8 pt-4">
      <div className="flex justify-center items-center">
        <Image
          src={`${baseURL}/tours/tour/${params.id}/image`}
          alt="tournament_logo"
          className="rounded-full border border-green-500 aspect-square"
          width={500}
          height={500}
        />
      </div>
      <div className="text-center">
        <h4 className="text-heading1-semibold text-light-1 break-all text-center">
          {tournamentData.name}
        </h4>
        <Badge className="text-light-2 text-[20px] bg-green-500 hover:bg-green-500 my-2">
          {timeStart.toLocaleString("ru-RU").slice(0, -3)}
        </Badge>
        <Separator className="bg-green-500 my-4 mx-auto w-[75%]" />
        <p className="text-body-normal text-light-2">
          {tournamentData.description}
        </p>
      </div>
    </section>
  );
}
