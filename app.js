let sliderInner = document.getElementById('slider--inner');
let images = sliderInner.querySelectorAll('img');

let index = 1;
setInterval(() => {
  let percentage = index * -100;
  sliderInner.style.transform = "translateX(" + percentage + "%)";
  index++;
  if (index > images.length - 1) {
    index = 1;
  }
}, 5000)