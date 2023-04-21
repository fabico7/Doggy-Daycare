/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? Yes
// When do they need to be reset or updated? Whenever user changes

const COST_FULL_DAY = 35;
const COST_PER_HALF_DAY = 20;

let selectedDays = [];
let isHalfDay = false;

const dayButtons = document.querySelectorAll('.day-selector li');
const fullDayButton = document.querySelector('#full');
const halfDayButton = document.querySelector('#half');
const clearButton = document.querySelector('#clear-button');
const calculatedCostElement = document.querySelector('#calculated-cost');


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function handleDayClick(event) {
    const selectedDay = event.target.getAttribute('id');
    if (selectedDays.includes(selectedDay)) {
      return;
    }
    selectedDays.push(selectedDay);
    event.target.classList.add('clicked');
    calculateCost();
  }
  
  dayButtons.forEach(button => {
    button.addEventListener('click', handleDayClick);
  });


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays() {
    selectedDays = [];
    isHalfDay = false;
    dayButtons.forEach(button => {
      button.classList.remove('clicked');
    });
    calculateCost();
  }
  
  clearButton.addEventListener('click', clearDays);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function handleHalfDayClick() {
    isHalfDay = true;
    fullDayButton.classList.remove('clicked');
    halfDayButton.classList.add('clicked');
    calculateCost();
  }
  
function handleFullDayClick() {
  isHalfDay = false;
  halfDayButton.classList.remove('clicked');
  fullDayButton.classList.add('clicked');
  calculateCost();
}
  

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener('click', handleFullDayClick);
halfDayButton.addEventListener('click', handleHalfDayClick);


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
    let totalCost = 0;
    selectedDays.forEach(day => {
      totalCost += isHalfDay ? COST_PER_HALF_DAY : COST_FULL_DAY;
    });
    calculatedCostElement.innerHTML = totalCost;
  }
