function showMessage() {
    let x = document.getElementById("amount");
    let fromC = document.getElementById("fromC");
    let toC = document.getElementById("toC");
    let result;
    if (fromC.value == "vnd" && toC.value == "vnd") {
        result = x.value;
        document.getElementById("re").innerHTML = result;
        // document.write("result = " + result);
    }
    if (fromC.value == "vnd" && toC.value == "usd") {
        result = x.value * 23000;
        document.getElementById("re").innerHTML = result;
        // document.write("result = " + result);
    }
    if (fromC.value == "usd" && toC.value == "usd") {
        result = x.value;
        document.getElementById("re").innerHTML = result;
        // document.write("result = " + result);
    }
    if (fromC.value == "usd" && toC.value == "vnd") {
        result = x.value / 23000;
        document.getElementById("re").innerHTML = result;
        // document.write("result = " + result);
    }
}