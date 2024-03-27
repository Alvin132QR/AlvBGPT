const { askGPT } = require('./lib.js');
const text = document.getElementById("quest").value;
    const outputDiv = document.getElementById("output");
    const runButton = document.getElementById("run-button");
    runButton.addEventListener("click", async function() {
      var res = await askGPT(text);
      outputDiv.innerHTML = res;
    });
