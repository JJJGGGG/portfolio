import { useTranslation } from "react-i18next";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    //{ name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const { t } = useTranslation();
  return <div className="relative">
    <img src="/banner.jpg" />
    <div className="flex flex-col w-full h-full absolute top-0 left-0 z-10 justify-center">
      <div className="flex flex-col items-center px-64 py-16 bg-black bg-opacity-50 gap-16">
        <div className="text-white text-4xl text-center w-full">Julián Manuel García González</div>
        <div className="text-white text-4xl text-center w-full">
          {t("Full Stack Developer")}
        </div>
      </div>
    </div>
  </div>;
}
