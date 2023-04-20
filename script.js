function finishFunction(){
    alert("Thank you for completeing the quiz")
}
function checkAnswer(){
    var score = 0;
    Quiz = document.forms.Quiz.elements;
    answer1 = Quiz.growth.value;
    if (answer1 == "London"){
        score = score + 1;
    }
    answer2 = Quiz.talent.value;
    if(answer2 == "Rome") {
        score = score + 1;
        
    answer3 = Quiz.growth.value;
    if(answer3 == "Madrid") {
       score = score + 1;
    }  
    }
    alert("Well done, your score was.... "+score);
    }
