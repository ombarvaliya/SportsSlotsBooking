document.addEventListener('DOMContentLoaded', () => {
    const sportsList = document.querySelector('.sports-list');
    const searchBar = document.getElementById('searchBar');

    const sports = [
        { name: 'Basketball', image: './images/basketball.jpg' },
        { name: 'Tennis', image: './images/tennis.jpg' },
        { name: 'Cricket', image: './images/cricket.jpg' },
        { name: 'Hockey', image: './images/hockey.jpg' }
    ];

    // Function to display sports dynamically
    function displaySports(sports) {
        sportsList.innerHTML = ''; // Clear previous sports list
        sports.forEach(sport => {
            const sportDiv = document.createElement('div');
            sportDiv.classList.add('sport-item');
            sportDiv.innerHTML = `
                <img src="${sport.image}" alt="${sport.name}" class="sport-image">
                <h3>${sport.name}</h3>
            `;
            sportDiv.addEventListener('click', () => {
                handleSportClick(sport.name); // Handle click on sport
            });
            sportsList.appendChild(sportDiv);
        });
    }

    // Search filter function
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredSports = sports.filter(sport => sport.name.toLowerCase().includes(searchTerm));
        displaySports(filteredSports); // Re-display filtered sports
    });

    // Initial display of all sports
    displaySports(sports);

    // Redirect to the sport-specific page without login check
    function handleSportClick(sportName) {
        window.location.href = `${sportName.toLowerCase()}.html`; // Redirect to sport-specific page
    }

    // 'Book Venue' button handler
    document.getElementById('bookVenueBtn').addEventListener('click', () => {
        window.location.href = 'book-venue.html';
    });

    // 'Get Listed' button handler
    document.getElementById('getListedBtn').addEventListener('click', () => {
        window.location.href = 'get-listed.html';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const venueItems = document.querySelectorAll('.venue-item');
    const bookButtons = document.querySelectorAll('.book-slot-btn');

    // Search functionality
    searchBar.addEventListener('input', (e) => {
        const searchQuery = e.target.value.toLowerCase();

        venueItems.forEach((item) => {
            const sportName = item.getAttribute('data-sport').toLowerCase();
            const venueName = item.querySelector('h3').textContent.toLowerCase();

            if (sportName.includes(searchQuery) || venueName.includes(searchQuery)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Link buttons to the specific sport pages
    bookButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const sportType = venueItems[index].getAttribute('data-sport').toLowerCase();

            // Redirect to the corresponding sport page
            switch (sportType) {
                case 'basketball':
                    window.location.href = 'basketball.html';
                    break;
                case 'tennis':
                    window.location.href = 'tennis.html';
                    break;
                case 'cricket':
                    window.location.href = 'cricket.html';
                    break;
                case 'hockey':
                    window.location.href = 'hockey.html';
                    break;
                default:
                    alert('Sport page not found.');
            }
        });
    });
});

