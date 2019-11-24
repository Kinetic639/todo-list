import {addEvent, displayForm} from './list'
const addEventListener = () => {
  const submitButton = document.querySelector("#btn-submit");
  submitButton.addEventListener("click", addEvent);
console.log('działa');

};

const selectTypeOfTask = () => {
    const selectButton = document.querySelector("#select-type");
    selectButton.addEventListener("change", displayForm);
}

export { addEventListener, selectTypeOfTask };
