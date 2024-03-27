const text = document.getElementById("quest").value;
    const outputDiv = document.getElementById("output");
    const runButton = document.getElementById("run-button");
    runButton.addEventListener("click", async function() {
      const gpt = await askGPT(text);
      outputDiv.innerHTML = `${gpt.result}`    
    });
