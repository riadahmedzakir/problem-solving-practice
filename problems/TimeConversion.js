// Time Conversion
// https://www.hackerrank.com/challenges/one-month-preparation-kit-time-conversion/problem

function timeConversion(s) {
    let convertedTime;

    const timeSplits = s.split(':');
    let hours = parseInt(timeSplits[0]);
    let minutes = timeSplits[1];
    let seconds = timeSplits[2].replace('AM', '').replace('PM', '');

    if (timeSplits[2].indexOf('PM') > -1) {
        let convertedHour;

        if (hours == 12) {
            convertedHour = 12;
        } else if (hours + 12 == 24) {
            convertedHour = 0;
        } else {
            convertedHour = hours + 12;
        }

        convertedTime = convertedHour + ':' + minutes + ':' + seconds;

        if (convertedHour < 12) { convertedTime = '0' + convertedTime }
    } else {
        if (hours != 12) {
            convertedTime = '0' + hours + ':' + minutes + ':' + seconds;
        } else {
            convertedTime = '00' + ':' + minutes + ':' + seconds;
        }

    }

    return convertedTime;
}

function timeConversionMain() {
    document.writeln('Input : 07:05:45PM');
    document.writeln('<br>');
    document.writeln('Output : ');

    document.writeln(timeConversion('11:59:59PM'));

    document.writeln('<br>');
}