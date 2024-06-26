

function first() {
    let srt = document.getElementById("btns");
    srt.addEventListener('click', createName);

}
function createName() {
    
}

function startGame() {
    
}

function endGame() {
    alert ("See ya soon!!");
    console.log("left game");
    window.location.href ="index.html";
}

    let end = document.getElementById("btnl");
    end.addEventListener('click', endGame);
