const scrollText = document.getElementById("scrollText");
const lines = [
  "Dear Rochelle,",
  "I write this as a long-overdue confession, words that have weighed on my heart.",
  "Every day, your smile lingers with me, a constant in my thoughts.",
  "I’ve been searching for courage to say this:",
  "Pwede ba kitang ligawan? I promise no pressure — just hope in every word.",
  "Thank you for reading. 💌"
];

function startScroll() {
  const user = document.getElementById("userInput").value.trim().toLowerCase();
  scrollText.innerText = lines.join("\n\n");
  scrollText.style.bottom = "-100%";
  scrollText.style.animation = "scrollUp 15s ease-out forwards";
}
