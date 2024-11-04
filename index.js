const textBox = document.getElementById("textBox"),
    toFarenheit = document.getElementById("toFarenheit"),
    toCelsius = document.getElementById("toCelsius"),
    result = document.getElementById("result");

let temperature;

function convert(){

    if(toFarenheit.checked) {
        temperature = Number(textBox.value);
        temperature = temperature * 9 / 5 + 32;
        result.textContent = temperature + "°F";
    }
    else if(toCelsius.checked){
        temperature = Number(textBox.value);
        temperature = (temperature - 32) * (9 / 5) ;
        result.textContent = temperature + "°C";
    }
    else{
        result.textContent = `Select a Unit`;
    }

}