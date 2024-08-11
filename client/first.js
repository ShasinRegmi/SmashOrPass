let votes = {};
let tempImageIndex = 0;
let images = [
    'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww',
    'https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D',
]

document.addEventListener("DOMContentLoaded", function() {
    const smashButtons = document.querySelectorAll('.smash-btn');
    const passButtons = document.querySelectorAll('.pass-btn');
    const nextButton = document.querySelector('.next-btn');
    const imageWala = document.querySelector('.imageClass')
    imageWala.src = images[tempImageIndex]

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
    let voteDisplay = item.querySelector('.vote-display');

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
    console.log({"index": tempImageIndex})

     if(tempImageIndex == images.length - 1){
        tempImageIndex = 0;
     }
    img.src = images[++tempImageIndex]

}
