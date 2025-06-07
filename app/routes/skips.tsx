import type { Route } from "./+types/skips";
import { Skips } from "../skips/skips";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "This is the Skips Page" },
    { name: "description", content: "Welcome to Skips Application!" },
  ];
}

export default function Home() {
  return <Skips />;
}
