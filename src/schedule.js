import { csvToArray } from "./utils";

/**
 * 
 * @param {*} element 
 */
export async function setupSchedule(element) {
  const schedule = csvToArray(await (await fetch("./files/schedule.csv")).text());

  let table = `
    <table>
      <caption>Upcoming meetings</caption>
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Location</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
  `;

  for (let i = 0; i < schedule.length; i++) {
    const cur = schedule[i];
    table += `
      <tr>
        <td>${cur["Date"]}</td>
        <td>${cur["Time"]}</td>
        <td>${cur["Location"]}</td>
        <td>${cur["Message"]}</td>
      </tr>
    `; 
  }
  
  table += `
      </tbody>
    </table>
  `

  element.innerHTML = `
    ${table}
  `;
}