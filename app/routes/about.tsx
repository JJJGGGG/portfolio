import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import type { Route } from "./+types/home";
import { useTranslation } from "react-i18next";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About" },
    //{ name: "description", content: "Welcome to React Router!" },
  ];
}

export default function About() {
  const { t } = useTranslation();
  return <>
    <div className="pb-4">
      <div className="text-xl mb-2 mt-4">My education</div>
      <p>
        {t("education-1")}
      </p>
      
      <p>
        {t("education-2")}
      </p>

      <div className="text-xl mb-2 mt-4">Technical skills</div>
      <p>
        {t("techs")}
      </p>

      <div className="text-xl mb-2 mt-4">Soft Skills</div>
      <p>
        {t("soft")}
      </p>

      <div className="text-xl mb-2 mt-4">Hobbies</div>
      <p>
        {t("hobbies")}
      </p>

      <div className="text-xl mb-2 mt-4">Links</div>

      <div className="flex gap-4">
        <div>                    
          <a className="flex align-middle leading-4 hover:text-blue-600 hover:underline" target="_blank" href={"/Curriculum_Vitae.pdf"}>CV <HiDocumentText className="ml-2"/> </a>
        </div>
        <div>
          <a className="flex align-middle leading-4 hover:text-blue-600 hover:underline" target="_blank" href={"https://www.linkedin.com/in/julian-garcia-86087a20a/"}>LinkedIn <FaLinkedin className="ml-2"/> </a>
        </div>
        <div>
          <a className="flex align-middle leading-4 hover:text-blue-600 hover:underline" target="_blank" href={"https://github.com/JJJGGGG/"}>Github <FaGithub className="ml-2"/> </a>
        </div>
      </div>
    </div>
  </>;
}
