function getFinishedBuildingsNotif() {
    var sideNotificationContainer = document.querySelector('#side-notification-container');
    if (sideNotificationContainer && sideNotificationContainer.children.length > 0) {
        return true;
    }
    return false;
}

function checkSideNotifications() {
    setInterval(function() {
        if (getFinishedBuildingsNotif()) {
            console.log("Nalezeny dokončené budovy v notifikacích");
        }
    }, 1000);
}