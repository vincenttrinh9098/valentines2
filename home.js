const compliments = [
    "You're absolutely amazing! ✨",
    "Your smile brightens everyone's day! 😊",
    "You're one of a kind! 🌟",
 
];

const images = Array.from({ length: 123 }, (_, i) =>
    `images/image${String(i + 1).padStart(3, '0')}.jpg`  // relative path, no leading /
);

function openModal() {
    const contentElement = document.querySelector('.cloud-content p');
    const modal = document.querySelector('.cloud-modal')

    const showImage = Math.random() < 0.5;
    
    console.log('Show image:', showImage); // Check what's being chosen
    
    if (showImage){
        // Pick a random image
        const randomImage = images[Math.floor(Math.random() * images.length)];
        contentElement.innerHTML = `
            <img src="${randomImage}" 
                alt="Surprise!" 
                style="
                    max-width: 90vw;
                    max-height: 80vh;
                    width: auto;
                    height: auto;
                    border-radius: 8px;
                    display: block;
                ">`;
        modal.classList.add('image-mode');
        modal.classList.remove('text-mode');
    } else {
        // Pick a random compliment
        const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
        contentElement.innerHTML = randomCompliment;
        modal.classList.add('text-mode');
        modal.classList.remove('image-mode');
    }
    
    // Show the modal
    document.getElementById('cloudModal').classList.add('show');
}

function closeModal() {
    document.getElementById('cloudModal').classList.remove('show');
}

// Close modal when clicking outside of it
document.addEventListener('click', function(event) {
    const modal = document.getElementById('cloudModal');
    if (event.target === modal) {
        closeModal();
    }
});