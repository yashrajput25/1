import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import isSatSun from './Weekend.js';

let today = dayjs();

//15a.
const a = today.add(5,'day');
const final_a = a.format('MMM D');
console.log(final_a);

//15b.
const one_month_after_today = today.add(1, 'month');
console.log(one_month_after_today.format('MMM D'));

//15c.
console.log(
    today.
    subtract(1, 'month').
    format('MMM D')
)

//15d.
console.log(
    today.
    format('dddd')
)


const ans = isSatSun(today.add(3,'days'));
console.log(ans);

