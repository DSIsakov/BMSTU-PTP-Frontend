import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { baseURL } from "@/constants";
import { getTeamData, getUserData } from "@/lib/actions/actions";
import Image from "next/image";

export default async function Page({ params }: { params: { id: number } }) {
  const teamData = await getTeamData(params.id);
  const captainName = await getUserData(teamData.captain);

  return (
    <section className="grid xl:grid-cols-2 md:grid-cols-1 w-full gap-8 pt-4">
      <div className="flex justify-center items-center">
        <Image
          src={`${baseURL}/teams/team/${params.id}/image`}
          alt="team_logo"
          className="rounded-full border border-light-2 aspect-square"
          width={500}
          height={500}
        />
      </div>
      <div className="text-center">
        <h4 className="text-heading1-semibold text-light-1 break-all text-center">
          {teamData.name}
        </h4>
        <Badge className="text-light-2 text-[20px] bg-green-500 hover:bg-green-600 my-2">
          Капитан {captainName.username}
        </Badge>
        <div className="flex justify-center items-center">
          {teamData.members.map((member) => (
            <Badge className="text-light-2 text-[16px] bg-green-500 hover:bg-green-600 ml-1">
              {member.username}
            </Badge>
          ))}
        </div>
        <Separator className="bg-green-500 my-4 mx-auto w-[75%]" />
        <p className="text-body-normal text-light-2">{teamData.description}</p>
      </div>
    </section>
  );
}
