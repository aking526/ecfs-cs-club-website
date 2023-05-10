import "./styles/global.css";
import javascriptLogo from "/javascript.svg";
import viteLogo from "/vite.svg";
import { setupSchedule } from "./schedule";
import { setupEmailForm } from "./emailForm";
import { setupProjects } from "./projects";

const ECFS_LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/f/f3/ECFS_SunLogo.jpg";

const today = new Date();

document.querySelector("#app").innerHTML = `
  <div class="container">
    <div class="title-container">
      <img src="${ECFS_LOGO_URL}" class="logo ecfs" alt="ECFS logo" />
      <h1>ECFS Computer Science Club</h1>
    </div>
    <div class="sef-container">
      <div id="schedule"></div>
      <div id="email-form"></div>
    </div>
    <div id="projects"></div>
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
setupProjects(document.querySelector("#projects"));
