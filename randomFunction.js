
let getRand = localStorage.getItem('getRandom')
let one = func_printbydte('pdf');
let two =  func_printbydoc('pdf');
let listData = [one,two]

setTimeout(() => {
 listData[getRand];
  
  localStorage.setItem('getRandom',getRand.toString() + 1)
}, 2000)

//create element
const newImage = document.createElement("img");
newImage.classList.add("feat-img");
newImage.setAttribute("src", "logo.svg");
newImage.setAttribute("alt", "The company logo");
newImage.style.cssText = "display: block";