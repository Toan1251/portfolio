const gameSection = document.getElementById('game');
const gameList = gameSection.querySelectorAll("li");

gameList.forEach(game => {
    game.addEventListener('click', () => {
        const ele = game.querySelector('div');
        if(ele.style.display == 'none'){
            gameList.forEach(game => {
                game.querySelector('div').style.display = 'none';
            })
            ele.style.display = 'inline';
        }
        else {
            ele.style.display = 'none';
        }
    })
})