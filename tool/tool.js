function myFunction() {
    var yen = document.getElementById("yen");
    var discount = document.getElementById("discount");
    if (yen.value === "") {
        alert("価格が入力されていません");
        return;
    }
    if (isNaN(yen.value)) {
        alert("価格が数値ではありません");
        return;
    }
    if (discount.value === "") {
        alert("割引き率が入力されていません");
        return;
    }
    if (isNaN(discount.value)) {
        alert("割引率が数値ではありません");
        return;
    }
    let discount1 =  (discount.value);
    let discount2 = (discount1) / 100;
    let discount3 = (yen.value);
    let discount4 = (discount2) * (discount3);
    let discount5 = (discount3) - (discount4);
    var output = "=" + (discount5) + "円";
    var myOutput = document.getElementById("myOutput");
    myOutput.innerHTML = output;
}