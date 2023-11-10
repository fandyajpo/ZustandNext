import Add from "@/components/add";
import Count from "@/components/count";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <p>Home | Test Global State</p>
      <Link href={"/"}>Hai</Link>
      <Count />
      <Add />
    </>
  );
}
