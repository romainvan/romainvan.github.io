function dateFile() {
    var date = new Date();
    var dateStr =
    ("00" + date.getDate()).slice(-2) + "-" +
    ("00" + (date.getMonth() + 1)).slice(-2) + "-" +
    date.getFullYear() +"_"+
    ("00" + date.getHours()).slice(-2) + "h" +
    ("00" + date.getMinutes()).slice(-2);
    return dateStr;
}

function titleFile() {
    var date = new Date();
    var dateStr =
    ("00" + date.getDate()).slice(-2) + "/" +
    ("00" + (date.getMonth() + 1)).slice(-2) + "/" +
    date.getFullYear() +" à "+
    ("00" + date.getHours()).slice(-2) + "h" +
    ("00" + date.getMinutes()).slice(-2)
    return dateStr;
}

