function getFinishedBuildingsNotif() {
    var sideNotificationContainer = document.querySelector('#side-notification-container');
    if (sideNotificationContainer && sideNotificationContainer.children.length > 0) {
        // Najde všechny notifikace
        const notifications = sideNotificationContainer.querySelectorAll('.side-notification');

        // Projde každou notifikaci
        for (const notification of notifications) {
            // Hledá text "Výstavba dokončena" v notifikaci
            const titleElement = notification.querySelector('strong');
            if (titleElement && titleElement.textContent === 'Výstavba dokončena') {
                return true;
            }
        }
    }
    return false;
}


function reloadScript() {
    if (getFinishedBuildingsNotif()) {
        window.location.reload();
    }
}

function checkSideNotifications() {
    setInterval(function() {
        console.log("Notifikace - refresh");
        reloadScript();
    }, 1000);
}

function fnc_init() {
    console.log("Inicializace");

}
