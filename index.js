const billAmount = document.getElementById('bill-amt')
const cashAmount = document.getElementById('cash-amt')
const resultBtn = document.getElementById('result');
const td= document.querySelectorAll('.no-of-notes')
console.log(td);
const error= document.querySelector('.error')

const notes =[2000,1000,500,100,20,10,5,1];


let change,cash;
resultBtn.addEventListener("click",()=>{
       if(Number(billAmount.value)>0 && Number(cashAmount.value)>0){
           
            if(Number(cashAmount.value)>=Number(billAmount.value)){
                error.innerText=''
                error.classList.remove('red')
                console.log("yes its")
                cash = cashAmount.value - billAmount.value;
                console.log(cash);
                ChangeCalculate(cash)
               
            }else{
                err("Do you wanna wash the dishesh ?");
            }
           
       }else{
           err('Amount must be greater than 0 ')
       }

    
})

function err(errmsg){
    error.innerText=errmsg;
    error.classList.add('red')

}

function ChangeCalculate(cash){
    for(let i=0; i<notes.length;i++){

    change = Math.trunc(cash/notes[i])
    console.log(change)
    cash = cash%notes[i]
    console.log(cash)
    td[i].innerHTML=change
}
}