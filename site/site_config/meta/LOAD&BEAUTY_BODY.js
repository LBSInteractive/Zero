/**
 * Link CSS Loading
 */
var LOAD = document.createElement("link");
LOAD.rel = "shortcut icon";
LOAD.type = "image/png";
LOAD.href = "/site/site_config/media/IMG/config.png";
document.head.appendChild(LOAD);


/**
 * Listener de carga (Cuando la pagina completa su carga DOM)
 */
document.addEventListener("DOMContentLoaded", function (event) {

    /**
     * load Screen
     */
    var LOADchild = document.createElement("img");
    LOADchild.id = "loading-image";
    LOADchild.src = "/site/site_config/media/IMG/load.gif";
    LOADchild.alt = "Loading...";
    var LOADbody = document.createElement("div");
    LOADbody.id = "loading";
    LOADbody.append(LOADchild);
    document.body.append(LOADbody);

    setTimeout(function () {
        loadScreen = document.getElementById("loading");
        parent = loadScreen ? loadScreen.parentNode : false;
        if (parent)
            parent.removeChild(loadScreen);
    }, 1000);

});

/**
 * Link CSS Loading
 */
var LOAD = document.createElement("link");
LOAD.rel = "stylesheet";
LOAD.type = "text/css";
LOAD.href = "/site/site_config/media/CSS/loading.css";
document.head.appendChild(LOAD);


/**
 * Link CSS Builder style
 */
var LOAD = document.createElement("link");
LOAD.rel = "stylesheet";
LOAD.type = "text/css";
LOAD.href = "/site/site_config/media/CSS/builder.css";
document.head.appendChild(LOAD);
