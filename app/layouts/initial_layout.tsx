import { useTranslation } from "react-i18next";
import { Outlet } from "react-router";
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
          <div className="px-32 py-4 flex">
              <div className="mr-12 flex gap-4 items-center">
                  {/* <div className="w-32 h-32 rounded" /> */}
                  <div className="text-xl select-none">Julián García G.</div>
              </div>
              <div className="flex gap-12 items-center">
                  <StyledNavLink to="/" text={t("Home")}></StyledNavLink>
                  <StyledNavLink to="/about" text={t("About Me")}></StyledNavLink>
                  <StyledNavLink to="/projects" text={t("Projects")}></StyledNavLink>
              </div>
              <div className="flex ml-auto">
                  <div className="flex items-center px-2 py-1 rounded">
                      <select 
                          value={currentLanguage} 
                          className="px-2 py-1 rounded"
                          onChange={
                              (e) => {
                                  handleChangeLanguage(e.target.value as "en" | "es")
                              }
                          }
                      >
                          <option value="en">🇺🇸</option>
                          <option value="es">🇪🇸</option>
                      </select>
                  </div>
              </div>
          </div>
        <main>
          <div className="">
              <Outlet />
          </div>
        </main>
      </div>
    );
  }