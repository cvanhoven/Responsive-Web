function show(button){
    if (button == 'section1'){
        document.getElementById(button).style.display = "block";
        document.getElementById('section2').style.display = "none";
        document.getElementById('section3').style.display = "none";
        document.getElementById('section4').style.display = "none";
    }
    else if (button == 'section2') {
        document.getElementById(button).style.display = "block";
        document.getElementById('section1').style.display = "none";
        document.getElementById('section3').style.display = "none";
        document.getElementById('section4').style.display = "none";
    }
    else if (button == 'section3') {
        document.getElementById(button).style.display = "block";
        document.getElementById('section1').style.display = "none";
        document.getElementById('section2').style.display = "none";
        document.getElementById('section4').style.display = "none";
    }
    else if (button == 'section4') {
        document.getElementById(button).style.display = "block";
        document.getElementById('section1').style.display = "none";
        document.getElementById('section2').style.display = "none";
        document.getElementById('section3').style.display = "none";
    }
    else {
        document.getElementById(button).style.display = "block";
    }
}

function changeStyle() {
    if (document.getElementById("style").getAttribute("href") == "main.css") {
        document.getElementById("style").setAttribute("href", "override.css");
        document.getElementById("img").setAttribute("src", "Profile1.JPG")
    }
    else {
        document.getElementById("style").setAttribute("href", "main.css");
        document.getElementById("img").setAttribute("src", "Profile.jpg")
    }
}