document.addEventListener("readystatechange", () => {
  if (document.readyState == "complete") {
    showCherry(
      worlds[worldNumber].cherryPosition.y,
      worlds[worldNumber].cherryPosition.x
    );
  }
});

var worlds = [
  {
    //1
    world: [
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 2],
      [2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 1, 1, 2, 1, 0, 2, 2, 2, 0, 2],
      [2, 1, 2, 2, 1, 1, 1, 2, 1, 0, 1, 2, 2, 1, 2, 2, 1, 1, 1, 2],
      [2, 1, 1, 1, 2, 1, 1, 0, 1, 2, 1, 2, 1, 0, 1, 0, 0, 2, 0, 2],
      [2, 1, 2, 0, 2, 2, 0, 2, 1, 2, 1, 2, 2, 1, 2, 2, 2, 2, 0, 2],
      [2, 1, 1, 0, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 2],
      [2, 1, 2, 0, 2, 1, 2, 2, 1, 0, 1, 2, 2, 1, 2, 2, 1, 2, 1, 2],
      [2, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 1, 0, 1, 1, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ],
    cherryPosition: {
      x: 16,
      y: 4,
    },
  },
  {
    // 2
    world: [
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 0, 2],
      [2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 2, 0, 2, 0, 2],
      [2, 1, 1, 1, 2, 1, 1, 2, 1, 0, 1, 0, 2, 1, 2, 2, 1, 2, 1, 2],
      [2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 1, 0, 1, 1, 0, 1, 0, 2],
      [2, 1, 1, 0, 2, 2, 0, 2, 1, 2, 1, 2, 2, 1, 2, 0, 1, 2, 0, 2],
      [2, 1, 2, 0, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 0, 2, 1, 2, 0, 2],
      [2, 1, 2, 2, 2, 1, 2, 2, 1, 0, 1, 2, 2, 1, 2, 2, 1, 2, 1, 2],
      [2, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 1, 0, 1, 1, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ],
    cherryPosition: {
      x: 19,
      y: 19,
    },
  },
  {
    // 3
    world: [
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 2],
      [2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 0, 2],
      [2, 1, 0, 1, 1, 1, 1, 2, 1, 0, 1, 0, 2, 1, 2, 2, 1, 2, 1, 2],
      [2, 1, 1, 1, 2, 2, 1, 0, 1, 2, 1, 2, 1, 0, 1, 2, 0, 2, 0, 2],
      [2, 1, 2, 0, 2, 2, 0, 2, 1, 2, 2, 2, 2, 1, 2, 2, 0, 2, 0, 2],
      [2, 1, 1, 0, 1, 2, 1, 2, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 2],
      [2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2],
      [2, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 1, 0, 1, 1, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ],
    cherryPosition: {
      x: 2,
      y: 2,
    },
  },
  {
    // 4
    world: [
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 0, 1, 1, 1, 1, 1, 1, 0, 2, 0, 0, 1, 1, 1, 1, 2, 2, 0, 2],
      [2, 1, 2, 2, 0, 2, 2, 2, 1, 2, 0, 2, 2, 2, 2, 1, 2, 1, 1, 2],
      [2, 1, 0, 2, 1, 1, 2, 0, 1, 2, 1, 2, 2, 0, 2, 1, 2, 2, 1, 2],
      [2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 0, 2, 0, 0, 2, 1, 0, 2, 1, 2],
      [2, 0, 0, 1, 0, 1, 1, 1, 1, 2, 0, 1, 1, 2, 2, 1, 0, 1, 1, 2],
      [2, 1, 2, 1, 2, 1, 2, 0, 1, 0, 0, 2, 0, 1, 1, 0, 2, 2, 1, 2],
      [2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 0, 2, 2, 2, 0, 1, 2, 1, 1, 2],
      [2, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 1, 1, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ],
    cherryPosition: {
      x: 18,
      y: 1,
    },
  },
  {
    // 5
    world: [
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 2],
      [2, 1, 2, 0, 2, 1, 2, 2, 1, 2, 1, 1, 2, 1, 0, 2, 2, 2, 0, 2],
      [2, 1, 2, 1, 1, 1, 1, 2, 1, 0, 1, 2, 2, 1, 2, 2, 1, 1, 1, 2],
      [2, 1, 1, 1, 2, 1, 1, 0, 1, 2, 1, 2, 1, 0, 1, 2, 0, 2, 0, 2],
      [2, 1, 2, 0, 2, 2, 0, 2, 1, 2, 1, 2, 2, 1, 2, 2, 2, 2, 0, 2],
      [2, 1, 1, 0, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 2],
      [2, 1, 2, 0, 2, 1, 2, 2, 1, 0, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2],
      [2, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 1, 0, 1, 1, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ],
    cherryPosition: {
      x: 9,
      y: 3,
    },
  },
];

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//Count Coins in the Maze
function countCoins(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 1) count += 1;
    }
  }
  return count;
}

var worldNumber = getRandomNumber(5);

var pacman = {
  x: 1,
  y: 1,
};
var direction = 180;
var score = 0;
var cherryCount = 0;
var coinsCount = countCoins(worlds[worldNumber].world);

function displayWorld() {
  var output = "";
  for (var i = 0; i < worlds[worldNumber].world.length; i++) {
    output += "\n<div class='row'>\n";
    for (var j = 0; j < worlds[worldNumber].world[i].length; j++) {
      if (worlds[worldNumber].world[i][j] == 2) {
        output += "<div id='brick' class='brick'></div>";
      } else if (worlds[worldNumber].world[i][j] == 1) {
        output += "<div class='coin'></div>";
      } else if (worlds[worldNumber].world[i][j] == 0) {
        output += "<div class='empty'></div>";
      } else if (worlds[worldNumber].world[i][j] == 5) {
        output += "<div class='cherry'></div>";
      }
    }
    output += "\n</div>";
  }
  document.getElementById("world").innerHTML = output;
  if (coinsCount == 0 && cherryCount == 0) {
    document.getElementById("game-over").innerHTML = "GAME OVER!! ";
  }
}
function showPacman() {
  document.getElementById("pacman").style.left = pacman.x * 20 + "px";
  document.getElementById("pacman").style.top = pacman.y * 20 + "px";
  document.getElementById("pacman").style.transform = `rotate(${direction}deg)`;
}

function showScore() {
  document.getElementById("score").innerHTML = score;
}

function showCherry(y, x) {
  setTimeout(() => {
    worlds[worldNumber].world[y][x] = 5;
    cherryCount = 1;
    displayWorld();
  }, 6000);
}

displayWorld();
showPacman();

document.onkeydown = function (e) {
  setTimeout(() => {}, 500);
  if (
    e.keyCode == 37 &&
    worlds[worldNumber].world[pacman.y][pacman.x - 1] != 2
  ) {
    // LEFT
    direction = 0;
    pacman.x--;
  } else if (
    e.keyCode == 39 &&
    worlds[worldNumber].world[pacman.y][pacman.x + 1] != 2
  ) {
    // RIGHT
    direction = 180;
    pacman.x++;
  } else if (
    e.keyCode == 40 &&
    worlds[worldNumber].world[pacman.y + 1][pacman.x] != 2
  ) {
    // DOWN
    direction = 270;
    pacman.y++;
  } else if (
    e.keyCode == 38 &&
    worlds[worldNumber].world[pacman.y - 1][pacman.x] != 2
  ) {
    // TOP
    direction = 90;
    pacman.y--;
  }
  // update Pacman position
  showPacman();

  if (worlds[worldNumber].world[pacman.y][pacman.x] == 1) {
    worlds[worldNumber].world[pacman.y][pacman.x] = 0;
    score += 5;
    coinsCount--;
    displayWorld();
    showScore();
  } else if (worlds[worldNumber].world[pacman.y][pacman.x] == 5) {
    worlds[worldNumber].world[pacman.y][pacman.x] = 0;
    score += 20;
    cherryCount = 0;
    displayWorld();
    showScore();
  }
};
