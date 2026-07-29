/*  
    Location: src\lib\typescript\helpers\date.ts
    use:
*/
const currentDate = new Date();

// Helper to get ISO Week Number
const getWeekNumber = (d: Date): number => {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
    return weekNo;
};

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

export const date = {
    year: currentDate.getFullYear(),
    month: {
        number: currentDate.getMonth() + 1,
        name: monthNames[currentDate.getMonth()],
        short: monthNames[currentDate.getMonth()].substring(0, 3)
    },
    day: {
        number: currentDate.getDate(),
        name: dayNames[currentDate.getDay()],
        short: dayNames[currentDate.getDay()].substring(0, 3),
    },
    week: getWeekNumber(currentDate),
    time: {
        hours: currentDate.getHours(),
        minutes: currentDate.getMinutes(),
        seconds: currentDate.getSeconds(),
        milliseconds: currentDate.getMilliseconds(),
    },
    iso: currentDate.toISOString(),
    timezone: currentDate.getTimezoneOffset(),
    raw: currentDate
};