const convertBtn = document.getElementById("convert-btn");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const result3 = document.getElementById("result3");

convertBtn.addEventListener("click", function(){
    const inputEl = document.getElementById("input-el").value;
    result1.textContent = " ";
    result2.textContent = " ";
    result3 .textContent = " ";

    const meter = 3.281;
    const liter = 0.264;
    const kilo = 2.204;

    // Another way but longer

    // const meterX = inputEl * meter;
    // const literX = inputEl * liter;
    // const kiloX = inputEl * kilo;

    // const meterD = inputEl / meter;
    // const literD = inputEl / liter; 
    // const kiloD = inputEl / kilo;

    // Fastest Way
    result1.textContent += `${inputEl} meters = ${(inputEl * meter) .toFixed(3)} feet | ${inputEl} feet = ${(inputEl / meter) .toFixed(3)} meters`;
    result2.textContent += `${inputEl} meters = ${(inputEl * liter) .toFixed(3)} feet | ${inputEl} feet = ${(inputEl / liter) .toFixed(3)} meters`;
    result3.textContent += `${inputEl} meters = ${(inputEl * kilo) .toFixed(3)} feet  | ${inputEl} feet = ${(inputEl / kilo) .toFixed(3)} meters`;
})