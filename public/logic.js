var choice = "default";
var input;
var grams;
var kilograms;
var ounces;
var pounds;
var weights = ["kgOutput", "gramsOutput", "lbOutput", "ozOutput"];

document.getElementById("userInput").addEventListener("input", function () {
    input = this.value;
    operateChoice();

}, false)

document.getElementById("selectValue").addEventListener("change", function () {

    choice = this.value;

    if (document.getElementById("userInput").value != "") {
        setCards();
        operateChoice();
    }

}, false);

function operateChoice() {

    if (choice !== "default") {

        if (choice === "KG") {
            document.getElementById("kgCard").style.display = "none";
            kilograms = input;
            grams = input * 1000;
            pounds = input / 0.453;
            ounces = input / 0.2831;

        } if (choice === "Pounds") {
            document.getElementById("lbCard").style.display = "none";
            pounds = input;
            kilograms = input * 0.453;
            ounces = input * 16;
            grams = kilograms / 1000;

        } if (choice === "Ounce") {

            document.getElementById("ozCard").style.display = "none";
            ounces = input;
            pounds = input / 16;
            kilograms = pounds * 0.453;
            grams = kilograms * 1000;

        } if (choice === "Grams") {
            document.getElementById("gramCard").style.display = "none";
            grams = input;
            kilograms = input / 1000;
            pounds = kilograms / 0.453;
            ounces = input / 28.31;

        }
        values = [kilograms, grams, pounds, ounces];
        setInnerHTML(values);
    }

}

function setInnerHTML(values) {
    for (var i = 0; i < weights.length; i++) {
        document.getElementById(weights[i]).innerHTML = values[i];
    }
}

function setCards() {
    document.getElementById("gramCard").style.display = "";
    document.getElementById("kgCard").style.display = "";
    document.getElementById("ozCard").style.display = "";
    document.getElementById("lbCard").style.display = "";
}
