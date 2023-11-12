"use client";

import { getNewsList } from "@/lib/actions/actions";
import { NewsProps } from "@/types";
import React from "react";
import { useInView } from "react-intersection-observer";
import NewsCard from "../cards/NewsCard";
import { Spinner } from "../ui/spinner";

export default function LoadMoreNews({
  initialNews,
}: {
  initialNews: NewsProps[];
}) {
  const [page, setPage] = React.useState(1);
  const [news, setNews] = React.useState<NewsProps[]>(initialNews);
  const [isNews, setIsNews] = React.useState(true);

  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreNews = async () => {
    await delay(1000);
    const nextPage = page + 1;
    const newNews = await getNewsList(nextPage, 8);

    if (newNews?.length) {
      setPage(nextPage);
      setNews((prewNews: NewsProps[]) => [...prewNews, ...newNews]);
    }

    if (newNews?.length < 12) {
      setIsNews(false);
    }
  };

  React.useEffect(() => {
    if (inView) {
      loadMoreNews();
    }
  }, [inView]);

  return (
    <>
      <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 md:grid-cols-1 grid-cols-1 w-full gap-8 pt-4">
        {news.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>

      {isNews && (
        <div className="flex items-center justify-center m-4" ref={ref}>
          <Spinner className="h-12 w-12" />
        </div>
      )}
    </>
  );
}
