function showMessage() {
    let x = document.getElementById("amount").value;
    let fromC = document.getElementById("fromC").value;
    let toC = document.getElementById("toC").value;
    let result;
    if (fromC == "vnd" && toC == "vnd") {
        result = x;
        document.getElementById("result").innerHTML = result;
        // document.write("result = " + result);
    }
    if (fromC == "vnd" && toC == "usd") {
        result = x * 23000;
        document.getElementById("result").innerHTML = result;
        // document.write("result = " + result);
    }
    if (fromC == "usd" && toC == "usd") {
        result = x;
        document.getElementById("result").innerHTML = result;
        // document.write("result = " + result);
    }
    if (fromC == "usd" && toC == "vnd") {
        result = x / 23000;
        document.getElementById("result").innerHTML = result;
        // document.write("result = " + result);
    }
}