

function startGame() {   
   let doc =  prompt("Whats your name?");
    console.log("player is ready");
    if (doc != null){
        document.getElementById("pp").innerHTML = "Hello " + doc +", lets get started!";
    }

}

let start = document.getElementById("btns");
start.addEventListener('click', startGame);

function endGame() {
    alert ("See ya soon!!");
    console.log("left game");
    window.location.href ="feedback.html";
}

    let end = document.getElementById("btnl");
    end.addEventListener('click', endGame);
