import { getSearchTournaments } from "@/lib/actions/actions";
import SearchBar from "@/components/shared/SearchBar";
import LoadMoreTournaments from "@/components/pagination/LoadMoreTournaments";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const tournaments = await getSearchTournaments({ search });

  return (
    <>
      <h1 className="head-text text-center">Турниры</h1>
      <SearchBar
        searchable="tournaments"
        search={search}
        placeholder="Введите название турнира"
      />
      <section key={Math.random()}>
        <LoadMoreTournaments search={search} initialTournaments={tournaments} />
      </section>
    </>
  );
}
