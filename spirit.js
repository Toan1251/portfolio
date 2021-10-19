const fan = document.getElementById("fan");
const day = document.getElementById("day");

const dayFormat = new Intl.NumberFormat("en-US");
const spirit_win_TI10 = new Date("10-17-2021");


const differ_day = (today, day) => {
    let diff_day = 0;
    if(today.getFullYear() == day.getFullYear()){
        if(today.getMonth() == day.getMonth()){
            return today.getDate() - day.getDate();
        }
        else{
            for(let m = day.getMonth(); m < today.getMonth(); m++){
                switch(m+1){
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                        diff_day += 31;
                        break;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        diff_day += 30;
                        break;
                    case 2:
                        if(today.getFullYear()%4==0){
                            diff_day += 1;
                        }
                        diff_day += 28;
                        break;
                }
            }
            diff_day = diff_day - day.getDate() + today.getDate();
        }
    } else {
        let break1 = new Date(`1-1-${day.getFullYear()}`) ;
        let break2 = new Date(`1-1-${today.getFullYear()}`);
        for(let y = day.getFullYear(); y < today.getFullYear() - 1; y++){
            if(y%4==0){
                diff_day++;
            }
            diff_day+=365;
        }
        diff_day += differ_day(today, break2) - differ_day(break1, day);
    }
    return diff_day;

}

const win_TI_10 = () => {
    const today = new Date();
    const different_day = differ_day(today, spirit_win_TI10);
    const n_year = Math.floor(different_day / 365.25);
    const n_day = Math.floor(different_day - 365.25*n_year);
    fan.innerHTML = n_year;
    day.innerHTML = n_day;
}

setInterval(win_TI_10, 1000);
