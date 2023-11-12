import { getCaptains, getSearchTeams } from "@/lib/actions/actions";
import SearchBar from "@/components/shared/SearchBar";
import LoadMoreTeams from "@/components/pagination/LoadMoreTeams";
import AddTeam from "@/components/forms/AddTeam";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const teams = await getSearchTeams({ search });
  const captains = await getCaptains(teams);

  return (
    <>
      <div className="flex flex-row gap-2 items-center justify-center">
        <h1 className="head-text text-center">Команды</h1>
        <AddTeam />
      </div>
      <SearchBar
        searchable="teams"
        search={search}
        placeholder="Введите название команды"
      />
      <section key={Math.random()}>
        <LoadMoreTeams
          search={search}
          initialTeams={teams}
          initialCaptains={captains}
        />
      </section>
    </>
  );
}
