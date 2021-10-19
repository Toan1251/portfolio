const album = document.getElementById('album');

const leftArrow = album.querySelector('#left');
const rightArrow = album.querySelector('#right');

const display = album.querySelector('.displaying');
const noDisplayLeft = album.querySelector('.no-display-left');
const noDisplayRight = album.querySelector('.no-display-right');
const render = album.querySelector('#render-img');

let focus_index = 0;
display.querySelectorAll('img')[focus_index].style.opacity = 1;

const toRight = () => {
    console.log('rightclick');
    const focus = display.querySelectorAll('img');
    if(focus_index < 5 && !noDisplayLeft.childElementCount){
        focus[focus_index].style.opacity = 0.5;
        focus_index++;
        focus[focus_index].style.opacity = 1;
        rendering(focus[focus_index].getAttribute('src'));
    } 
    else if(focus_index >= 5 && !noDisplayRight.childElementCount && focus_index < 10){
        focus[focus_index].style.opacity = 0.5;
        focus_index++;
        focus[focus_index].style.opacity = 1;
        rendering(focus[focus_index].getAttribute('src'));
    } else if(noDisplayRight.childElementCount) {
        const item_left = display.firstElementChild;
        const item_right = noDisplayRight.firstElementChild;
        noDisplayLeft.append(item_left);
        display.append(item_right);
        focus[focus_index+1].style.opacity = 1;
        focus[focus_index].style.opacity = 0.5;
        rendering(focus[focus_index+1].getAttribute('src'));
    }
}

const toLeft = () => {
    console.log('leftclick');
    const focus = display.querySelectorAll('img');
    if(focus_index <= 5 && !noDisplayLeft.childElementCount && focus_index > 0){
        focus[focus_index].style.opacity = 0.5;
        focus_index--;
        focus[focus_index].style.opacity = 1;
        rendering(focus[focus_index].getAttribute('src'));
    } 
    else if(focus_index > 5 && !noDisplayRight.childElementCount && focus_index < 10){
        focus[focus_index].style.opacity = 0.5;
        focus_index--;
        focus[focus_index].style.opacity = 1;
        rendering(focus[focus_index].getAttribute('src'));
    } else if(noDisplayLeft.childElementCount) {
        const item_left = noDisplayLeft.lastElementChild;
        const item_right = display.lastElementChild;
        display.prepend(item_left);
        noDisplayRight.prepend(item_right);
        focus[focus_index-1].style.opacity = 1;
        focus[focus_index].style.opacity = 0.5
        rendering(focus[focus_index-1].getAttribute('src'));
    }
}

const rendering = url_img => {
    console.log(url_img);
    render.setAttribute('src', url_img);
}

rightArrow.addEventListener('click', toRight);
leftArrow.addEventListener('click', toLeft);

const imgList = album.querySelectorAll('.container img:not(.arrow)');
imgList.forEach(img => {
    img.addEventListener('click', () => {
        rendering(img.getAttribute('src'));
        const focus = display.querySelectorAll('img');
        for(let i = 0; i < focus.length; i++) {
            if(img == focus[i]){
                focus[focus_index].style.opacity = 0.5;
                focus_index = i;
                focus[focus_index].style.opacity = 1;
            }
        }
    })
})
