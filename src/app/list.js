// import { getEvents } from "./data";

// const displayEvents = () => {
//   const listElement = document.getElementById("todo-list");
//   listElement.innerHTML = "";
//   const events = getEvents();
//   events.forEach(event => {
//     const liElement = document.createElement("li");
//     liElement.innerText = event;
//     listElement.appendChild(liElement);
//   });
// };

const displayForm = e => {
  const shoppingContainer = document.getElementById("shopping-container");
  const meetingContainer = document.getElementById("meeting-container");
  switch (e.target.value) {
    case "task":
      meetingContainer.classList.add("hidden");
      shoppingContainer.classList.add("hidden");
      break;
    case "meeting":
      meetingContainer.classList.remove("hidden");
      shoppingContainer.classList.add("hidden");
      break;
    case "shopping-list":
      meetingContainer.classList.add("hidden");
      shoppingContainer.classList.remove("hidden");
      console.log("shopping");

      break;
  }
};

const addEvent = e => {
  e.preventDefault();
  //   const inputElement = document.getElementById("todo-input");
  //   events.push(inputElement.value);
  //   inputElement.value = "";
  //   displayEvents();
  //   saveToStorage();
  console.log("działam dobrze");
};

export { addEvent, displayForm };
// export { displayEvents, addEvent };
