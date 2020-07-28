const getTotal = (event) => {
    event.preventDefault();  //to stop the form submitting	

    var total = 0
    var entered_number = document.getElementById('number').value

    if (entered_number == !null ) 
        entered_number = entered_number
    else if (entered_number == null)
        alert('Enter a number...')

    console.log('Entered number: '+ entered_number)
    
    function divisibility3_5(number) {        
        for (i=0; i < entered_number; i++){
            if(i % 3 === 0 || i % 5 === 0){
            total +=i
            }
        }
        return total
    }
    var total = divisibility3_5(entered_number)
    
    console.log('Total: '+ total)
    
    let well = document.querySelector('#msg #well');
    alert('Total of the multiples of 3 and 5 given '+ entered_number +': ' + total)

    // Output 
    return well.innerHTML = total
}

//solution(entered_number);
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit').addEventListener('click', getTotal);
})
