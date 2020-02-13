function changeCSS(cssFile) {

    //grabs the css page to replace with the user's selection
    var startingStyles = document.getElementsByTagName("link")[0];

    var replacementStyle = document.createElement("link");
    replacementStyle.setAttribute("rel", "stylesheet");
    replacementStyle.setAttribute("href", cssFile);

    document.getElementsByTagName("head")[0].replaceChild(replacementStyle, startingStyles);
}