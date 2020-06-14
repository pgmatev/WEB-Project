function myFunction() {
    var x = document.getElementById("headerRight");
    console.log("Hello");
    if (x.className === "header-right") {
        x.className += "-responsive";
    } else {
        x.className = "header-right";
    }
    var y = document.getElementById("header");
    console.log("Hello");
    if (y.className === "header") {
        y.className += "-responsive";
    } else {
        y.className = "header";
    }
    // var z = document.getElementById("headerLeft");
    // console.log("Hello");
    // if (z.className === "header-left") {
    //     z.className += "-responsive";
    // } else {
    //     z.className = "header-left";
    // }
}