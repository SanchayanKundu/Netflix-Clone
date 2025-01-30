document.addEventListener('DOMContentLoaded', function () {
    // Sidebar functionality
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const loginModal = document.getElementById('loginModal');
const loginButton = document.getElementById('login');
const closeModal = document.querySelectorAll('.close');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');
const loginContent = document.querySelector('.modal-content');
const signupContent = document.getElementById('signupContent');

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

    const cards = [
        { image: 'card1.jpg', title: 'Squid Game Season1', description: 'A movie where players compete for money in exchange of Death', views: '1.2M', rating: '4.5' },
        { image: 'card2.jpg', title: 'Squid Game Season2', description: 'Will player455 be able to take revenge of season 1', views: '800K', rating: '4.2' },
        { image: 'card3.jpg', title: 'Venom the Last Dance', description: 'See to know how Eddie and Venom will fight together against knull', views: '1.5M', rating: '4.7' },
        { image: 'card4.jpg', title: 'Pushpa 2', description: 'See how Pushpa take control over the export of Red Sadalhood', views: '900K', rating: '4.0' },
        { image: 'card5.jpg', title: 'Lucky Bhaskar', description: 'How a normal middle class man scam the bank and big bull and became rich', views: '1.1M', rating: '4.6' },
        { image: 'card6.jpg', title: 'Peaky Blinders', description: 'See the untold story of the famous Peaky Blinders', views: '750K', rating: '3.9' },
        { image: 'card7.jpg', title: 'Breaking Bad', description: 'See How a normal college professor became a Drug lord', views: '1.3M', rating: '4.8' },
        { image: 'card8.jpg', title: 'Mission Impossible', description: 'To make impossible possible again with Tom CRuise', views: '950K', rating: '4.1' },
        { image: 'card9.jpg', title: 'John Wick', description: 'See how a Deadly assasin eliminate all his enemies', views: '1.4M', rating: '4.9' },
        { image: 'card10.jpg', title: 'Transformers', description: 'Alien from outer space who can turn into cars and help the humans fight evil species of them', views: '1.0M', rating: '4.3' }
    ];

    let currentCardIndex = 0;

    function updateCards() {
        cardsContainer.innerHTML = cards
            .slice(currentCardIndex, currentCardIndex + 4)
            .map(card => `
                <div class="card">
                    <img src="${card.image}" alt="${card.title}">
                    <h3>${card.title}</h3>
                    <p>${card.description}</p>
                    <p>Views: ${card.views} | Rating: ${card.rating}/5</p>
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
        if (currentCardIndex < cards.length - 4) {
            currentCardIndex++;
            updateCards();
        }
    });

    // Hover effect to play video on card image
    const cardImages = document.querySelectorAll('.card img');
    cardImages.forEach(cardImage => {
        cardImage.addEventListener('mouseenter', function () {
            const video = document.createElement('video');
            video.src = 'trailer.mp4'; // Replace with the actual video file
            video.autoplay = true;
            video.muted = true;
            video.loop = true;
            cardImage.replaceWith(video);
        });

        cardImage.addEventListener('mouseleave', function () {
            const video = cardImage.parentElement.querySelector('video');
            if (video) {
                video.replaceWith(cardImage);
            }
        });
    });
});