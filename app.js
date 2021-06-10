const txt = document.querySelectorAll(".thePaths");

for(let i = 0; i < txt.length; i++) {
    console.log(`text number ${i} text length ${txt[i].getTotalLength() }`);
}

const lastWord = document.querySelector("#secondLine_26");
const animation  = document.querySelector("div.animation");

//wash out animation page after animation ended
lastWord.addEventListener("animationend", () => {
    animation.style = "transition: all 1.6s ease; opacity: 0; pointer-events: none;"
}) 
