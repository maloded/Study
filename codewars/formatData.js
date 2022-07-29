// https://www.codewars.com/kata/52742f58faf5485cae000b9a 4kyu

function formatDuration(seconds) {
    if (seconds === 0) {
        return 'now';
    }
    const MINUTE = 60;
    const HOUR = 3600;
    const DAY = 86400;
    const YEAR = 31536000;

    const year = Math.floor(seconds / YEAR);
    seconds -= year * YEAR;

    const day = Math.floor(seconds / DAY);
    seconds -= day * DAY;

    const hour = Math.floor(seconds / HOUR);
    seconds -= hour * HOUR;

    const minute = Math.floor(seconds / MINUTE);
    seconds -= minute * MINUTE;

    const yearS = (year) => {
        if (year === 1) {
            return '1 year';
        }
        if (year > 1) {
            return `${year} years`;
        }
        return '';
    }
    const dayS = (day) => {
        if (day === 1) {
            return '1 day';
        }
        if (day > 1) {
            return `${day} days`;
        }
        return '';
    }
    const hourS = (hour) => {
        if (hour === 1) {
            return '1 hour';
        }
        if (hour > 1) {
            return `${hour} hours`;
        }
        return '';
    }
    const minuteS = (minute) => {
        if (minute === 1) {
            return '1 minute';
        }
        if (minute > 1) {
            return `${minute} minutes`;
        }
        return '';
    }
    const secondS = (second) => {
        if (second === 1) {
            return '1 second';
        }
        if (second > 1) {
            return `${second} seconds`;
        }
        return '';
    }

    const point = (after, before, last) => {

            if (before === 0 || after === 0) {
                return ''
            }
            if (after !== 0 && before !== 0 && before === last) {
                return ' and '
            }
            if (last === 0) {
                return ''
            }

        return ', '
    }


    return `${yearS(year)}${point(year, day + hour + minute + seconds, day)}${dayS(day)}${point(year + day, hour + minute + seconds, hour)}${hourS(hour)}${point(year + day + hour, minute + seconds, minute)}${minuteS(minute)}${point(year + day + hour + minute, seconds, seconds)}${secondS(seconds)}`;
}

console.log(formatDuration(31536001))