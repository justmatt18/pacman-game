/*
Todo:
1. top -> right -> down -> left
2. check if there's obstacle
3. proceed check to other direction
4. add Set() that will check if you already visit the index.
5. repeat

*/
const moveGhost = () => {
  // pacman is above the ghost
  if (inky.gy > py && px < inky.gx) {
    if (world[inky.gy - 1][inky.gx] != 2 && inky.gy - 1 >= 1) {
      //up
      inky.gy -= 1;
    } else if (world[inky.gx - 1] != 2 && inky.gx - 1 >= 1) {
      //left
      inky.gx -= 1;
    } else if (world[inky.gy][inky.gx + 1] != 2 && inky.gx + 1 <= 18) {
      //right
      inky.gx += 1;
    }
    // if ghost is above pacman
  } else if (inky.gy < py && px > inky.gx) {
    // down
    if (world[inky.gy + 1][inky.gx] != 2 && inky.gy + 1 <= 8) {
      // bot
      inky.gy += 1;
    } else if (world[inky.gy][inky.gx - 1] != 2 && inky.gx - 1 >= 1) {
      //left
      inky.gx -= 1;
    } else if (world[inky.gy][inky.gx + 1] != 2 && inky.gx + 1 <= 18) {
      //right
      inky.gx += 1;
    }
  } else if (inky.gy == py && inky.gx > px) {
    //pacman and ghost same level but ghost X > Pacman X
    console.log("Hi");
    if (world[inky.gy][inky.gx - 1] != 2 && inky.gx - 1 >= 1) {
      //left
      inky.gx -= 1;
    } else if (world[inky.gy - 1][inky.gx] != 2 && inky.gy - 1 >= 1) {
      //up
      inky.gy -= 1;
    }
  } else if (inky.gy == py && inky.gx < px) {
    // pacman and ghost same level but ghost X < Pacman X
    if (world[inky.gy][inky.gx + 1] != 2 && inky.gx + 1 <= 18) {
      //right
      inky.gx += 1;
    } else if (world[inky.gy + 1][inky.gx] != 2 && inky.gy + 1 <= 8) {
      // bot
      inky.gy += 1;
    }
  }

  showGhost();
};
