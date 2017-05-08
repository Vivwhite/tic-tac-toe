// wait for the DOM to finish loading
$(document).ready(function() {

  var currPlayer = 1;
  var moveCount = 0;

//change the player to the other

$('.box').on('click', function(){

var squareSelected = $(this);

if (squareSelected.hasClass('fa fa-times') || squareSelected.hasClass('fa fa-circle-o')) {
  alert("This box has been checked!");
} else {
  if (currPlayer === 1) {
    squareSelected.addClass('fa fa-times');
    if(checkWon('fa fa-times')) {
      alert('Congrats!');
    } else {
      currPlayer = 2;
    }
  } else {
    squareSelected.addClass('fa fa-circle-o');
    if(checkWon('fa fa-circle-o')) {
      alert('Congrats!');
    } else {
      currPlayer = 1;
    }
  }
  moveCount++;
}
});

//display message
function renderText(){
  $('p').text('currPlayer:' + player)
}
//check if player has won
function checkWon(currPlayer) {
  console.log(moveCount);
  if(($('#box1').hasClass(currPlayer) && $('#box2').hasClass(currPlayer)) && $('#box3').hasClass(currPlayer)){
    return true;
  } else if (($('#box4').hasClass(currPlayer) && $('#box5').hasClass(currPlayer)) && $('#box6').hasClass(currPlayer)) {
    return true;
  }  else if (($('#box7').hasClass(currPlayer) && $('#box8').hasClass(currPlayer)) && $('#box9').hasClass(currPlayer)) {
    return true;
  } else if (($('#box1').hasClass(currPlayer) && $('#box4').hasClass(currPlayer)) && $('#box7').hasClass(currPlayer)){
    return true;
  } else if (($('#box2').hasClass(currPlayer) && $('#box5').hasClass(currPlayer)) && $('#box8').hasClass(currPlayer)){
    return true;
  } else if (($('#box3').hasClass(currPlayer) && $('#box6').hasClass(currPlayer)) && $('#box9').hasClass(currPlayer)){
    return true;
  } else if (($('#box1').hasClass(currPlayer) && $('#box5').hasClass(currPlayer)) && $('#box9').hasClass(currPlayer)){
    return true;
  } else if (($('#box3').hasClass(currPlayer) && $('#box5').hasClass(currPlayer)) && $('#box7').hasClass(currPlayer)){
    return true;
  } else if(moveCount === 8) {
    alert("It's a draw!");
  };
}
//reset the gameboard
$('.reset-button').on('click',function(){
  $('.box').removeClass('fa fa-circle-o').removeClass('fa fa-times');
});

});
