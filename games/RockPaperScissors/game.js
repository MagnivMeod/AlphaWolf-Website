var rockPaperScissors = ["rock", "paper", "scissors"]

var scores = 0;

//////////// ****** FUNCTIONS ****** ////////////

// Function for computer generating a choice of [rock/paper/scissors]
function computerChoice() {
  var randomIndex = Math.floor(Math.random() * 3);
  return rockPaperScissors[randomIndex];
}

// Function for checking who won
function winCheck(playerChoice, computerChoice) {

  if (playerChoice === "rock" && computerChoice === "rock") {
    return "draw";
  }
  else if (playerChoice === "rock" && computerChoice === "paper") {
    return "computer";
  }
  else if (playerChoice === "rock" && computerChoice === "scissors") {
    return "player";
  }
  else if (playerChoice === "paper" && computerChoice === "rock") {
    return "player";
  }
  else if (playerChoice === "paper" && computerChoice === "paper") {
    return "draw";
  }
  else if (playerChoice === "paper" && computerChoice === "scissors") {
    return "computer";
  }
  else if (playerChoice === "scissors" && computerChoice === "rock") {
    return "computer";
  }
  else if (playerChoice === "scissors" && computerChoice === "paper") {
    return "player";
  }
  else if (playerChoice === "scissors" && computerChoice === "scissors") {
    return "draw";
  }

}

// Function for ending round after player chosen an item
function endRound() {
  $(".player").addClass("hidden");
  $(".end-round").removeClass("hidden");
}

// Function for starting round
function startRound() {
  $(".end-round").addClass("hidden");
  $(".player").removeClass("hidden");
  $(".game-heading").text("Rock / Paper / Scissors");
}

// Function for placing player chosen item and computer chosen item on the end-round screen
function placeGameChosenItems(playerItem, computerItem) {
  $("#player-item").attr("src", "images/" + playerItem + ".png");
  $("#computer-item").attr("src", "images/" + computerItem + ".png");
}

//////////// ****** EVENT LISTENERS ****** ////////////

// Event listener for Play button
$(".play-btn").click(function() {
  $(".menu").slideUp();
  $(".game").removeClass("hidden");
});


// Event listener for game items (rock / paper / scissors)
$(".item-image").click(function() {

  var playerItem = $(this).attr("id");
  computerItem = computerChoice();

  endRound();
  placeGameChosenItems(playerItem, computerItem);

  var winResult = winCheck(playerItem, computerItem)

  if (winResult === "draw") {
    $(".game-heading").text("It's a draw");
  }
  else if (winResult === "player") {
    $(".game-heading").text("Player win!");
    scores++;
    $(".scores").text("Scores: " + scores);
  }
  else {
    $(".game-heading").text("Computer win!");
    if (scores != 0) {
      scores--;
      $(".scores").text("Scores: " + scores);
    }
  }

});


// Event listener for play again
$(".end-round-btn").click(function() {
  startRound();
});
