function formatTime(minutes) {
    if (minutes > 0) {
        var days = 0;
        var hours = 0;
        var min = 0;
        if (minutes > 0 && minutes < 60) {
            min = minutes;
        } else if (minutes >= 60 && minutes < 1440) {
            hours = (minutes - minutes % 60) / 60;
            min = minutes % 60;
        } else {
            days = (minutes - minutes % 1440) / 1440;
            hours = ((minutes - (minutes - minutes % 1440)) - (minutes - (minutes - minutes % 1440)) % 60) / 60;
            min = minutes % 60;
        }
        return days + ' day(s) ' + hours + ' hour(s) ' + min + ' minute(s)';
    }
}
    formatTime(120);
    formatTime(59);
    formatTime(3601);