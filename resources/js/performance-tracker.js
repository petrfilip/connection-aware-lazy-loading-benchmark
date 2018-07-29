window.addEventListener("load", function () {
    var perfEntries = performance.getEntriesByType("navigation");
    var perf = perfEntries[0];

    var networkDelay = perf.responseEnd;
    var domContentLoaded = perf.domContentLoadedEventStart - networkDelay;
    var domComplete = perf.domComplete - networkDelay;
    var ect = getEct();
    var context = window.location.pathname;


    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    xmlhttp.open("POST", "../collector-api.php");
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (window.location.href.includes("stats")) {
                location.reload();
            }
        }
    };
    xmlhttp.send(new Date().getTime() + "; " + context + "; " + ect + "; " + domContentLoaded + "; " + domComplete);

    function getEct() {
        var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        return connection.effectiveType;
    }
});


