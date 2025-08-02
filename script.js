// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    const pages = document.querySelectorAll('.page-content');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetPageId = button.dataset.page + '-page';

            // Deactivate all pages
            pages.forEach(page => page.classList.remove('active'));

            // Activate the target page
            const targetPage = document.getElementById(targetPageId);
            if (targetPage) {
                targetPage.classList.add('active');
            }

            // Update active navigation button styling (optional, but good for UX)
            navButtons.forEach(btn => btn.classList.remove('text-pink-custom', 'font-bold'));
            button.classList.add('text-pink-custom', 'font-bold');
        });
    });

    // Set initial active button style for "Accueil"
    const initialActiveButton = document.querySelector('.nav-button[data-page="accueil"]');
    if (initialActiveButton) {
        initialActiveButton.classList.add('text-pink-custom', 'font-bold');
    }
});

// Image Carousel Logic for Chambre Standard
const standardRoomImages = [
    "https://i.imgur.com/TN9j4sd.jpeg",
    "https://i.imgur.com/pxKAEQU.jpeg",
    "https://i.imgur.com/lwG0dPC.jpeg",
    "https://i.imgur.com/c9XDy2x.jpeg",
    "https://i.imgur.com/9Ehub9E.jpeg"
];
let currentImageIndex = 0;

function updateStandardRoomImage() {
    const imgElement = document.getElementById('standard-room-image');
    if (imgElement) {
        imgElement.src = standardRoomImages[currentImageIndex];
    }
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + standardRoomImages.length) % standardRoomImages.length;
    updateStandardRoomImage();
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % standardRoomImages.length;
    updateStandardRoomImage();
}

// Image Carousel Logic for Restaurant & Bar
const barImages = [
    "https://i.imgur.com/0H4HRdM.jpeg",
    "https://i.imgur.com/uNQuMuJ.jpeg",
    "https://i.imgur.com/AxehAO4.jpeg"
];
let currentBarImageIndex = 0;

function updateBarImage() {
    const imgElement = document.getElementById('bar-image');
    if (imgElement) {
        imgElement.src = barImages[currentBarImageIndex];
    }
}

function prevBarImage() {
    currentBarImageIndex = (currentBarImageIndex - 1 + barImages.length) % barImages.length;
    updateBarImage();
}

function nextBarImage() {
    currentBarImageIndex = (currentBarImageIndex + 1) % barImages.length;
    updateBarImage();
}

// Initialize carousels on page load
document.addEventListener('DOMContentLoaded', () => {
    updateStandardRoomImage();
    updateBarImage(); // Initialize bar images
});
