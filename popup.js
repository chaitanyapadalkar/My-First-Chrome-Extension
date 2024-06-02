document.addEventListener('DOMContentLoaded', function() {
    const name = "Chaitanya";  // Replace with your actual name
    const quotes = [
      `${name}, you are capable of amazing things.`,
      `${name}, the universe is on your side.`,
      `${name}, believe in yourself and all that you are.`,
      `${name}, your potential is limitless.`,
      `${name}, great things are coming your way.`
    ];
  
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
  
    document.getElementById('quote').textContent = quote;
  });
  