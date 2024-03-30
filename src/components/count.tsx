"use client";
import { useStore } from "@/store";

const Count = () => {
  const { mears, bears, dispatch } = useStore();
  return (
    <>
      <button onClick={() => dispatch({ bears: 3 })}>Change!</button>
      <p>{mears}</p>
      <p>{bears}</p>
    </>
  );
};

export default Count;
