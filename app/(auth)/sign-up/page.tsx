import Registration from "@/components/forms/Registration";

function Page() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text text-center">Регистрация</h1>
      <section className="mt-9 bg-dark-2 p-10 rounded-3xl">
        <Registration />
      </section>
    </main>
  );
}

export default Page;
