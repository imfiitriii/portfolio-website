let roleIndex = 0;
let roles = ["UI Designer", "Front-End Developer","Student"];

function delay(time) { //this function returns a promise
    return new Promise((resolve) => setTimeout(resolve,time)) //no need reject because no need error handling
}
async function changeRoleText() {
    let oldText = document.querySelector("#role span").innerHTML;
    let newText = roles[roleIndex]
    let span = document.querySelector("#role span")
    for (let i = oldText.length; i >= 0; i--) {
        span.innerHTML = oldText.slice(0,i);
        await delay(300); //call this function and wait for the promise to be resolved
    }
    
    await delay(500);

    for (let j = 0; j <= newText.length; j++) {
        span.innerHTML = newText.slice(0,j);
        await delay(300);
    }
    roleIndex += 1;
    if (roleIndex >= roles.length) {
        roleIndex = 0;
    }
}

async function startLoop() {
    while (true){
        await changeRoleText();
        await delay(1000);
    }
    
}

startLoop();