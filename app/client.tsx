"use client";

import { serverFunction } from "./server";

export default function ButtonComponent() {
  return <button onClick={() => serverFunction()}>TEST</button>;
}
