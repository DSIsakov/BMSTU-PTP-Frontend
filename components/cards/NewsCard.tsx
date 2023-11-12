import { baseURL } from "@/constants";
import { NewsProps } from "@/types";
import Link from "next/link";

export default function NewsCard({ news }: { news: NewsProps }) {
  const { id, title, content, created_at } = news;
  const timePublished = new Date(created_at);

  const cardStyle = {
    backgroundImage: `url(${baseURL}/news/${id}/image/)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Link href={`/news/${id}`}>
      <div
        className="flex flex-col p-6 justify-end items-center rounded-lg h-[350px] hover:border border-green-500"
        style={cardStyle}
      >
        <div className="bg-glassmorphism backdrop-blur-lg rounded-lg text-center p-1">
          <h4 className="text-heading3-bold text-light-1 break-all">{title}</h4>
          <h5 className="text-heading4-medium text-light-2 break-all">
            {timePublished.toLocaleString("ru-RU").slice(0, -3)}
          </h5>
        </div>
      </div>
    </Link>
  );
}
