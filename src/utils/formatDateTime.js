export const formatDateTime = (d) => {
    const dateTime = new Date(d);

    const year = dateTime.getFullYear();
    let month = dateTime.getMonth() + 1;
    let date = dateTime.getDate();

    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();

    month = month < 10? `0${month}` : month;
    date = date < 10? `0${date}` : date;
    seconds = seconds < 10? `0${seconds}` : seconds;

    return `${date}.${month}.${year} ${hours}:${minutes}:${seconds}`
}