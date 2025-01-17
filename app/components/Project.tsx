import { useTranslation } from "react-i18next";
import { MdLaunch } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export default function Project({name, imgSrc, websiteLink, githubLink, children}: {name: string, imgSrc: string, websiteLink?: string, githubLink?: string, children: React.ReactNode}) {
    const { t } = useTranslation();

    return (
        <div className="shadow px-4 py-2 rounded mb-4">
            <div className="mb-2">
                <div className="text-lg font-bold">{name}</div>
            </div>
            <div className="mb-4">{children}</div>
            <div className="flex justify-center mb-4">
                <img src={imgSrc} className="object-contain lg:w-1/2 w-full"/>
            </div>
            <div className="flex gap-4 mb-2">
                {websiteLink &&
                    <a className="flex align-middle leading-4 hover:text-blue-600 hover:underline" target="_blank" href={websiteLink}>{t("Website")} <MdLaunch className="ml-2"/></a>
                }
                {githubLink &&
                    <a className="flex align-middle leading-4 hover:text-blue-600 hover:underline" target="_blank" href={githubLink}>Github <FaGithub className="ml-2"/></a>
                }
                </div>
        </div>
    );
}