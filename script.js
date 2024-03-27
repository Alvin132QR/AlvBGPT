const text = document.getElementById("quest").value;
    const outputDiv = document.getElementById("output");
    const runButton = document.getElementById("run-button");
    runButton.addEventListener("click", async function() {
      var res = await askGPT(text);
      outputDiv.innerHTML = `{res}`;
    });

async function askGPT(text) {
  try { 
    const baseUrl = 'https://aemt.me/prompt/gpt';
    const prompt = 
    const query = `prompt=${prompt}&text=${text}`;
    const url = `${baseUrl}?${query}`;
    const chatgpt = await fetch(url).then(res => res.json());
    return chatgpt;
  } catch (e) {
    throw new Error('Internal server error!');
  } 
}
