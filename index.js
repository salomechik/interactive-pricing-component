const grey = document.querySelector(".grey");
const numbers = document.querySelector(".numbers");
const whiteBall = document.querySelector(".ball")
const range = document.querySelector(".range");
const monthYear = document.querySelector(".month")
const Inputs = document.querySelectorAll('input[type="range"]');
const pageViews = document.querySelector(".pageviews");


Inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    myfunction (e)
    if(whiteBall.classList == "ball"){
      monthYear.textContent = "/ month";
      if (input.value == 0) {
        pageViews.textContent = "10K pageviews";
        numbers.textContent = "$8.00";
      };
      if (input.value == 25){
        pageViews.textContent = "50K pageviews";
        numbers.textContent = "$12.00";
      };
      if (input.value == 50){
        pageViews.textContent = "100K pageviews";
        numbers.textContent = "$16.00";
      };
      if (input.value == 75){
        pageViews.textContent = "500K pageviews";
        numbers.textContent = "$24.00";
      };
      if (input.value == 100){
        pageViews.textContent = "1M pageviews";
        numbers.textContent = "$36.00";
      };
    };
    if (whiteBall.classList == "ball active"){
      
      if (input.value == 0) {
        pageViews.textContent = "10K pageviews";
        numbers.textContent = "$72.00";
      };
      if (input.value == 25){
        pageViews.textContent = "50K pageviews";
        numbers.textContent = "$108.00";
      };
      if (input.value == 50){
        pageViews.textContent = "100K pageviews";
        numbers.textContent = "$144.00";
      };
      if (input.value == 75){
        pageViews.textContent = "500K pageviews";
        numbers.textContent = "$216.00";
      };
      if (input.value == 100){
        pageViews.textContent = "1M pageviews";
        numbers.textContent = "$324.00";
      };
    }
  })
});



whiteBall.addEventListener("click", () => {
   whiteBall.classList.toggle("active");
   monthYear.textContent = "/ year";
   grey.classList.toggle("toggle");
   if(whiteBall.classList == "ball"){
    monthYear.textContent = "/ month";
    if (range.value == 0) {
      pageViews.textContent = "10K pageviews";
      numbers.textContent = "$8.00";
    };
    if (range.value == 25){
      pageViews.textContent = "50K pageviews";
      numbers.textContent = "$12.00";
    };
    if (range.value == 50){
      pageViews.textContent = "100K pageviews";
      numbers.textContent = "$16.00";
    };
    if (range.value == 75){
      pageViews.textContent = "500K pageviews";
      numbers.textContent = "$24.00";
    };
    if (range.value == 100){
      pageViews.textContent = "1M pageviews";
      numbers.textContent = "$36.00";
    };
  };
  if (whiteBall.classList == "ball active"){
    
    if (range.value == 0) {
      pageViews.textContent = "10K pageviews";
      numbers.textContent = "$72.00";
    };
    if (range.value == 25){
      pageViews.textContent = "50K pageviews";
      numbers.textContent = "$108.00";
    };
    if (range.value == 50){
      pageViews.textContent = "100K pageviews";
      numbers.textContent = "$144.00";
    };
    if (range.value == 75){
      pageViews.textContent = "500K pageviews";
      numbers.textContent = "$216.00";
    };
    if (range.value == 100){
      pageViews.textContent = "1M pageviews";
      numbers.textContent = "$324.00";
    };
  }
})

function myfunction (e) {
  let target = e.target;
  const value = target.value;
  target.style.backgroundSize = value + "% 100%"
}