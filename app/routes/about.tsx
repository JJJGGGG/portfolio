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
      <div className="text-xl mb-2 mt-4">My education</div>
      <p>
      I Studied Computer Engineering in Pontificia Universidad Católica de Chile.
      I did courses on software engineering as well as on computer science.
      Some of them include Advanced Web Applications, Testing, 
      For some of them, I was later a teacher assistant, where I graded homeworks and tests, and imparted some tutorials, depending on the course.
      Because of my interest on Computer Science, I decided to do a Masters, in the same university.
      My thesis was about using Automata to efficiently manage a streaming database.
      More in detail, my thesis argued about adding time window operators to the query language and evaluating the queries efficiently.
      </p>
      
      <p>
      While I studied and did my masters, I worked part time as a Software Engineer at a small company for four years.
      My area of work there was mainly Full Stack development, and I used technologies such as ASP.Net Core, React, Flask, PostgreSQL, and services such as Azure App Service, Azure MS SQL, Github, and more.
      We did many experimental and innovative projects, adding machine learning to the Full Stack pages that we developed.
      </p>

      <div className="text-xl mb-2 mt-4">Technical skills</div>
      <p>
      My preferred languages are Javascript and Python. Since first year in the university, we worked with python, and since third year, with javascript.
      I have used these technologies in many of the projects I have made (personal and work-related).
      In that field, I have worked with React, Django, Flask, Express, Sveltekit.

      Other technologies that I am profficient in are Git, Github and Github Actions, ASP.Net Core, and many of the Azure services such as App Service, Service Bus, MS SQL, Azure Functions.
      </p>

      <div className="text-xl mb-2 mt-4">Soft Skills</div>
      <p>
      I like leading people and teaching.
      In one hand, I was leading frontend developer for a course in university where we developed code for a real company.
      I also have leaded other projects such as a web page to manage stakeholders for a mining consultant.
      In the other hand I was teaching assistant for 3 years while in university, in many courses.
      </p>

      <div className="text-xl mb-2 mt-4">Hobbies</div>
      <p>
      I like music and arts.
      My preferred types of music are Jazz and classical music (baroque and romantic specially).
      I play the piano for more than 10 years, that being my main instrument.
      Lately, I have learned to dance salsa and enjoy it a lot.
      I enjoy cooking and doing fancy and elaborate dishes.
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
