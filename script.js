// COUNTDOWN TIMER (set to 7 days from now)
const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 7);

function updateCountdown() {
  const now = new Date();
  const diff = countdownDate - now;

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

// WALLET CONNECTION
document.getElementById("connectButton").onclick = async function() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      alert("Connected: " + accounts[0]);
    } catch (error) {
      alert("Error connecting: " + error.message);
    }
  } else {
    alert("Please install MetaMask!");
  }
};
