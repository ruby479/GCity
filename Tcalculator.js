    var subBtn1 = document.getElementById('decrement1');  //returns the value attribute of the decrement button in variable subBtn1 
    var addBtn1 = document.getElementById('increment1');  //returns the value attribute of the increment button in variable addBtn1 
    var inputValue1 = document.getElementById('input1');  // taking the curret value present at the text input of Tip%
    
    addBtn1.addEventListener('click',()=> {               //  adding a event listener on add button of Tip% 
        inputValue1.value = parseInt(inputValue1.value) + 1;  //incrementing the value by 1 after every click on add button of Tip%
        calculateBill();                                        //calling the function computeBill().
    });
    
    subBtn1.addEventListener('click',()=> {                   //adding the event listener on Subtract button of Tip%
        if (inputValue1.value <= 0) {                            //tip% value can not be negative, if statement helps to retain the value 0.  
            inputValue1.value = 0;                              //initializing with the text of Tip% with 0
        }
        else {                                                  //else part
            inputValue1.value = parseInt(inputValue1.value) - 1;    //decrementing the value by 1 after every click on subtract button of Tip%
            calculateBill();                                          //calling the function computeBill().
        }
        
    });

    var subBtn2 = document.getElementById('decrement2');  //returns the value attribute of the decrement button in variable subBtn2 
    var addBtn2 = document.getElementById('increment2');  //returns the value attribute of the increment button in variable addBtn2
    var inputValue2 = document.getElementById('input2');  //taking the curret value present at the text input of Number of people
    
    addBtn2.addEventListener('click',()=> {               //adding a event listener on add button of number of people
        inputValue2.value = parseInt(inputValue2.value) + 1;    //incrementing the value by 1 after every click on add button of Number of people
        calculateBill();                                      //calling the function computeBill()
    });
    
    subBtn2.addEventListener('click',()=> {                 //adding the event listener on Subtract button of number of people
        if (inputValue2.value <= 1) {                             //persons cannot be negative, So if statement helps to retain the value 1 by default. 
            inputValue2.value = 1;                               //initializing the text of NumberperPerson with 1
        }                                                        
        else {                                                   //else part
            inputValue2.value = parseInt(inputValue2.value) - 1; //decrementing the value by 1 after every click on subtract button of Tip%
            calculateBill();                                       //calling the function computeBill().
        }                                                   
        
    });


    function calculateBill() {                                                              //starting of compute function
        var billAmount = parseFloat(document.getElementById('bill_amount').value);        //returns the value attribute of the text id of billAmount in variable Amount 
        try {                                                                              //try block for exception handling
            if (isNaN(billAmount)) throw " Bill Amount!!";                                 //if statement to throw the error
            var tip = parseFloat((billAmount * inputValue1.value) / 100);                 //calculate the tip amount
            billAmount += tip;                                                            //calculating the total amount after giving a tip
            var tipPerperson = parseFloat(tip / inputValue2.value);                       //calculating the amount of tip given by per person
            var billPerperson = parseFloat(billAmount / inputValue2.value);                  //calculating the bill given by per person.  
            document.getElementById('tipperperson').innerHTML = "$" + tipPerperson.toFixed(2);   //returning the tipperperson value by dynamically by using innerHTML
            document.getElementById('billperperson').innerHTML = "$" + billPerperson.toFixed(2); //returning the billperperson value by dynamically by using innerHTML
       }
       
       catch(err) {                                                                  //catch the error thrown by try block 
           alert("Please enter the correct" + err);                                  //alert box to read the error message
       }
    }
    
