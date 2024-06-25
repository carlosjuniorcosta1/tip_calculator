
document.addEventListener('DOMContentLoaded', function(){
    let yourBill = document.getElementById('yourBill')
    let totalBill = document.getElementById('totalBill') 
    let valueTipPerc = document.getElementById('valueTipPerc') 
    let tipRange = document.getElementById('tipRange')
    let finalTip = document.getElementById('finalTip') 
    let splitRange = document.getElementById('splitRange')
    let splitWith = document.getElementById('splitWith')  
    let billForEach = document.getElementById('billForEach')  

    yourBill.addEventListener('input', updateValues)
    tipRange.addEventListener('input', updateValues)
    splitRange.addEventListener('input', updateValues)

    function updateValues(){
        yourBillValue = parseFloat(yourBill.value)
        tipRangeValue = parseFloat(tipRange.value)
        splitRangeValue = parseFloat(splitRange.value)

        //some math
        tipMoney = yourBillValue * tipRangeValue/100
        totalBillValue = yourBillValue + tipMoney

        totalBill.innerHTML = `R$ ` + totalBillValue
        valueTipPerc.innerHTML = tipRangeValue + `%`
        finalTip.innerHTML = `Gorjeta de R$ ` + tipMoney
        splitWith.innerHTML = splitRangeValue
        billForEachValue = totalBillValue / splitRangeValue
        billForEach.innerHTML = billForEachValue.toFixed(2)




    }



    


    

    
})