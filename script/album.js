const album = document.getElementById('album');

const leftArrow = album.querySelector('#left');
const rightArrow = album.querySelector('#right');

const display = album.querySelector('.displaying');
const render = album.querySelector('#render-img');
const container = album.querySelector('.container');

let focus_index = 0;
let start_point = 0;
let end_point = 10;
const MID = 5;
const imgList = container.querySelectorAll(' img:not(.arrow)');
const MAX_END = imgList.length-1;

const focus = index => {
    imgList[focus_index].style.opacity = 0.5;
    focus_index = index;
    imgList[focus_index].style.opacity = 1;
    render.setAttribute('src', imgList[focus_index].getAttribute('src'));
}

rightArrow.addEventListener('click', () => {
    if(end_point - focus_index > MID){
        focus(focus_index+1);
    }else{
        end_point = Math.min(MAX_END, end_point+1);
        start_point = end_point - 2*MID;
        display.append(imgList[end_point]);
        if(start_point > 0){
            display.before(imgList[start_point-1]);
        }
        focus(Math.min(end_point, focus_index+1));
    }
})

leftArrow.addEventListener('click', () => {
    if(focus_index - start_point > MID){
        focus(focus_index-1); 
    }else {
        start_point = Math.max(0, start_point-1);
        end_point = start_point + 2*MID;
        display.prepend(imgList[start_point]);
        if(end_point < MAX_END){
            display.after(imgList[end_point+1]);
        }
        focus(Math.max(start_point, focus_index-1));
    }
})

imgList.forEach(img => {
    img.addEventListener('click', () => {
        for(let i=start_point; i<=end_point; i++){
            if(img == imgList[i]){
                focus(i);
                break;
            }
        }
    })
})

focus(0);
