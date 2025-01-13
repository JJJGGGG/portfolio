import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About" },
    //{ name: "description", content: "Welcome to React Router!" },
  ];
}

export default function About() {
  return <>A</>;
}
