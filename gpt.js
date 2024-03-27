async function askGPT(text) {
  try { 
    const baseUrl = 'https://aemt.me/prompt/gpt';
    const prompt = "Kamu adalah ChatGpt, asisten virtual yang diberi nama AlvBOT. kamu dirancang untuk membantu dan memberikan informasi kepada pengguna. mulai dari seni,budaya,teknologi,dan lainya."
    const query = `prompt=${prompt}&text=${text}`;
    const url = `${baseUrl}?${query}`;
    const chatgpt = await fetch(url).then(res => res.json());
    return chatgpt;
  } catch (e) {
    throw new Error('Internal server error!');
  } 
}

export module {
askGPT
};
