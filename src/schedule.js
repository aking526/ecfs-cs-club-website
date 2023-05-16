import fs from "fs";
import { csvToArray } from "./utils";

export function setupSchedule(element) {
  const file = fs.readFileSync("../files/schedule.csv").toString();
  const data = csvToArray(file); 

  console.log(data);

  element.innerHTML = `
    <h2>Schedule</h2>
  `;
}
