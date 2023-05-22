/* 
setInterval - runs function repeatedly, at specific intervals

    - pass function reference
    - duration in ms (1000ms = 1s)
    - default 0, will cover more extensively in async/await section
    - returns unique identifier
    - clearInterval to cancel
 */

function showScore(name, score) {
  console.log(`hello ${name}, your score is ${score}`);
}

// setInterval(showScore, 2000);

const firstID = setInterval(showScore, 1000, "bobo", 34);
const secondID = setInterval(showScore, 4000, "susan", 70);

clearInterval(firstID);
