const timeframes =  document.getElementById('times');
import {dailyTime, weeklyTime, monthlyTime} from './time-frames.js';

addEventListener('load',()=>{
    dailyTime();
})

timeframes.addEventListener('click',(event)=>{
    let time = event.target.text
    switch (time) {
        case "Daily":
            dailyTime();
        break;
        case "Weekly":
            weeklyTime();
        break;
        case "Monthly":
            monthlyTime();
        break;
    }
})

