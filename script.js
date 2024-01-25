const emojiContainer = document.getElementById('emoji-container');

// Function to create a new emoji element
function createEmoji() {
  const emoji = document.createElement('span');
  emoji.classList.add('emoji');
  emoji.innerHTML = '❤️'; // Replace with your preferred emoji
  emoji.style.left = Math.random() * 100 + '%'; // Random horizontal position
  emojiContainer.appendChild(emoji);

  // Remove the emoji from the container when animation ends
  emoji.addEventListener('animationend', () => {
    emoji.remove();
  });
}

// Generate emojis for the first 3 seconds
let timer = setInterval(createEmoji, 500); // Adjust the interval (in milliseconds) as desired

// Stop generating emojis after 3 seconds
setTimeout(() => {
  clearInterval(timer); // Stop generating new emojis
}, 5000);

// Remove any emojis that are still animating after 3 seconds
setTimeout(() => {
  const emojis = document.getElementsByClassName('emoji');
  while (emojis.length > 0) {
    emojis[0].remove();
  }
}, 5000);

// Set the target date (e.g., your anniversary date)
const targetDate = new Date('2023-04-25T00:00:00Z').getTime();

// Update the counter every second
setInterval(updateCounter, 1000);

function updateCounter() {
  // Get the current time
  const currentTime = new Date().getTime();

  // Calculate the time difference in milliseconds
  const timeDifference = currentTime - targetDate;

  // Calculate the days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the counter on the webpage
  const counterElement = document.getElementById('counter');
  counterElement.innerHTML = `
        <p>Days: ${days}</p>
        <p>Hours: ${hours}</p>
        <p>Minutes: ${minutes}</p>
        <p>Seconds: ${seconds}</p>
      `;
}
