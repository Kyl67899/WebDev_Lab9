function init(){
    //add your javascrip between these two lines of code
    var btn = document.getElementById("entrybutton");

    // display text
    function displayText(){
        var text = document.getElementById("entryinput");
        document.getElementById("textoutput").innerHTML = text.value;
        alert("Daniel Krieglstein: " + text.value);
    }

    btn.addEventListener("click", displayText);
}

window.addEventListener('load', init);