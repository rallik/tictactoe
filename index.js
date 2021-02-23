// function newgame() {
//     const newgamebutton = document.getElementById('boardbutton');

// }

function whowins(winner) {
    console.log(`${winner}'s win!!`);
    const wintext = `${winner}'s win!!`;
    const wincontainer = document.getElementById("text");
    // const buttonswitch = document.getElementById('boardbutton');
    wincontainer.innerHTML = wintext;
    // buttonswitch.innerHTML = "New Game";
}

function itsatie() {
    const tiecontainer = document.getElementById("text");
    tiecontainer.innerHTML = "It's a tie!!";
}

//check board for win
function checkboard() {
    if (count<5) {
        console.log("Can't win yet");
    } else {
        const wins = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        
        const currentboard = [];
        document.querySelectorAll('.tile').forEach(tile =>{
            currentboard.push(tile.innerHTML)
        })
 
        let place1, place2, place3;
        for (win of wins) {
            place1 = currentboard[win[0]];
            place2 = currentboard[win[1]];
            place3 = currentboard[win[2]];
            console.log('current places tested', place1, place2, place3);

            if (place1!="" && place1==place2 && place2==place3 && place1==place3) {
                console.log("Win");
                whowins(place1)
                break;
            } else if (currentboard.indexOf("")==-1) {
                console.log("tie");
                itsatie()
                break;
            } else {
                continue;
            }
        }
        console.log(currentboard);
    }

}


//turn
let turn = 'X';
let count = 0;

document.querySelectorAll('.tile').forEach(tile => {
    tile.addEventListener('click', function() {
        console.log(tile.innerHTML)
        if (turn==='X' && tile.innerHTML==="") {
            tile.innerHTML = "X";
            turn = "O";
            count++;
        } else {
            if (tile.innerHTML==="") {
                tile.innerHTML = "O";
                turn = "X";
                count++;
            }
        }
        checkboard()
        console.log(count)
        
    })
})

function clearboard() {
    const clear = document.getElementById('boardbutton');
    clear.addEventListener('click', function(){
        document.querySelectorAll('.tile').forEach(tile =>{
            tile.innerHTML = "";
        })
        document.getElementById("text").innerHTML = "";
        count = 0;
        console.log("Board Cleared")
    })
}

clearboard()

