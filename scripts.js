const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  
  let divideResult = dividend / divider;

  if ( divideResult % 1 !== 0) {
    divideResult = Math.floor(divideResult);
  }

  result.innerText = divideResult;
});