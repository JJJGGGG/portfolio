import { useTranslation } from "react-i18next";
import Project from "~/components/Project";
import type { Route } from "./+types/home";
import '../utils/i18n'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects" },
    //{ name: "description", content: "Welcome to React Router!" },
  ];
}

export default function About() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="text-xl mb-4">{t("My Projects")}</div>
      <Project name="Guess Who" imgSrc="/guess_who.png" websiteLink="https://guess-who-6ghh.onrender.com/" githubLink="https://github.com/JJJGGGG/guess_who/tree/main">
        {t("A client to play games of guess who with anime characters.")}
      </Project>
      <Project name="Finances PWA" imgSrc="/finances-pwa.png" websiteLink="https://ephemeral-chaja-cd9706.netlify.app/" githubLink="https://github.com/JJJGGGG/finanzas-pwa/tree/main">
        {t("A fully local PWA to keep track of incomes and spendings.")}
      </Project>
    </div>
  );
}
