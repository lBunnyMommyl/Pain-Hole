const today = new Date();

const dayAfterTomorrow = new Date(today);
dayAfterTomorrow.setDate(today.getDate() + 2);

const day = String(dayAfterTomorrow.getDate()).padStart(2, '0');
const month = String(dayAfterTomorrow.getMonth() + 1).padStart(2, '0'); 
const year = dayAfterTomorrow.getFullYear();

console.log(`${day}-${month}-${year}`);