"use client";
import { useStore } from "@/store";

const Add = () => {
  const state = useStore();
  return (
    <>
      <button onClick={() => state.dispatch({ mears: 9 })}>Add Bears</button>
      <button onClick={() => state.dispatch({ bears: 3 })}>Add Bears</button>
    </>
  );
};

export default Add;
