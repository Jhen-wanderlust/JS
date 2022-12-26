//mouse click


//click and alert the innerHTML

function offset(el) {
var rect = el.getBoundingClientRect(),
scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
scrollTop = window.pageYOffset || document.documentElement.scrollTop;
return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

// get x an y of the element

window.scrollY + document.querySelector('#elementId').getBoundingClientRect().top // Y

window.scrollX + document.querySelector('#elementId').getBoundingClientRect().left // X

// or 

var div = document.querySelectorAll(".container")[0].querySelector('#badButton');
var divOffset = offset(div);
console.log(divOffset.left.toFixed(1), divOffset.top.toFixed(1));


//add the decimal number to the original number

document.addEventListener('click', (e) => {
console.log(e.target)
})

const x = 20 
const y = 200

const click = (x, y) => {
const ev = new MouseEvent('click', {
'view': window,
'bubbles': true,
'cancelable': true,
'screenX': x,
'screenY': y
});
const el = document.elementFromPoint(x, y);
el.dispatchEvent(ev);
}
click(x, y)







//applicable on the test for JS

//hiddenlayers

document.querySelectorAll('#spa div button')[0].click();
// Green button pressed

 document.querySelectorAll('#spa div button')[1].click();

//hiddenlayers: Blue button pressed

var evt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: 20,
    /* whatever properties you want to give it */
}),
    ele = document.querySelectorAll('#spa div button')[1];
    ele.dispatchEvent(evt);



    // verify text 
    let username = document.querySelectorAll('.badge-secondary span')[0].innerHTML;
   let text=  document.querySelectorAll('.badge-secondary')[3].innerHTML;
   let cleantext = text.replace("<span>UserName</span>",'');
   let main = cleantext.replace("\n",'');
   main;


   //ajax data


   LoadLabel();

   setTimeout(() => {
       

    let data = document.querySelectorAll('.bg-success')[0].innerHTML;
     alert(data);

   }, 20000);


   //Progress Bar

   Start();


   setTimeout(() => {
       
    Stop();

   }, 15000);

   //Sample App

   setTimeout(() => {
    
        document.getElementsByTagName("INPUT")[0].value = "Jhen";
        document.getElementsByTagName("INPUT")[1].value = "pwd";
         
        setTimeout(() => {
            Login();
        }, 4000);
   }, 4000);


//scroll left
 let currentScroll = document.querySelectorAll('body > section > div > div')[0].scrollLeft;

document.querySelectorAll('body > section > div > div')[0].scrollLeft = currentScroll + 600;
//scroll down 3 times
setTimeout(() => {
    document.querySelectorAll('body > section > div > div')[0].scrollIntoView({ behavior: 'smooth', block: 'end' });

}, 4000);

setTimeout(() => {
    document.querySelectorAll('body > section > div > div')[0].scrollIntoView({ behavior: 'smooth', block: 'end' });

}, 4000);

setTimeout(() => {
    document.querySelectorAll('body > section > div > div')[0].scrollIntoView({ behavior: 'smooth', block: 'end' });

}, 4000);



