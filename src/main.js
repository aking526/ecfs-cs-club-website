import javascriptLogo from "/javascript.svg";
import viteLogo from "/vite.svg";
import { setupSchedule } from "./schedule";
import { setupEmailForm } from "./emailForm";
import { setupCurrentProjects } from "./projects";
import "./styles/global.css";

const today = new Date();

document.querySelector("#app").innerHTML = `
  <div class="container">
    <div class="title-container">
      <h1>ECFS Computer Science Club</h1>
    </div>
    <div class="scp-container">
      <div id="schedule"></div>
      <div id="cur-projects"></div>
    </div>
    <div id="email-form"></div>
    <div>
      <p>This website was built with: </p>
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
    </div>
    <footer styles="padding: 25px; text-align: center;">
      &copy; ${today.getFullYear()} ECFS CS Club. All rights reserved.
    </footer>
  </div>
`;

setupSchedule(document.querySelector("#schedule"));
setupEmailForm(document.querySelector("#email-form"));
setupCurrentProjects(document.querySelector("#cur-projects"));