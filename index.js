document.addEventListener("DOMContentLoaded", () => {
  var worlds = [
    {
      //1
      world: [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 2],
        [2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 1, 1, 2, 1, 0, 2, 2, 2, 0, 2],
        [2, 1, 2, 1, 1, 1, 1, 2, 1, 0, 1, 2, 2, 1, 2, 2, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 1, 0, 1, 2, 1, 2, 1, 0, 1, 0, 0, 2, 0, 2],
        [2, 1, 2, 0, 2, 2, 0, 2, 1, 2, 1, 2, 2, 1, 2, 2, 2, 2, 0, 2],
        [2, 1, 1, 0, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 2],
        [2, 1, 2, 0, 2, 1, 2, 2, 1, 0, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2],
        [2, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 1, 0, 1, 0, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      ],
      cherryPosition: {
        cx: 16,
        cy: 4,
      },
    },
    {
      // 2
      world: [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 2],
        [2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 2, 0, 2, 0, 2],
        [2, 1, 1, 1, 2, 1, 1, 2, 1, 0, 1, 0, 2, 1, 2, 2, 1, 2, 1, 2],
        [2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 1, 0, 1, 1, 0, 1, 0, 2],
        [2, 1, 1, 0, 2, 2, 0, 2, 1, 2, 1, 2, 2, 1, 2, 0, 1, 2, 0, 2],
        [2, 1, 2, 0, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 0, 2, 1, 2, 0, 2],
        [2, 1, 2, 2, 2, 1, 2, 2, 1, 0, 1, 2, 2, 1, 2, 2, 1, 2, 1, 2],
        [2, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 1, 0, 1, 0, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      ],
      cherryPosition: {
        cx: 19,
        cy: 19,
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
        [2, 1, 1, 0, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 2],
        [2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2],
        [2, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 1, 0, 1, 0, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      ],
      cherryPosition: {
        cx: 2,
        cy: 2,
      },
    },
    {
      // 4
      world: [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 2],
        [2, 1, 2, 2, 0, 2, 2, 2, 1, 2, 0, 2, 2, 2, 2, 1, 2, 1, 1, 2],
        [2, 1, 0, 2, 1, 1, 2, 0, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2],
        [2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 0, 2, 1, 0, 2, 1, 0, 2, 1, 2],
        [2, 0, 0, 1, 0, 1, 1, 1, 1, 2, 0, 1, 1, 2, 2, 1, 0, 1, 1, 2],
        [2, 1, 2, 1, 2, 1, 2, 0, 1, 0, 0, 2, 0, 1, 1, 0, 2, 2, 1, 2],
        [2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 0, 2, 2, 2, 0, 1, 2, 1, 1, 2],
        [2, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 1, 0, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      ],
      cherryPosition: {
        cx: 18,
        cy: 1,
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
        [2, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 1, 0, 1, 0, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      ],
      cherryPosition: {
        cx: 9,
        cy: 3,
      },
    },
  ];

  var brickColors = [
    "purple-brick",
    "red-brick",
    "blue-brick",
    "green-brick",
    "yellow-brick",
  ];

  var sounds = {
    die: "die.mp3",
    coins: "eat-coins.mp3",
    cherry: "eat-cherry.mp3",
    start: "start.mp3",
  };

  playSound(sounds.start);

  var num = getRandomNumber(5);

  // destructure world[]
  var { world } = worlds[num];
  // destructure for easy call
  var { cx, cy } = worlds[num].cherryPosition;

  // ghost object
  var ghosts = {
    inky: {
      img: "inky-ghost.gif",
      gx: 18, //ghost x pos
      gy: 8, // ghost y pos
    },
    mika: {
      img: "inky-ghost.gif",
      gx: 18,
      gy: 8,
    },
  };
  //destructure ghosts
  var { inky, mika } = ghosts;
  var gameOver = false;
  var pacman = {
    px: 1,
    py: 1,
  };
  var { px, py } = pacman;
  var direction = 180;
  var score = 0;
  var cherryCount = 0;
  var coinsCount = countCoins(world);

  // functions ---

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

  function displayWorld() {
    var color = brickColors[num];
    var output = "";
    for (var i = 0; i < world.length; i++) {
      output += "\n<div class='row'>\n";
      for (var j = 0; j < world[i].length; j++) {
        if (world[i][j] == 2) {
          output += `<div id='brick' class="${color}"></div>`;
        } else if (world[i][j] == 1) {
          output += "<div class='coin'></div>";
        } else if (world[i][j] == 0) {
          output += "<div class='empty'></div>";
        } else if (world[i][j] == 5) {
          output += "<div class='cherry'></div>";
        }
      }
      output += "\n</div>";
    }
    document.getElementById("world").innerHTML = output;
    if (coinsCount == 0 && cherryCount == 0) {
      gameOver = true;

      document.getElementById("game-over").innerHTML = "GAME OVER!! ";
    }
  }
  function showPacman() {
    document.getElementById("pacman").style.left = px * 20 + "px";
    document.getElementById("pacman").style.top = py * 20 + "px";
    document.getElementById(
      "pacman"
    ).style.transform = `rotate(${direction}deg)`;
  }
  setInterval(() => {
    if (!gameOver) {
      moveGhost(inky, "inky");
    }
  }, 500);

  setInterval(() => {
    if (!gameOver) {
      moveGhost(mika, "mika");
    } else {
      clearInterval();
    }
  }, 300);

  function moveGhost(ghostName, ghostString) {
    // pacman is above the ghost
    if (ghostName.gy > py) {
      if (world[ghostName.gy - 1][ghostName.gx] != 2 && ghostName.gy - 1 >= 1) {
        //up
        ghostName.gy -= 1;
      } else if (world[ghostName.gx - 1] != 2 && ghostName.gx - 1 >= 1) {
        //left
        ghostName.gx -= 1;
      } else if (
        world[ghostName.gy][ghostName.gx + 1] != 2 &&
        ghostName.gx + 1 <= 18
      ) {
        //right
        ghostName.gx += 1;
      }
      // if ghost is above pacman
    } else if (ghostName.gy < py) {
      if (world[ghostName.gy + 1][ghostName.gx] != 2 && ghostName.gy + 1 <= 8) {
        // bot
        ghostName.gy += 1;
      } else if (
        world[ghostName.gy][ghostName.gx - 1] != 2 &&
        ghostName.gx - 1 >= 1
      ) {
        //left
        ghostName.gx -= 1;
      } else if (
        world[ghostName.gy][ghostName.gx + 1] != 2 &&
        ghostName.gx + 1 <= 18
      ) {
        //right
        ghostName.gx += 1;
      }
    } else if (ghostName.gy == py && ghostName.gx > px) {
      //pacman and ghost same level but ghost X > Pacman X
      if (world[ghostName.gy][ghostName.gx - 1] != 2 && ghostName.gx - 1 >= 1) {
        //left
        ghostName.gx -= 1;
      } else if (
        world[ghostName.gy - 1][ghostName.gx] != 2 &&
        ghostName.gy - 1 >= 1
      ) {
        //up
        ghostName.gy -= 1;
      }
    } else if (ghostName.gy == py && ghostName.gx < px) {
      // pacman and ghost same level but ghost X < Pacman X
      if (
        world[ghostName.gy][ghostName.gx + 1] != 2 &&
        ghostName.gx + 1 <= 18
      ) {
        //right
        ghostName.gx += 1;
      } else if (
        world[ghostName.gy + 1][ghostName.gx] != 2 &&
        ghostName.gy + 1 <= 8
      ) {
        // bot
        ghostName.gy += 1;
      }
    }

    showGhost(ghostName, ghostString);
    if (px == ghostName.gx && py == ghostName.gy) {
      //GAME OVER
      gameOver = true;
      playSound(sounds.die);
      document.getElementById("game-over").innerHTML = "GAME OVER!! ";
    }
  }

  function showGhost(ghostName, ghostString) {
    document.getElementById(`${ghostString}`).style.left =
      ghostName.gx * 20 + "px";
    document.getElementById(`${ghostString}`).style.top =
      ghostName.gy * 20 + "px";
  }

  function showScore() {
    document.getElementById("score").innerHTML = score;
  }

  displayWorld();
  showPacman();
  showGhost(inky, "inky");
  showGhost(mika, "mika");
  showCherry(cy, cx);

  function showCherry(cy, cx) {
    setTimeout(() => {
      world[cy][cx] = 5;
      cherryCount = 1;
      displayWorld();
    }, 6000);
  }

  document.onkeydown = function (e) {
    if (!gameOver) {
      if (e.key == "ArrowLeft" && world[py][px - 1] != 2) {
        // LEFT
        direction = 0;
        px--;
      } else if (e.key == "ArrowRight" && world[py][px + 1] != 2) {
        // RIGHT
        direction = 180;
        px++;
      } else if (e.key == "ArrowDown" && world[py + 1][px] != 2) {
        // DOWN
        direction = 270;
        py++;
      } else if (e.key == "ArrowUp" && world[py - 1][px] != 2) {
        // TOP
        direction = 90;
        py--;
      }
    }

    // update Pacman position
    showPacman();

    if (world[py][px] == 1) {
      world[py][px] = 0;
      score += 5;
      if (score % 15 == 0) {
        playSound(sounds.coins);
      }
      coinsCount--;
      displayWorld();
      showScore();
    } else if (world[py][px] == 5) {
      world[py][px] = 0;
      score += 20;
      playSound(sounds.cherry);
      cherryCount = 0;
      displayWorld();
      showScore();
    }
  };

  function playSound(path) {
    var audio = new Audio(path);
    audio.play();
  }
});
