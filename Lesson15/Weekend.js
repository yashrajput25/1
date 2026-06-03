

//15e 15f 15g

export default function isWeekend(date){

    const day = date.format('dddd');
    if(day === 'Saturday' || day === 'Sunday'){
        return day;
    }
}