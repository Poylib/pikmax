"use client";

import { login } from "./action";

export default function Button() {
  return <button onClick={login}>Click me</button>;
}
