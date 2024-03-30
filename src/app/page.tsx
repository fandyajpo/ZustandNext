import Add from "@/components/add";
import Count from "@/components/count";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Count />
      <Link href={"/home"}>Hai</Link>
      <Add />
    </>
  );
}
