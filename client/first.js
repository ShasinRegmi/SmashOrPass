let imgCount = 2;
let votes = {};

document.addEventListener("DOMContentLoaded", function() {
    const smashButtons = document.querySelectorAll('.smash-btn');
    const passButtons = document.querySelectorAll('.pass-btn');
    const nextButton = document.querySelector('.next-btn');

    smashButtons.forEach(button => {
        button.addEventListener('click', function() {
            const img = document.querySelector('.img');
            const imgSrc = img.src;
            votes[imgSrc] = votes[imgSrc] || { smash: 0, pass: 0 };
            votes[imgSrc].smash++;

            updateUI(imgSrc);
            nextButton.classList.remove('hide');
        });
    });

    passButtons.forEach(button => {
        button.addEventListener('click', function() {
            const img = document.querySelector('.img');
            const imgSrc = img.src;
            votes[imgSrc] = votes[imgSrc] || { smash: 0, pass: 0 };
            votes[imgSrc].pass++;

            updateUI(imgSrc);
            nextButton.classList.remove('hide');
        });
    });


});

function updateUI(imgSrc) {
    const item = document.querySelector('.item');
    const voteDisplay = item.querySelector('.vote-display');

    if (!voteDisplay) {
        const newVoteDisplay = document.createElement('div');
        newVoteDisplay.classList.add('vote-display');
        item.appendChild(newVoteDisplay);
        voteDisplay = newVoteDisplay;
    }

    voteDisplay.textContent = `Smash: ${votes[imgSrc].smash}, Pass: ${votes[imgSrc].pass}`;
    voteDisplay.classList.remove('hide');
}

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