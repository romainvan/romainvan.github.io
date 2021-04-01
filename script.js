/**
 * Fonction pour afficher la date dans le nom du fichier exemple : Export_Sessions_31-03-2021_15h52.xlsx
 */
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

/**
 * Fonction pour afficher la date dans le titre du fichier PDF ou xlsx exemple : Export sessions du 31/03/2021 à 15h52
 */
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
