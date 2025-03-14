document.addEventListener('DOMContentLoaded', function() {
    const animatedText = document.getElementById('animatedText');
    if (animatedText) {
        animatedText.textContent = 'কোমরপুর বিজয় নিশান ক্লাব';
    }

    // Initialize ratings from localStorage
    const players = document.getElementsByClassName('player');
    Array.from(players).forEach(player => {
        const playerName = player.getAttribute('data-name');
        const ratingKey = `rating-${playerName}`;
        const ratingData = JSON.parse(localStorage.getItem(ratingKey)) || { totalRating: 0, ratingCount: 0 };
        updateRatingDisplay(playerName, ratingData);
    });
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
        const ratingKey = `rating-${playerName}`;
        const ratingData = JSON.parse(localStorage.getItem(ratingKey)) || { totalRating: 0, ratingCount: 0 };
        ratingData.totalRating += parseInt(rating);
        ratingData.ratingCount += 1;
        localStorage.setItem(ratingKey, JSON.stringify(ratingData));
        updateRatingDisplay(playerName, ratingData);
        alert(`You rated ${playerName} with ${rating} stars. Thank you for your feedback!`);
    } else {
        alert('Please enter a valid rating between 1 and 5.');
    }
}

function updateRatingDisplay(playerName, ratingData) {
    const averageRating = (ratingData.totalRating / ratingData.ratingCount).toFixed(1);
    const ratingElement = document.getElementById(`rating-${playerName}`);
    ratingElement.textContent = `${averageRating} (${ratingData.ratingCount} ratings)`;
}