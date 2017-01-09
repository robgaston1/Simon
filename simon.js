$(document).ready(function () {
    var sqnceArr = [];
    var sounds = document.getElementById("sound");
    sounds.preload = "auto";
     
   
    
    function playGreen(){
        $('.green').css('border-color', '#6BF9A2');
        setTimeout(function(){$('.green').css('border-color','#00A74A');} , 700);
    }    
    
    function playRed(){
        $('.red').css('border-color', '#f5545d');
        setTimeout(function(){$('.red').css('border-color','#9F0F17');} , 700);
    } 
    
    function playBlue(){
        $('.blue').css('border-color', '#79b8fb');
        setTimeout(function(){$('.blue').css('border-color','#094A8F');} , 700);
    }
    
    function playYellow(){
        $('.yellow').css('border-color', '#ffd82e');
        setTimeout(function(){$('.yellow').css('border-color','#CCA707');} , 700);
    }
    
    function buttonPlay(btnNum) {
        switch(btnNum) {
            case 1:
                playGreen();
                break;
            case 2:
                playRed();
                break;
            case 3:
                playYellow();
                break;
            case 4:
                playBlue();
        }
    }
    
    function startGame(){
        if ($('input').is(':checked')){
        setTimeout(generateSequence, 500);
        }
    }
    
    function generateSequence() {
        var num = Math.floor(Math.random() * 4) + 1;
        sqnceArr.push(num);
        playSequence();
    }
    
    function playSequence() {
        var arrLen = sqnceArr.length;
        $('#count').text(arrLen);
        for (var i = 0; i < arrLen; i++) {
            var arg = sqnceArr[i];
            function callTimer(arg, scnds){
                setTimeout(function() {buttonPlay(arg);}, i * 1000 );
            } 
            callTimer(arg, i);
        }
        playerInput(); 
    }
    
    function wrongPlay() {
        console.log("Buuuuuzzzzz!");
    }
   
    function playerInput() {
            $(".play").on("click", function(event) {
            clicked = event.target.id;
            console.log(clicked);
            if (clicked == sqnceArr[0]) {
            console.log("correct!")
            } else console.log("wrong!")
        })
    }
            

    
    $('#start').click(startGame);
    
   
});