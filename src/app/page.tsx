import Add from "@/components/add";
import Count from "@/components/count";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <p>Root | Test Global State</p>
      <Link href={"/home"}>Hai</Link>
      <Count />
      <Add />
    </>
  );
}
