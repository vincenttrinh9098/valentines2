const compliments = [
    "I love how feminine you are. I notice the way you dress with your accessories like bows and sparkles to your speech patterns and your cute mannerisms. I feel like everything you do is so attractive to me.",
    "I love your abilty to be mindful. I feel like every single moment I share with you has been enhanced because of your presence. Even when we are not phyiscally together, I still feel your presence in my life. Your mindfulness transcends the physical bounds of the universe fr.",
    "I am jealous of the people who are able to see you everyday and more than I can. I believe that your energy radiates in such a positive way that attracts people to you which is such a beautiful thing.",
    "I love the cute mannerisms that you do to scrunching your face on my chest to the meows I hear.",
    "I notice all of you and I love all of you.",
    "You are the only woman who is able to contribute to my growth. Let’s grow together my love.",
    "I love you Tiana. I say it all the time but before I met you, when I thought of my wife, it was this unlockable black screened mystery character, and now that I have met you, that figure has disappeared, and is now you.",
    "For you Tiana, nothing is ever too much, it is always just enough.",
    "I love how you have similar values and morals to me. Our conversations are always so enjoyable and I find value in the midst of our communication.",
    "If love is universal, does that mean you are my universe? They say if you say change your...",
    "I appreciate all the things that you do for me em. I appreciate the fact that you take your time to drive to see me, the hours you take into preparing food, and the attentiveness that you put into yourself and us.",
    "Your energy, femininity and character goes so well with my own polar opposite. This is the mirror people speak of when they say you will know when you have found your person.",
    "I love all of you Tiana. I am devoted to serving you and magnifying the love in our relationship.",
    "My favorite features of yours are your eyes and smile, I can't really pick. When I see you smile it feels soooo inviting and welcoming for me to smile aswell. When I look into your eyes and smile, I see stars :)",
    "I love your personality as a whole. Your ability to understand be patient as well as being blunt when you need to. Everything you do and even not do is so attractive to me and I know you will continue to grow even more along with your personality.",
    "I really love our phone calls and facetimes. I don't say it enough but my favorite part of the day are when we are able to just talk on the phone with eachother at nighttime. It feels right. Talking to you and ending the day with your feels right.",
    "I love how you encourage me to be your lover. How you consistently remind me of how you want to be loved and treated is a sign that you want to continue our relationship. I am glad you feel the same way I do",
    "ARRRFF ARRRF ARFFFF",
    "Happy Valentines Em Yeu. You are the only person I have truly loved. I have never given myself to anyone and I realized that in my relationship with you. I want to give you all of me. Pleaese let me devote myself to you. I love you Tiana :))",
    "",
];

const images = Array.from({ length: 123 }, (_, i) =>
    `images/image${String(i + 1).padStart(3, '0')}.jpg`  // relative path, no leading /
);

function openModal() {
    const contentElement = document.querySelector('.cloud-content p');
    const modal = document.querySelector('.cloud-modal')

    const showImage = Math.random() < 0.7;
    
    console.log('Show image:', showImage); // Check what's being chosen
    
    if (showImage){
        // Pick a random image
        const randomImage = images[Math.floor(Math.random() * images.length)];
        contentElement.innerHTML = `
            <img src="${randomImage}" 
                alt="Surprise!" 
                style="
                    max-width: 70vw;
                    max-height: 55vh;
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