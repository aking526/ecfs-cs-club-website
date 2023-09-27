/**
 * 
 * @param {*} element 
 */
export function setupEmailForm(element) {
  element.innerHTML = `
    <h2>Email List</h2>
    <button class="join-btn">Join</button>
    <button class="remove-btn">Remove</button>
  `;
}

// export function setupEmailForm(element) {
//   element.innerHTML = `
//     <div class="container">
//       <h4>Want to join the email list?</h4>
//       <input id="in" type="text" placeholder="example@ecfs.org" />
//       <button id="submit-btn">Submit</button>
//     </div>
//   `;

//   let valid = true;
//   handleValidChange(valid);

//   let email = "";
//   document.getElementById("in").addEventListener("input", (evt) => { 
//     email = evt.target.value; 
//     valid = true;
//     handleValidChange(valid);
//   });

//   const emailRegex = /^\w+([-+.']\w+)*@ecfs.org/;

//   document.getElementById("submit-btn").addEventListener("click",  () => {
//     if (email === "") return;

//     if (!emailRegex.test(email)) {
//       valid = false;
//       handleValidChange(valid);
//       return;
//     }
    

//   });
// }

// function handleValidChange(valid) {
//   const btnStyling = {
//     shared: "font-size: 14px; padding: 0.5vmin; margin: 1.5px; border-radius: 5px; border: 1px solid transparent;",
//     true: "background-color: blue;",
//     false: "background-color: red;"
//   };

//   const btn = document.querySelector("#submit-btn");
//   btn.style = `${btnStyling.shared} ${btnStyling[valid]}`;
// }
