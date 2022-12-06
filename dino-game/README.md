was noch fehlt:
Collision with obstacles

When our Dino collides with an obstacle, it's game over and the game should stop. We can implement a simple AABB collision detection (see Background Materials) function to check for collision between two elements.
Hint: We can use the element.getBoundingClientRect function to easily get an element's top/bottom/left/right position values (see Background Materials)

    create a new function (ex. doElementsCollide) which should return true if the two elements passed as arguments are colliding with each other, using the AABB collision detection technique
    each frame, check if the Dino is colliding with any obstacle
    if colliding, stop the game

Score and Game Over

We want to have a score, which is incremented when our Dino jumps over an obstacle. When the game is over, we want to display this score to the player.

    when an obstacle's x position has made it passed the Dino's x position, we want our score to increment
    on game over, we want to show our score in the DOM, as an HTML element

Highscore

We want to save our score into the browser's localStorage. On game over, we should get our stored highscore (if it exists), and if our new score is greater than the stored highscore, we want to overwrite our localStorage's highscore with the new score. On game over, we want to display the highscore, and we want to tell the player if they just set a new highscore.

    on game over, compare score to highscore from localStorage, and if it's a new highscore we save the new highscore to localStorage
    on game over, we display the current highscore, and tell the player if they just set a new highscore
