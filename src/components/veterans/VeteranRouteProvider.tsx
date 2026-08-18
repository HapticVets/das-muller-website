"use client";

import { createContext, useContext } from "react";

const VeteranRouteModeContext = createContext(false);

export function VeteranRouteProvider({
  children,
  useSubdomainPaths,
}: {
  children: React.ReactNode;
  useSubdomainPaths: boolean;
}) {
  return (
    <VeteranRouteModeContext.Provider value={useSubdomainPaths}>
      {children}
    </VeteranRouteModeContext.Provider>
  );
}

export function useVeteranRouteMode() {
  return useContext(VeteranRouteModeContext);
}
