// BÀI 1 :TÌM GIÁ TRỊ NHỎ NHẤT
var valueN = 0;
var valueTotal = 0;

while (valueTotal < 10000) {

    valueN++;
    valueTotal = valueTotal + valueN;
}
var valueMin = document.getElementById('valueMin');
valueMin.innerHTML = "Số nguyên dương nhỏ nhất: " + valueN;







// BÀI 2 :TÍNH TỔNG
document.getElementById('results').addEventListener('click', total);

function total() {

    var addX = document.getElementById('addX').value;
    var addN = document.getElementById('addN').value;
    var total = 0;
    var runN = 0;

    while (runN < addN) {
        runN++;
        var totalXN = Math.pow(addX, runN)
        total += +totalXN;
        console.log(totalXN)
    }
    var resultFinsh = document.getElementById('resultFinsh');
    resultFinsh.style.display = "block";
    resultFinsh.innerHTML = "Tổng là :" + total;

}







// BÀI 3 :TÍNH GIAI THỪA
document.getElementById('resultNumber').addEventListener('click', factorial);

function factorial() {

    var factorial = document.getElementById('factorial').value;
    var printNumber = document.getElementById('printNumber');
    var totalFactorial = "Nhập giá trị nguyên dương";

    if (factorial.length !== 0 && +factorial > 0) {

        totalFactorial = 1;
        var runFactorial = 0;
        while (runFactorial < factorial) {
            runFactorial++;
            totalFactorial = totalFactorial * runFactorial;
            console.log(runFactorial);
            console.log(totalFactorial);
        }
    }
    printNumber.style.display = "block";
    printNumber.innerHTML = "Giai thừa: " + totalFactorial;
}






// BÀI 4 :TẠO THẻ DIV
document.getElementById('createDivBTN').addEventListener('click', create);

function create() {
    var createDiv = document.getElementById('createDiv');
    var divBTN = document.getElementById('divBTN').value;
    var number = 10;
    var classify = addDiv(divBTN, number);

    for (var div = 1; div <= classify; div++) {
        if (div % 2 === 0) {


            var divCreateDivEven = document.createElement('div')
            var pTextEven = document.createElement('p')
            var numberEven = "số chẵn: "
            createDiv.appendChild(divCreateDivEven);
            divCreateDivEven.appendChild(pTextEven);

            divCreateDivEven.classList.add('div__even');
            pTextEven.innerHTML = numberEven + div;

        }
        if (div % 2 !== 0) {
            var divCreateDivOdd = document.createElement('div')
            var pTextOdd = document.createElement('p')
            var numberOdd = "số lẻ: "

            divCreateDivOdd.classList.add('div__odd');
            createDiv.appendChild(divCreateDivOdd);
            divCreateDivOdd.appendChild(pTextOdd);
            pTextOdd.innerHTML = numberOdd + div;

        }
    }


}

//  Phân loại giá trị có nhập vào ô button hay không
function addDiv(divBTN, number) {

    if (divBTN.length == 0) {
        divBTN = number;
    }
    return divBTN;
}