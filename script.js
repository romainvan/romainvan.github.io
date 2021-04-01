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

/**
 * Fonction pour afficher le mois précédent dans la partie actualités 
 */
function actuDate() {
    var today = new Date();
    var lastMonth = new Date();
    lastMonth.setDate(today.getDate() - 30 );
    const month = lastMonth.toLocaleString('default', { month: 'long' });
    var displaymonth = ""
    if(month==="avril" || month==="août" || month==="octobre"){
        displaymonth="d'"+month
    }
    else{
        displaymonth="de "+month
    }
    return displaymonth;
}

/**
 * Fonction pour renvoyer le mois suivant dans la partie actualités
 */

 function nextRMPF(){
    var date = new Date();
    var nextMonth = new Date();
    nextMonth.setDate(date.getDate() + 30 );
    var options = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
    var array = nextMonth.toLocaleDateString("fr-FR", options).split(" ")
    if(array[0]==="samedi"){
        nextMonth.setDate(nextMonth.getDate()+2)
    }
    else if (array[0]==="dimanche"){
        nextMonth.setDate(nextMonth.getDate()+1)
    }
    return nextMonth.toLocaleDateString("fr-FR", options)
 }

