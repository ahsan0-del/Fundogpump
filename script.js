// Set FIXED end date (Oct 31, 2023 23:59:59 UTC)
const countdownDate = new Date("2023-10-31T23:59:59Z");

function updateCountdown() {
  const now = new Date();
  const diff = countdownDate - now;

  // Stop timer if sale ended
  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "🚀 Sale Ended!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, '0');
  document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Initialize immediately
