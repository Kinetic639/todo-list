// const events = [];

// const saveToStorage = () => {
//   localStorage.setItem("events", JSON.stringify(events));
// };

// const getFromStorage = () => {
//   const dataFromStorage = JSON.parse(localStorage.getItem("events"));
//   if (dataFromStorage && dataFromStorage.length) {
//     events.push(...dataFromStorage);
//     displayEvents();
//   }
// };

// const displayEvents = () => {
//   const listElement = document.getElementById("todo-list");
//   listElement.innerHTML = "";
//   events.forEach(event => {
//     const cardElement = document.createElement("div");
//     cardElement.classList.add("task-card");
//     cardElement.setAttribute("id", event.id);
//     const titleElement = document.createElement("h3");
//     titleElement.innerText = event.title;
//     const descElement = document.createElement("p");
//     const buttonElement = document.createElement("button");
//     buttonElement.innerText = "Delete";
//     // buttonElement.setAttribute('id','delete-button')
//     buttonElement.classList.add("delete-button");
//     descElement.innerText = event.description;
//     listElement.appendChild(cardElement);
//     cardElement.appendChild(titleElement);
//     cardElement.appendChild(descElement);
//     cardElement.appendChild(buttonElement);
//   });
// };

// const addEvent = e => {
//   e.preventDefault();
//   // const inputElement = document.getElementById("todo-input");
//   // events.push(inputElement.value);
//   // inputElement.value = "";

//   let task = {
//     id: Date.now(),
//     title: document.getElementById("task-title").value,
//     description: document.getElementById("task-desc").value
//   };
//   events.push(task);
//   document.querySelector("form").reset();
//   saveToStorage();
//   displayEvents();
// };

// const deleteEvent = e => {
//   const currentCardId = e.currentTarget.parentNode.id;
//   console.log(currentCardId);
//   console.log(events);
// };
// const addEventListener = () => {
//   const submitButton = document.querySelector("form button");
//   submitButton.addEventListener("click", addEvent);

//   const deleteButton = document.querySelectorAll(".delete-button");
//   deleteButton.forEach(e => {
//     e.addEventListener("click", deleteEvent);
//   });
// };

// getFromStorage();

// addEventListener();
