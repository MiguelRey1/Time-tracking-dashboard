const titlesCards = document.querySelectorAll('.card__item__modifier-1');
const previousTime = document.querySelectorAll('.last_time');
const currentTime =  document.querySelectorAll('.current_time')

    const  dailyTime = async () =>{
        let response = await fetch('../data.json')
        let data = await response.json();
            for (const iterator in data) {
                titlesCards[iterator].textContent = data[iterator].title;
                currentTime[iterator].textContent = `${data[iterator].timeframes.daily.current}hrs`;
                previousTime[iterator].textContent = `last week - ${data[iterator].timeframes.daily.previous}hrs`;
            }
    };
    
    const  weeklyTime = async  () =>{
        let response = await fetch('../data.json');
        let data =  await response.json();
        for (const iterator in data) {
            currentTime[iterator].textContent = `${data[iterator].timeframes.weekly.current}hrs`;
            previousTime[iterator].textContent = `last week - ${data[iterator].timeframes.weekly.previous}hrs`;
        }
    };
    
    const monthlyTime = async () =>{
        let response = await fetch('../data.json');
        let data =  await response.json();
        for (const iterator in data) {
            currentTime[iterator].textContent = `${data[iterator].timeframes.monthly.current}hrs`;
            previousTime[iterator].textContent = `last week - ${data[iterator].timeframes.monthly.previous}hrs`;
        }
    };

export {dailyTime, weeklyTime, monthlyTime};


