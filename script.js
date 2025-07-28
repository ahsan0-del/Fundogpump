// Set end date: 7 days from today at 1:31 PM
const now = new Date();
const countdownDate = new Date();
countdownDate.setDate(now.getDate() + 7); // Add 7 days
countdownDate.setHours(13, 31, 0, 0); // Set to 1:31 PM

function updateCountdown() {
  const currentTime = new Date();
  const diff = countdownDate - currentTime;

  // Stop timer if sale ended
  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "🚀 Presale Ended!";
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

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call
