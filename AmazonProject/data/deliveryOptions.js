import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export function getDeliveryOption(deliveryOptionId){

    let deliveryOption;
    
    deliveryOptions.forEach((option) => {              

        if(deliveryOptionId === option.id){
            deliveryOption = option;
            
        }
    });
    
    return deliveryOption || deliveryOptions[0];
}



function isWeekend(date){

    const day = date.format('dddd');

    if(day === 'Saturday' || day === 'Sunday'){
        return true;
    }

    return false;
}

export function calculateDeliveryDate(deliveryOption){

        const today = dayjs();
        let remainingDays = deliveryOption.deliveryDays;
        let date = today;

        while(remainingDays > 0){

            date = date.add(1,'days');

            if(!isWeekend(date)){
                remainingDays--;
            }
        }
        return date.format('dddd, MMMM D');

}



export const deliveryOptions = [
    {
        id:'1',
        deliveryDays: 7,
        priceCents : 0
    },
    {
        id: '2',
        deliveryDays:3,
        priceCents:499
    },
    {
        id:'3',
        deliveryDays: 1,
        priceCents: 999
    }
]


