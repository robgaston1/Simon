$(document).ready(function () {
    var sqnceArr = []; presses = -1; sounds = document.getElementById("sound");
    sounds.preload = "auto";

    
    function playGreen() {
        $('.green').css('border-color', '#6BF9A2');
        setTimeout(function(){$('.green').css('border-color','#00A74A');} , 700);
    }    
    
    function playRed() {
        $('.red').css('border-color', '#f5545d');
        setTimeout(function(){$('.red').css('border-color','#9F0F17');} , 700);
    } 
    
    function playBlue() {
        $('.blue').css('border-color', '#79b8fb');
        setTimeout(function() {$('.blue').css('border-color','#094A8F');} , 700);
    }
    
    function playYellow() {
        $('.yellow').css('border-color', '#ffd82e');
        setTimeout(function() {$('.yellow').css('border-color','#CCA707');} , 700);
    }

    $('.green').data('object', {function: playGreen, button: 1}) ;
    $('.red').data('object', {function: playRed, button: 2}) ;
    $('.yellow').data('object', {function: playYellow, button: 3}) ;
    $('.blue').data('object', {function: playBlue, button: 4}) ;
    
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
        $('.play').off();
        alert("Sorry wrong button");
        playSequence();
    }
   
    function playerInput() {
        //Return to listen for next button press
        //if button press not correct, then play incorrect tone and play the sequence again. 
        presses = 0;
        while (presses < sqnceArr.length) {
            $(".play").on("click", function() {
                clicked = $(this).data('object').button;
                if (clicked == sqnceArr[presses]) {
                    presses++;
                    $(this).data('object').function();
                } else { 
                    wrongPlay();
                }
            })
           }
        generateSequence();
    }//end of playerInput
        
    $('#start').click(startGame);
    
   
});