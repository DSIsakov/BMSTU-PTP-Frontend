import { Spinner } from "@/components/ui/spinner";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <Spinner className="w-48 h-48"></Spinner>
    </div>
  );
}
