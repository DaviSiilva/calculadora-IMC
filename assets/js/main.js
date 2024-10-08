const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    const bmi = (weight / height ** 2).toFixed(2);

    const value = document.getElementById("value");
    let description = "";
    
    value.classList.add("attention");

    document.getElementById("infos").classList.remove("hidden");

    if (bmi < 18.5) {
        description = "Cuidado!, Você está abaixo ddo peso";
     } else if (bmi >= 18.5 && bmi <= 24.99) {
        description = "Você está no peso ideal";
        value.classList.remove("attention");
        value.classList.add("normal");
     } else if (bmi >= 25 && bmi <= 29.99) {
        description = "Cuidado!, Você está acima do peso";
     } else if (bmi >= 30 && bmi <= 34.99) {
        description = "Cuidado!, Você está em obesidade grau I";
     } else if (bmi >= 35 && bmi <= 40) {
        description = "Cuidado!, Você está em obesidade grau II"
     } else {
        description = "Cuidado!, Você está em obesidade grau III";
     }
    
     value.textContent = bmi.replace("." , ",")
     document.getElementById("description").textContent = description;
});


