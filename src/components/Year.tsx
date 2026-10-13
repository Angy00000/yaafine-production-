"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** Année en cours pour le copyright (lue dans le navigateur, valeur fixe côté serveur). */
export function Year() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => 2026,
  );
  return <>{year}</>;
}
