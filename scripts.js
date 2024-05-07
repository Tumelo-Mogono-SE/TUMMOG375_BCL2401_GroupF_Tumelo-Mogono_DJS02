const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  console.log(dividend);
  console.log(divider)
  
  let divideResult = dividend / divider;

  if ( divideResult % 1 !== 0) {
    divideResult = Math.floor(divideResult);
  }

  if ( dividend === "" || divider === "") {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return
  }

  result.innerText = divideResult;
});