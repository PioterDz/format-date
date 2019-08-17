const formatDate = (time) => {
    
    let sec;
    let min;
    let hours;

    condition = (num, d) => {
        if (num === 0) {
            return '';
        } else {
            return num + d;
        }
    }

    countSec = (t) => {
        const s = t % 60;
        return condition(s, 's')
    }

    countMin = (t) => {
        const m = (Math.floor(t / 60) % 60);
        if(t % 60 === 0) {
            return condition(m, 'm');
        } else {
            return condition(m, 'm ');
        }
    }

    countHours = (t) => {
        const h = Math.floor(t / 3600);
        if(t % 3600 === 0) {
            return condition(h, 'h');
        } else {
            return condition(h, 'h ');
        }
    }

    if(!time || time <= 0) { 
        sec = '0s';
        min = '';
        hours = '';
    } else if(time < 60) {
        sec = time + 's';
        min = '';
        hours = '';
    } else if(time < 3600) {
        sec = countSec(time);
        min = countMin(time);
        hours = '';
    } else {
        sec = countSec(time);
        min = countMin(time);
        hours = countHours(time);
    }
    
    return hours + min + sec;
}
  
module.exports = formatDate;