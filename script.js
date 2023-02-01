let homeScore = document.getElementById("home-scr")
let guestScore = document.getElementById("guest-scr")
homeScore.textContent = numHome  = 0 
guestScore.textContent = numGuest = 0

function one(){
    numHome = numHome + 1
    homeScore.textContent = numHome
    }

function two(){
    numHome = numHome + 2
    homeScore.textContent = numHome
    }
function three(){
    numHome = numHome + 3
    homeScore.textContent = numHome
    }

function one2(){
    numGuest = numGuest + 1
    guestScore.textContent = numGuest
    }
function two2(){
    numGuest = numGuest + 2
    guestScore.textContent = numGuest
}
function three2(){
    numGuest = numGuest + 3
    guestScore.textContent = numGuest
}

function rsthm(){
    homeScore.textContent = numHome  = 0 
    
}
function rstgst(){
    guestScore.textContent = numGuest = 0
}