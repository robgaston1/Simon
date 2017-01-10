

$(document).ready(function () {
    var sqnceArr = [];
    var presses = 0;
    var timer;

    
    function playGreen() {
        $('.green').css('border-color', '#6BF9A2');
        setTimeout(function () {$('.green').css('border-color', '#00A74A'); }, 700);
    }
    
    function playRed() {
        $('.red').css('border-color', '#f5545d');
        setTimeout(function () {$('.red').css('border-color', '#9F0F17'); }, 700);
    }
    
    function playBlue() {
        $('.blue').css('border-color', '#79b8fb');
        setTimeout(function () {$('.blue').css('border-color', '#094A8F'); }, 700);
    }
    
    function playYellow() {
        $('.yellow').css('border-color', '#ffd82e');
        setTimeout(function () {$('.yellow').css('border-color', '#CCA707'); }, 700);
    }

    $('.green').data('object', {func: playGreen, button: 1});
    $('.red').data('object', {func: playRed, button: 2});
    $('.yellow').data('object', {func: playYellow, button: 3});
    $('.blue').data('object', {func: playBlue, button: 4});
    
    
    
    function buttonPlay(btnNum) {
        switch (btnNum) {
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
            break;
        }
    }
    
    function playSequence() {
        var arrLen, arg;
        arrLen = sqnceArr.length;
        $('#count').text(arrLen);
        console.log(sqnceArr);
        for (var i = 0; i < arrLen; i++) { 
            arg = sqnceArr[i];
            function callTimer(num, scnds){
                timer = setTimeout(function() {buttonPlay(num);}, i * 1000 );
            } 
            callTimer(arg, i);
        }
        setTimeout(playerInput, i * 1000); 
    }
    
    function generateSequence() {
        var num = Math.floor(Math.random() * 4) + 1;
        sqnceArr.push(num);
        playSequence();
    }
    
    function startGame() {
        if ($('input').is(':checked')) {
            while (timer--) {
                clearTimeout(timer);
            }
            presses = 0;
            sqnceArr = [];
            $('.play').off();
            setTimeout(generateSequence, 1200);
        }
    }
    
    function wrongPlay() {
        presses = 0;
        alert("Sorry wrong button");
        setTimeout(playSequence, 1000);
    }
    
    function gameWon(){
        function winMsg() {
            alert("Congrats on winning.");
        }
        var winTimer = setTimeout(winMsg, 1000);
        startGame();
    }
    
    function checkTurn() {
        console.log("checkTurn, presses:", presses);
        if (presses == 5) {
            gameWon();
        } else if (presses < sqnceArr.length) {
            playerInput();
        } else {
            presses = 0;
            setTimeout(generateSequence, 1500)
        }
    }
    
    function playerInput() {
        console.log("playInput, presses:", presses);
        $(".play").on("click", function() {
            clicked = $(this).data('object').button;
            if (clicked == sqnceArr[presses]) {
                presses++;
                $(this).data('object').func();   
                $(".play").off();
                checkTurn();
            } else {
                 $(".play").off();
                wrongPlay();
            }
            
        });

    }//end of playerInput
        
    
  
        $('#start').click(startGame);
    
    
   
});