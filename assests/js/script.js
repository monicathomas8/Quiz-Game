

function first() {
    let srt = document.getElementById("btns");
    srt.addEventListener('click', createName);

}

function createName() {
    let name = prompt("Please create a username")
    console.log("Hi + name + !");
}

function startGame() {
    
}

function endGame() {
    alert ("See ya soon!!");
    console.log("left game");
    window.location.href ="feedback.html";
}

    let end = document.getElementById("btnl");
    end.addEventListener('click', endGame);
