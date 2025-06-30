
document.addEventListener("DOMContentLoaded", () => {
  const quoteEl = document.getElementById("quote");

  fetch("https://api.quotable.io/random?tags=fitness|inspirational")
    .then(res => res.json())
    .then(data => {
      quoteEl.innerText = `"${data.content}" — ${data.author}`;
    })
    .catch(err => {
      console.error("Error fetching quote:", err);
      quoteEl.innerText = "Sorry, no quote available right now.";
    });
});
