document.addEventListener('DOMContentLoaded', function() {
    const animatedText = document.getElementById('animatedText');
    if (animatedText) {
        animatedText.textContent = 'কোমরপুর বিজয় নিশান ক্লাব';
    }
});

function searchPlayers() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const players = document.getElementsByClassName('player');

    Array.from(players).forEach(player => {
        const name = player.getAttribute('data-name').toLowerCase();
        if (name.includes(filter)) {
            player.style.display = '';
        } else {
            player.style.display = 'none';
        }
    });
}

function ratePlayer(playerName) {
    const rating = prompt(`Rate ${playerName} (1-5):`);
    if (rating && !isNaN(rating) && rating >= 1 && rating <= 5) {
        alert(`You rated ${playerName} with ${rating} stars. Thank you for your feedback!`);
        // Here you can add code to save the rating to a server or database
    } else {
        alert('Please enter a valid rating between 1 and 5.');
    }
}