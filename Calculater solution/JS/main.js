function calculateHalfNumber(){
    let value = document.getElementById('half-input').value;

    let half = value / 2;

    document.getElementById('solution').innerText = "Half of " + value + " = "+ half;

}

function calculateFractionNumbers(){
    let value = document.getElementById('percent1-input').value;

    value = 1/value;

    if(value === 0)
        value = 0;

    document.getElementById('solution').innerText = "Fraction = " + value;
}

function calculateWholeNumbers(){
    let value = document.getElementById('percent2-input').value;

    let realNumber = value;
    if(value < 0)
        value = Math.abs(value);

    document.getElementById('solution').innerText = "The whole number of "+ realNumber +" = " + value;
}

function calculateArea(){
    let radius = document.getElementById('area-input').value;

    const area = Math.PI * radius * radius;

    document.getElementById('solution').innerText = "Area = " + area;
}