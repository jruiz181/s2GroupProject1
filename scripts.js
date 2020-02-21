/*
Team Info:

Jerry - Content Designer
Zac I. - Programmer, Web Developer
Aspen - Web Designer
Abe - Project Manager
*/

// var activeStyles = "styles-1.css";
// replaceCSS(activeStyles);

//Changes the styles on the page to match the styles the user selected
function replaceCSS(newStyles) {

    //grabs the css page to replace with the user's selection
    var startingStyles = document.getElementsByTagName("link")[0];

    //Creates the element that will be injected to the page
    var replacementStyle = document.createElement("link");
    //Sets the rel attribute to stylesheet in the injected element
    replacementStyle.setAttribute("rel", "stylesheet");
    //adds the href attribute to the created element with the CSS page specified in the button
    replacementStyle.setAttribute("href", newStyles);
    activeStyles = newStyles;

    //this is where the new stylesheet replaces the old/original one
    document.getElementsByTagName("head")[0].replaceChild(replacementStyle, startingStyles);
}