function myFunction() {
    var x = document.getElementById("headerRight");
    console.log("Hello");
    if (x.className === "header-right") {
        x.className += "responsive";
    } else {
        x.className = "header-right";
    }
}