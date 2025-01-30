document.addEventListener('DOMContentLoaded', function () {
    // Sidebar functionality
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');

    // Function to open the sidebar
    function openSidebar() {
        sidebar.classList.add('active');
        document.body.classList.add('sidebar-active');
    }

    // Function to close the sidebar
    function closeSidebar() {
        sidebar.classList.remove('active');
        document.body.classList.remove('sidebar-active');
    }

    // Toggle sidebar when the button is clicked
    sidebarToggle.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the click from bubbling up to the document
        if (sidebar.classList.contains('active')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });

    // Close sidebar when clicking outside of it
    document.addEventListener('click', function (event) {
        if (sidebar.classList.contains('active') && !sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
            closeSidebar();
        }
    });

    // Prevent clicks inside the sidebar from closing it
    sidebar.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    // Image slider functionality
    const imageSlider = document.querySelector('.image-slider');
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
        'image6.jpg',
        'image7.jpg',
        'image8.jpg'
    ];
    let currentImageIndex = 0;

    function updateImageSlider() {
        imageSlider.innerHTML = `<img src="${images[currentImageIndex]}" alt="Slide ${currentImageIndex + 1}">`;
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Start the image slider
    setInterval(updateImageSlider, 3000);
    updateImageSlider(); // Initial call to display the first image

    // Card slider functionality
    const cardsContainer = document.querySelector('.cards-container');
    const prevCardButton = document.getElementById('prevCard');
    const nextCardButton = document.getElementById('nextCard');

    const movies = [
        {
            id: 1,
            image: 'card1.jpg',
            title: 'Squid Game 1',
            description: 'Description of Movie 1',
            views: '1.2M',
            rating: '4.5',
            details: {
                poster: 'card1.jpg',
                director: 'Director 1',
                cast: 'Actor A, Actor B, Actor C',
                genre: 'Action, Thriller',
                releaseDate: '2023-01-01',
                runtime: '2h 15m',
                synopsis: 'A thrilling adventure about...'
            }
        },
        {
            id: 2,
            image: 'card2.jpg',
            title: 'Squid Game 2',
            description: 'Description of Movie 2',
            views: '800K',
            rating: '4.2',
            details: {
                poster: 'card2.jpg',
                director: 'Director 2',
                cast: 'Actor D, Actor E, Actor F',
                genre: 'Drama, Romance',
                releaseDate: '2023-02-15',
                runtime: '1h 50m',
                synopsis: 'A heartwarming story of...'
            }
        },
        {
            id: 3,
            image: 'card3.jpg',
            title: 'Venom the last Dance',
            description: 'Description of Movie 2',
            views: '800K',
            rating: '4.2',
            details: {
                poster: 'card2.jpg',
                director: 'Director 2',
                cast: 'Actor D, Actor E, Actor F',
                genre: 'Drama, Romance',
                releaseDate: '2023-02-15',
                runtime: '1h 50m',
                synopsis: 'A heartwarming story of...'
            }
        },
        {
            id: 4,
            image: 'card4.jpg',
            title: 'Pushpa',
            description: 'Description of Movie 2',
            views: '800K',
            rating: '4.2',
            details: {
                poster: 'card2.jpg',
                director: 'Director 2',
                cast: 'Actor D, Actor E, Actor F',
                genre: 'Drama, Romance',
                releaseDate: '2023-02-15',
                runtime: '1h 50m',
                synopsis: 'A heartwarming story of...'
            }
        },
        {
            id: 5,
            image: 'card5.jpg',
            title: 'Lucky Bhaskar',
            description: 'Description of Movie 2',
            views: '800K',
            rating: '4.2',
            details: {
                poster: 'card2.jpg',
                director: 'Director 2',
                cast: 'Actor D, Actor E, Actor F',
                genre: 'Drama, Romance',
                releaseDate: '2023-02-15',
                runtime: '1h 50m',
                synopsis: 'A heartwarming story of...'
            }
        },
        {
            id: 6,
            image: 'card6.jpg',
            title: 'Peaky Blinders',
            description: 'Description of Movie 2',
            views: '800K',
            rating: '4.2',
            details: {
                poster: 'card2.jpg',
                director: 'Director 2',
                cast: 'Actor D, Actor E, Actor F',
                genre: 'Drama, Romance',
                releaseDate: '2023-02-15',
                runtime: '1h 50m',
                synopsis: 'A heartwarming story of...'
            }
        },
        {
            id: 7,
            image: 'card7.jpg',
            title: 'Breaking Bad',
            description: 'Brealing Bad',
            views: '800K',
            rating: '4.2',
            details: {
                poster: 'card2.jpg',
                director: 'Director 2',
                cast: 'Actor D, Actor E, Actor F',
                genre: 'Drama, Romance',
                releaseDate: '2023-02-15',
                runtime: '1h 50m',
                synopsis: 'A heartwarming story of...'
            }
        },
        {
            id: 8,
            image: 'card8.jpg',
            title: 'Mission Impossible',
            description: 'Description of Movie 2',
            views: '800K',
            rating: '4.2',
            details: {
                poster: 'card2.jpg',
                director: 'Director 2',
                cast: 'Actor D, Actor E, Actor F',
                genre: 'Drama, Romance',
                releaseDate: '2023-02-15',
                runtime: '1h 50m',
                synopsis: 'A heartwarming story of...'
            }
        },
        {
            id: 9,
            image: 'card9.jpg',
            title: 'John Wick',
            description: 'Description of Movie 2',
            views: '800K',
            rating: '4.2',
            details: {
                poster: 'card2.jpg',
                director: 'Director 2',
                cast: 'Actor D, Actor E, Actor F',
                genre: 'Drama, Romance',
                releaseDate: '2023-02-15',
                runtime: '1h 50m',
                synopsis: 'A heartwarming story of...'
            }
        },
        {
            id: 10,
            image: 'card10.jpg',
            title: 'Transformers',
            description: 'Description of Movie ',
            views: '800K',
            rating: '4.2',
            details: {
                poster: 'card2.jpg',
                director: 'Director 2',
                cast: 'Actor D, Actor E, Actor F',
                genre: 'Drama, Romance',
                releaseDate: '2023-02-15',
                runtime: '1h 50m',
                synopsis: 'A heartwarming story of...'
            }
        },
        {
            id: 11,
            image: 'card2.jpg',
            title: 'Movie 2',
            description: 'Description of Movie 2',
            views: '800K',
            rating: '4.2',
            details: {
                poster: 'card2.jpg',
                director: 'Director 2',
                cast: 'Actor D, Actor E, Actor F',
                genre: 'Drama, Romance',
                releaseDate: '2023-02-15',
                runtime: '1h 50m',
                synopsis: 'A heartwarming story of...'
            }
        },
        // Add more movies as needed
    ];

    let currentCardIndex = 0;

    function updateCards() {
        cardsContainer.innerHTML = movies
            .slice(currentCardIndex, currentCardIndex + 4)
            .map(movie => `
                <div class="card" data-id="${movie.id}">
                    <img src="${movie.image}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                    <p>${movie.description}</p>
                    <p>Views: ${movie.views} | Rating: ${movie.rating}/5</p>
                </div>
            `)
            .join('');
    }

    // Initialize the card slider
    updateCards();

    // Previous card button
    prevCardButton.addEventListener('click', function () {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            updateCards();
        }
    });

    // Next card button
    nextCardButton.addEventListener('click', function () {
        if (currentCardIndex < movies.length - 4) {
            currentCardIndex++;
            updateCards();
        }
    });

    // Hover effect to play video on card image
    cardsContainer.addEventListener('mouseover', function (event) {
        if (event.target.tagName === 'IMG') {
            const video = document.createElement('video');
            video.src = 'trailer.mp4'; // Replace with the actual video file
            video.autoplay = true;
            video.muted = true;
            video.loop = true;
            event.target.replaceWith(video);
        }
    });

    cardsContainer.addEventListener('mouseout', function (event) {
        if (event.target.tagName === 'VIDEO') {
            const img = document.createElement('img');
            img.src = movies.find(movie => movie.id == event.target.parentElement.dataset.id).image;
            event.target.replaceWith(img);
        }
    });

    // Detailed movie page functionality
    const movieDetailsPage = document.getElementById('movieDetailsPage');
    const movieDetailsContent = document.getElementById('movieDetailsContent');
    const backButton = document.getElementById('backButton');

    function showMovieDetails(movieId) {
        const movie = movies.find(m => m.id === movieId);
        if (!movie) return;

        movieDetailsContent.innerHTML = `
            <img src="${movie.details.poster}" alt="${movie.title}">
            <div>
                <h2>${movie.title}</h2>
                <p><strong>Director:</strong> ${movie.details.director}</p>
                <p><strong>Cast:</strong> ${movie.details.cast}</p>
                <p><strong>Genre:</strong> ${movie.details.genre}</p>
                <p><strong>Release Date:</strong> ${movie.details.releaseDate}</p>
                <p><strong>Runtime:</strong> ${movie.details.runtime}</p>
                <p><strong>Synopsis:</strong> ${movie.details.synopsis}</p>
            </div>
        `;

        // Show the detailed movie page and hide the main content
        movieDetailsPage.style.display = 'block';
        document.querySelector('main').style.display = 'none';
    }

    // Go back to the home page
    backButton.addEventListener('click', function () {
        movieDetailsPage.style.display = 'none';
        document.querySelector('main').style.display = 'block';
    });

    // Add click event listeners to movie cards
    cardsContainer.addEventListener('click', function (event) {
        const card = event.target.closest('.card');
        if (card) {
            const movieId = parseInt(card.dataset.id);
            showMovieDetails(movieId);
        }
    });

    // Login/Signup Modal Functionality
    const loginModal = document.getElementById('loginModal');
    const loginButton = document.getElementById('login');
    const closeModal = document.querySelectorAll('.close');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');
    const loginContent = document.querySelector('.modal-content');
    const signupContent = document.getElementById('signupContent');

    // Open the modal when the login button is clicked
    loginButton.addEventListener('click', function () {
        loginModal.style.display = 'block';
        loginContent.style.display = 'block';
        signupContent.style.display = 'none';
    });

    // Close the modal when the close button is clicked
    closeModal.forEach(button => {
        button.addEventListener('click', function () {
            loginModal.style.display = 'none';
        });
    });

    // Close the modal when clicking outside the modal
    window.addEventListener('click', function (event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Show the signup form
    showSignup.addEventListener('click', function (event) {
        event.preventDefault();
        loginContent.style.display = 'none';
        signupContent.style.display = 'block';
    });

    // Show the login form
    showLogin.addEventListener('click', function (event) {
        event.preventDefault();
        signupContent.style.display = 'none';
        loginContent.style.display = 'block';
    });

    // Handle login form submission
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        alert(`Logged in with Email: ${email}`);
        loginModal.style.display = 'none';
    });

    // Handle signup form submission
    document.getElementById('signupForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        alert(`Signed up with Name: ${name}, Email: ${email}`);
        loginModal.style.display = 'none';
    });
});