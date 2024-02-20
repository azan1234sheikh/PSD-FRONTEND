const values =document.querySelectorAll(".number");
const timeInterval ="4000";
values.forEach((displayElem) =>{
    let valueStart = 0o0;
    const valueEnd = parseInt(displayElem.getAttribute("data-value"));
    const duration = Math.floor(timeInterval/valueEnd);
    const counter = setInterval(() =>{
        valueStart+= 1;
        displayElem.innerHTML =` ${valueStart}+`;
        if((valueStart == valueEnd)){
            clearInterval(counter);
        }
    },duration);
    
});


const othervalues =document.querySelectorAll(".numbers");
const othertimeinterval ="4000";
othervalues.forEach((displayElem) =>{
    let valuestart = 0;
    const valueEnd = parseInt(displayElem.getAttribute("data-value"));
    const duration = Math.floor(timeInterval/valueEnd);
    const counter = setInterval(() =>{
        valuestart+= 1;
        displayElem.innerHTML =` ${valuestart}x7`;
        if((valuestart == valueEnd)){
            clearInterval(counter);
        }
    },duration);
    
})

