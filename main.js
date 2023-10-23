// Dice Roll Simulator Demo

// HTML Element for Output
let outputEl = document.getElementById("output");
let msg = document.getElementById("msg");

// Menu Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Process Selection
  if (selection === "roll-once") {
    rollOnce();
    msg.innerHTML = " ";
  } else if (selection === "roll-five") {
    roll5Times();
    msg.innerHTML = " ";
  } else if (selection === "roll-n") {
    rollNTimes();
    msg.innerHTML = " ";
  } else if (selection === "snake-eyes") {
    snakeEyes();
  }
}

function rollOnce() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL ONCE</h3>";

  // Random Dice Roll & Total
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;
  let total = die1 + die2;

  // Add Results to output element
  let pEl = document.createElement("p");
  pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
  outputEl.appendChild(pEl);
}

function roll5Times() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL 5 TIMES</h3>";
  for (i = 0; i < 5; i++) {
    // Random Dice Roll & Total
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let total = die1 + die2;

    // Add Results to output element
    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);
  }
}

function rollNTimes() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL 'N' TIMES</h3>";
  let n = prompt("Enter number of rolls:");

  for (i = 0; i < n; i++) {
    // Random Dice Roll & Total
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let total = die1 + die2;

    // Add Results to output element
    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);
  }
}

function snakeEyes() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL UNTIL SNAKE EYES</h3>";
  let num = 0;

  while (1 > 0) {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;

    let total = die1 + die2;
    num++;

    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);
    if (die1 === 1 && die2 === 1) {
      break;
    }
  }
  msg.innerHTML = `SNAKE EYES! IT took ${num} rolls to get snake eyes.`;
}
