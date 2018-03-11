$(document).ready(function(){

    $("#musicButton").on("click", function(){
        $('audio#music')[0].play();
        var musicOn = true;
    });
    


    


    var img1 = Math.floor((Math.random() * 11) + 1);
    var img2 = Math.floor((Math.random() * 11) + 1);
    var img3 = Math.floor((Math.random() * 11) + 1);
    var img4 = Math.floor((Math.random() * 11) + 1);
    var randomNumber = Math.floor((Math.random() * 101) + 19);
    $("#randomNumber").text(randomNumber);
    var total = 0;
    var wins = 0;
    $('#wins').text("Wins: " + wins);
    var losses = 0;
    $('#losses').text("Losses: " + losses);
    var message = "";

function reset(){
    img1 = Math.floor((Math.random() * 11) + 1);
    img2 = Math.floor((Math.random() * 11) + 1);
    img3 = Math.floor((Math.random() * 11) + 1);
    img4 = Math.floor((Math.random() * 11) + 1);
    randomNumber = Math.floor((Math.random() * 101) + 19);
    $("#randomNumber").text(randomNumber);
    total = 0;
    $('#total').text(total);    
}

function win() {
    message = "You win!!"
    $("#message").html(message);
    wins++;
    $('#wins').text("Wins: " + wins);
    reset();
}

function lose() {
    message = "You lose!!"
    $("#message").html(message);
    losses++;
    $('#losses').text("Losses: " + losses);
    reset(); 
}

$('button').on("click", function(){
    $("#message").empty();
})
$("#btn1").on("click", function(){
    total = total + img1;
    $('#total').text(total);
    if(total === randomNumber){
        win();} else if (total > randomNumber){
        lose();        
    }   
})
$("#btn2").on("click", function(){
    total = total + img2;
    $('#total').text(total);
    if(total === randomNumber){
        win();} else if (total > randomNumber){
        lose();       
    }
})
$("#btn3").on("click", function(){
    total = total + img3;
    $('#total').text(total);
    if(total === randomNumber){
        win();} else if (total > randomNumber){
        lose();    
    }
})
$("#btn4").on("click", function(){
    total = total + img4;
    $('#total').text(total);
    if(total === randomNumber){
        win();} else if (total > randomNumber){
        lose();    
    }
})
})


