import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About" },
    //{ name: "description", content: "Welcome to React Router!" },
  ];
}

export default function About() {
  return <>
    <div className="pb-4">
      <p>
      I Studied Computer Engineering in <a href="https://www.uc.cl/">Pontificia Universidad Católica de Chile</a>. 
      Then I did a Masters in Computer Science, in the same university. 
      My thesis was about using Automata to efficiently manage a streaming database, more in detail, about adding time window operators to the language and processing them with time automata.
      </p>

      <p>
      While I studied and did my masters, I worked part time at a small company for four years.
      </p>

      <p>
      My preferred languages are Javascript and Python. I have worked with React, Django, Express, Sveltekit.
      </p>

      <p>
      I like leading people and teaching. I also like coding and doing awesome stuff with powerful frameworks.
      </p>

      <p>
      I like music and arts, I play the piano and lately have learned to dance salsa.
      </p>
    </div>

    <div className="flex justify-center gap-4">
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
  </>;
}
