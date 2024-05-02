document.addEventListener("DOMContentLoaded", function() {
    // Initialize votes object to store votes for each image
    const votes = {};

    // Get all Smash and Pass buttons
    const smashButtons = document.querySelectorAll('.smash-btn');
    const passButtons = document.querySelectorAll('.pass-btn');

    // Add event listeners to all Smash buttons
    smashButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            const item = button.closest('.item');

            // Get the image src and update votes object
            const imgSrc = item.querySelector('img').src;
            votes[imgSrc] = votes[imgSrc] || { smash: 0, pass: 0 };
            votes[imgSrc].smash++;

            
            updateUI(imgSrc);
        });
    });

    // Add event listeners to all Pass buttons
    passButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the parent item containing the image
            const item = button.closest('.item');

            // Get the image src and update votes object
            const imgSrc = item.querySelector('img').src;
            votes[imgSrc] = votes[imgSrc] || { smash: 0, pass: 0 };
            votes[imgSrc].pass++;

           
            updateUI(imgSrc);
        });
    });


    function updateUI(imgSrc) {
        const item = document.querySelector(`img[src="${imgSrc}"]`).closest('.item');
        const voteDisplay = item.querySelector('.vote-display');

        
        if (!voteDisplay) {
            const newVoteDisplay = document.createElement('div');
            newVoteDisplay.classList.add('vote-display');
            item.appendChild(newVoteDisplay);
            voteDisplay = newVoteDisplay;
        }

        // Update vote display with the current vote count
        voteDisplay.textContent = `Smash: ${votes[imgSrc].smash}, Pass: ${votes[imgSrc].pass}`;
    }
});
