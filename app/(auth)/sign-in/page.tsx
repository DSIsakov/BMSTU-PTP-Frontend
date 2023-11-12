import Login from "@/components/forms/Login";

function Page() {
  return (
    <main className="mx-auto flex max-w-lg flex-col justify-start px-10 py-20">
      <h1 className="head-text text-center">Войти</h1>
      <section className="mt-9 bg-dark-2 p-10 rounded-3xl">
        <Login />
      </section>
    </main>
  );
}

export default Page;
