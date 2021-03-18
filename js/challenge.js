let counter = document.querySelector("#counter")
let minus = document.querySelector("#minus")
let plus = document.querySelector("#plus")
let heart = document.querySelector("#heart")
let pause = document.querySelector("#pause")
// let resume = document.querySelector("#resume") 
let disabled = false
// console.log(counter,minus,plus,heart,pause)
let i = 0 
let intervalId = window.setInterval(function(){
    i = i + 1
    counter.innerText = `${i}` 
}, 1000)

let minusClick = minus.addEventListener(`click`,function(){
   if (!disabled)
    i = i-1 
    counter.innerText = `${i}` 
    // console.log(counter)
    // console.log(minus)
} )
let plusClick = plus.addEventListener('click', function(){
    if (!disabled){
    i = i+1
    counter.innerText = `${i}` 
    // console.log(plus)
}})
let heartClick = heart.addEventListener('click', function(){
    if (!disabled){
    let blankLi = document.createElement("li");
    let currentArea = document.querySelector("div#list.comments")
    console.log(blankLi,currentArea)
    currentArea.append(blankLi)
    blankLi.innerText = `You liked the number ${i}`
}})
let pauseClick = pause.addEventListener('click', function(){
    
    if (pause.innerText === "pause"){
    disabled = true
    window.clearInterval(intervalId)
    pause.innerText = "resume";}

    else if (pause.innerText === "resume"){
      intervalId =  window.setInterval(function(){
            i = i + 1
            counter.innerText = `${i}` 
        }, 1000) 
        disabled = false
        pause.innerText = "pause"          
    }
    // pause.removeAttribute("#pause")
    // pause.id = "resume"
    // console.log(pause) 
})
// let resumeClick = resume.addEventListener("click",function(){
    // console.log('resume click')
// })