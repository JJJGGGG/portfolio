"use client"
import { useTranslation } from "react-i18next";
import { Link, NavLink, Outlet } from "react-router";
import StyledNavLink from "~/components/StyledNavLink";
import '../utils/i18n'
import { useState } from "react";

export default function ProjectLayout() {
  
  const { t, i18n: {changeLanguage, language} } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language)
  
  const handleChangeLanguage = (lang: "es" | "en") => {
    setCurrentLanguage(lang);
    changeLanguage(lang);
  }

  return (
    <div>
        <div className="px-32 py-4 flex shadow border-b border-b-gray">
            <div className="mr-12 flex gap-4 items-center">
                <img src="/portrait.jpg" className="w-32 rounded" alt="no-img"/>
                <div className="text-xl">Julián García G.</div>
            </div>
            <div className="flex gap-12 items-center">
                <StyledNavLink to="/" text={t("Home")}></StyledNavLink>
                <StyledNavLink to="/about" text={t("About")}></StyledNavLink>
            </div>
            <div className="flex ml-auto">
                <div className="flex items-center px-2 py-1 rounded">
                    <select 
                        value={currentLanguage} 
                        onChange={
                            (e) => {
                                handleChangeLanguage(e.target.value as "en" | "es")
                            }
                        }
                    >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                    </select>
                </div>
            </div>
        </div>
      <main>
        <div className="px-32 py-8">
            <Outlet />
        </div>
      </main>
    </div>
  );
}