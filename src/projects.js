/**
 * 
 * @param {Element} element 
 * @param {string} name 
 * @param {string[]} description 
 */
export function setupProjectComponent(element, name, description) {
  element.innerHTML = `
    ${name}
    ${description}
  `;
}


/**
 * 
 * @param {*} element 
 */
export function setupCurrentProjects(element) {
  element.innerHTML = `
    <div>
      <h3>Current projects:</h3>
      <div>
        <div id="math-forum-container"></div>
      </div>
    </div>
  `;

  setupProjectComponent(document.querySelector("#math-forum-container"), "ECFS Math Forum", "Forum for math questions. Supplemental to the math center");
} 