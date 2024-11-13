function getFinishedBuildingsNotif() {
    var sideNotificationContainer = document.querySelector('#side-notification-container');
    if (sideNotificationContainer && sideNotificationContainer.children.length > 0) {
        console.log("Nalezeny dokončené budovy v notifikacích");
        return true;
    }
    console.log("Nenalezeny dokončené budovy v notifikacích");
    return false;
}

function checkSideNotifications() {
    setInterval(function() {
        if (getFinishedBuildingsNotif()) {
            console.log("Nalezeny dokončené budovy v notifikacích");
        }
    }, 1000);

}

function init() {
    console.log("Inicializace");

}
