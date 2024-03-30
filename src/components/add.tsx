"use client";
import { useStore, usePersistStore } from "@/store";
import { useEffect } from "react";

const Add = () => {
  const state = useStore();
  const persist = usePersistStore();

  useEffect(() => {
    usePersistStore.persist.rehydrate();
  }, []);

  return (
    <div className="bg-white flex flex-col">
      <button
        data-tip={"hai"}
        className="tooltip bg-red-500"
        onClick={() => state.dispatch({ mears: 9 })}
      >
        Add Mears
      </button>
      <button
        className="bg-red-500"
        onClick={() => state.dispatch({ mears: 4 })}
      >
        Update Mears
      </button>
      <button
        className="bg-blue-500"
        onClick={() => state.dispatch({ bears: 3 })}
      >
        Add Bears
      </button>
      <button
        className="bg-orange-500"
        onClick={() => state.dispatch({ bears: 3, mears: 9 })}
      >
        Bulk Update
      </button>
      <button
        className="bg-orange-500"
        onClick={() => persist.dispatch({ count: 7 })}
      >
        Persist Item {persist.count}
      </button>
    </div>
  );
};

export default Add;
