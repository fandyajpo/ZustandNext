"use client";
import { useStore, usePersistStore } from "@/store";

const Add = () => {
  const state = useStore();
  const { dispatch, user, count } = usePersistStore();

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
      <button className="bg-orange-500" onClick={() => dispatch({ count: 7 })}>
        Persist Item {count}
      </button>
      <button className="bg-orange-500" onClick={() => dispatch({ user: 5 })}>
        Persist Item {user}
      </button>
    </div>
  );
};

export default Add;
