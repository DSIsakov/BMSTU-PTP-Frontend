import { getNewsList } from "@/lib/actions/actions";
import LoadMoreNews from "@/components/pagination/LoadMoreNews";

export default async function Page() {
  const teams = await getNewsList(1, 8);

  return (
    <>
      <div className="flex flex-row gap-2 items-center justify-center">
        <h1 className="head-text text-center">Новости</h1>
      </div>
      <section key={Math.random()}>
        <LoadMoreNews initialNews={teams} />
      </section>
    </>
  );
}
