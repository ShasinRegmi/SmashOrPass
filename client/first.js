let imgCount = 1 ;
document.addEventListener("DOMContentLoaded", function() {

    // Initialize votes object to store votes for each image
    const votes = {};

    // Get all Smash and Pass buttons
    const smashButtons = document.querySelector('.smash-btn');
    const passButtons = document.querySelector('.pass-btn');

    // Add event listeners to all Smash buttons
    // smashButtons.forEach(button => {
    //     button.addEventListener('click', function() {
            
    //         const item = button.closest('.item');

    //         // Get the image src and update votes object
    //         const imgSrc = item.querySelector('img').src;
    //         votes[imgSrc] = votes[imgSrc] || { smash: 0, pass: 0 };
    //         votes[imgSrc].smash++;

            
    //         updateUI(imgSrc);
    //     });
    // });

    smashButtons.addEventListener('click', function(){
        document.querySelector('.next-btn').classList.remove('hide');
         const img = document.querySelector('.img');
         const imgSrc = img.src;
         votes[imgSrc] = votes[imgSrc] || { smash: 0, pass: 0 };
         votes[imgSrc].smash++;

        //  smashButtons.classList.add('test');
        
         updateUI(imgSrc);
        
    })

    passButtons.addEventListener('click', function(){
        document.querySelector('.next-btn').classList.remove('hide');
        const img = document.querySelector('.img');
        const imgSrc = img.src;
        votes[imgSrc] = votes[imgSrc] || { smash: 0, pass: 0 };
        votes[imgSrc].pass++;

        
        updateUI(imgSrc);
        
    })

   

    // // Add event listeners to all Pass buttons
    // passButtons.forEach(button => {
    //     button.addEventListener('click', function() {
    //         // Get the parent item containing the image
    //         const item = button.closest('.item');

    //         // Get the image src and update votes object
    //         const imgSrc = item.querySelector('img').src;
    //         votes[imgSrc] = votes[imgSrc] || { smash: 0, pass: 0 };
    //         votes[imgSrc].pass++;

           
    //         updateUI(imgSrc);
    //     });
    // });


    function updateUI(imgSrc) {
        
        const item = document.querySelector('.item');
        const voteDisplay = item.querySelector('.vote-display');
        // const smashDisplay = voteDisplay.querySelector('.smash-display');
        // const passDisplay = voteDisplay.querySelector('.pass-display');

        
        if (!voteDisplay) {
            const newVoteDisplay = document.createElement('div');
            newVoteDisplay.classList.add('vote-display');

            // const newSmashDisplay = document.createElement('div');
            // newSmashDisplay.classList.add('smash-display');
            // newVoteDisplay.appendChild(newSmashDisplay);

            // const newPassDisplay = document.createElement('div');
            // newPassDisplay.classList.add('pass-display');
            // newVoteDisplay.appendChild(newPassDisplay);

            item.appendChild(newVoteDisplay);
            voteDisplay = newVoteDisplay;
        }
       

        // Update vote display with the current vote count
        // smashDisplay.textContent = `Smash: ${votes[imgSrc].smash}`;
        // passDisplay.textContent = `Pass: ${votes[imgSrc].pass}`;
        voteDisplay.textContent = `Smash: ${votes[imgSrc].smash}, Pass: ${votes[imgSrc].pass}`;
        voteDisplay.classList.remove('hide');
        
    }

   
});

function changeImage(){
    document.querySelector('.next-btn').classList.add('hide');
    document.querySelector('.vote-display').classList.add('hide');
    var img = document.querySelector('.img');

     if(imgCount === 2)
     {
         imgCount = 1;
        
    }
     else imgCount++;
    img.src = "./car-" + imgCount + ".jpg";

}