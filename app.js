let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");


let buttons = document.querySelectorAll("button");
let turn = "X";

buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        if(button.textContent === ""){
            button.textContent = turn;
            turn = (turn === "X") ? "O" : "X";
            
        }
        if((one.textContent ==="X" && four.textContent === "X" && seven.textContent === "X" ||
             one.textContent === "O" && four.textContent ==="O" && seven.textContent === "O")||  // Condition 1,4,7
             (one.textContent === "X" && two.textContent === "X" && three.textContent === "X" || 
                one.textContent === "O" && two.textContent === "O" && three.textContent === "O")||  // Condition 1,2,3
                (one.textContent === "X" && five.textContent === "X" && nine.textContent == "X" || 
                    one.textContent === "O" && five.textContent === "O" && nine.textContent == "O")||  //Condition 1,5,9
                    (three.textContent === "X" && five.textContent === "X" && seven.textContent ==="X" ||
                        three.textContent === "O" && five.textContent === "O" && seven.textContent ==="O")||  //Condition 3,5,7
                        (two.textContent === "X" && five.textContent === "X" && eight.textContent === "X"||
                            two.textContent === "O" && five.textContent === "O" && eight.textContent === "O")||  //Condition 2,5,8
                            (four.textContent === "X" && five.textContent === "X" && six.textContent === "X" ||
                                four.textContent === "X" && five.textContent === "X" && six.textContent === "X")||  //Condition 4,5,6
                                (three.textContent === "X" && six.textContent ==="X" && nine.textContent === "X" ||
                                    three.textContent === "X" && six.textContent ==="X" && nine.textContent === "X") //Condition 3,6,9
             ){
            showPopup()
    
        }
    })
    
})

function reset(){
    one.textContent = "";
    two.textContent = "";
    three.textContent = "";
    four.textContent = "";
    five.textContent = "";
    six.textContent = "";
    seven.textContent = "";
    eight.textContent = "";
    nine.textContent = "";
}


function showPopup(message) {
    // document.getElementById("popup-message").textContent = message;
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    // let close = document.getElementById("popup");
    // close.style.display = "none";
    console.log('working');
    document.getElementById("popup").style.display = "none";
}
