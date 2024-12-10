
let count = 0
let countObj = document.getElementById("counting")
let historyObj = document.getElementById("History")


function increament(){
count = count +1
countObj.textContent = count
}

function save(){
    console.log(count)
    historyObj.textContent += " " + count + "  -  "
    count = 0
    countObj.textContent = count
}

function reset(){
    count = 0
    countObj.textContent = count
    historyObj.textContent = "Previous entries: "
}
