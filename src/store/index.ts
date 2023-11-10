import { create } from "zustand";

interface BearValue {
  bears?: number;
  mears?: number;
}

interface BearState extends BearValue {
  dispatch: (args: BearValue) => void;
}

const initial = {
  bears: 0,
  mears: 0,
};

// ITS VERY EASY NA USE
export const useStore = create<BearState>((set) => ({
  ...initial,
  dispatch: (by: BearValue) => set(() => by),
}));
