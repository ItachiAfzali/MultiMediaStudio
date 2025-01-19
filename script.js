const profileImages = [
    "https://dashboard.codeparrot.ai/api/assets/Z4ZCEDMVzJlAjbZf",
    "https://dashboard.codeparrot.ai/api/assets/Z4ZCEDMVzJlAjbZf"
];

const galleryImages = [
    "https://dashboard.codeparrot.ai/api/assets/Z4ZJXzMVzJlAjbZs",
    "https://dashboard.codeparrot.ai/api/assets/Z4ZJXzMVzJlAjbZs"
];

let currentIndex = 0;

function switchImage(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % profileImages.length;
    } else {
        currentIndex = (currentIndex - 1 + profileImages.length) % profileImages.length;
    }

    document.getElementById('profileImage').src = profileImages[currentIndex];
    document.getElementById('galleryImage').src = galleryImages[currentIndex];
}
