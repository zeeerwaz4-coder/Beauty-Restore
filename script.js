const input = document.querySelector("input");
const aiButton = document.querySelector(".floatAI");

aiButton.addEventListener("click", async () => {
  const message = input.value;

  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  });

  const data = await response.json();
  alert(data.reply);
});
