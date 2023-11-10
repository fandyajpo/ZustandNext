"use client";
import { useStore } from "@/store";

const Count = () => {
  const { mears } = useStore();
  return (
    <>
      <p>{mears}</p>
    </>
  );
};

export default Count;
