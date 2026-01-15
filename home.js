const compliments = [
            "You're absolutely amazing! ✨",
            "Your smile brightens everyone's day! 😊",
            "You're one of a kind! 🌟",
            "You make the world a better place! 🌸",
            "You're incredibly thoughtful! 💕",
            "Your kindness is contagious! 🌈",
            "You're stronger than you know! 💪",
            "You light up every room! ☀️",
            "You're doing great! Keep going! 🎉",
            "You're so creative and talented! 🎨",
            "Your positive energy is inspiring! ⚡",
            "You're appreciated more than you know! 💖",
            "You have such a beautiful soul! 🦋",
            "You're an incredible friend! 🤗",
            "You deserve all the happiness! 🌺",
            "You're absolutely perfect just as you are! 💫",
            "Your laugh is the best sound! 🎵",
            "You make everything better! 🌻",
            "You're a true gem! 💎",
            "You're loved beyond measure! 💗"
        ];

        function openModal() {
            // Pick a random compliment
            const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
            
            // Update the modal text
            document.querySelector('.cloud-content p').textContent = randomCompliment;
            
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