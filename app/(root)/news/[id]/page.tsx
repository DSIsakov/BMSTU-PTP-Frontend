import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { baseURL } from "@/constants";
import { getNewsData } from "@/lib/actions/actions";
import Image from "next/image";

export default async function Page({ params }: { params: { id: number } }) {
  const newsData = await getNewsData(params.id);
  const timeStart = new Date(newsData.created_at);

  return (
    <section className="flex flex-col">
      <div className="justify-center items-center">
        <h4 className="text-heading1-semibold text-light-1 break-all text-center">
          {newsData.title}
        </h4>
        <Image
          src={`${baseURL}/news/${params.id}/image`}
          alt="news_image"
          className="rounded-lg border border-green-500"
          width={1280}
          height={720}
        />
      </div>
      <div className="text-center">
        <Badge className="text-light-2 text-[20px] bg-green-500 hover:bg-green-500 my-2">
          {timeStart.toLocaleString("ru-RU").slice(0, -3)}
        </Badge>
        <Separator className="bg-green-500 my-2 mx-auto w-[75%]" />
        <p className="text-body-normal text-light-2">{newsData.content}</p>
      </div>
    </section>
  );
}
