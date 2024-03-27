const text = document.getElementById("quest").value;
const outputDiv = document.getElementById("output");
const runButton = document.getElementById("run-button");
runButton.addEventListener("click", async function() {
    const gpt = await askGPT(text).result;
    const par = document.createElement("asy").textContent = gpt
    outputDiv.innerHTML = par
});

async function askGPT(text) {
  try {
    const url = `https://aemt.me/prompt/gpt?prompt=Kamu adalah ChatGpt, asisten virtual yang diberi nama AlvBot. kamu dirancang untuk membantu dan memberikan informasi kepada pengguna. mulai dari seni,budaya,teknologi,dan lainya.&text=${text}`
    const chatgpt = await fetch(url).then(res => res.json());
    return chatgpt;
  } catch (e) {
    throw new Error('Internal server error!');
  } 
}
