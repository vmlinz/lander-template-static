function dtime_day(d) {
    var now = new Date;
    document.write(now.getDate());
}
function dtime_month(d) {
    var now = new Date;
    now.setDate(now.getDate() + d + 1);
    document.write(months_localized[lang_locale][now.getMonth()]);
}
function dtime_year(d) {
    var now = new Date;
    now.setDate(now.getDate() + d + 1);
    document.write(now.getFullYear());
}
