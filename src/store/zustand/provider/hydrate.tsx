"use client";

import { PropsWithChildren, useEffect } from "react";
import { usePersistStore } from "@/store";

export const ZustandHydrateProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    usePersistStore.persist.rehydrate();

    return () => {
      usePersistStore.persist.rehydrate();
    };
  }, []);

  return <>{children}</>;
};
