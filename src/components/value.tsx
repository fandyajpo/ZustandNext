"use client";
import { useStore } from "@/store";

const Count = () => {
  const { mears, bears, dispatch } = useStore();
  return (
    <>
      <p>{mears}</p>
      <p>{bears}</p>
    </>
  );
};

export default Count;
