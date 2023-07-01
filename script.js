var buttons = document.getElementsByClassName("row-cells");
var display = document.getElementById("display");
// var operand1 = 0;
// var operand2 = null;
// var operator = null; 

var result = "";
display.textContent = result;

for(let i of buttons){
    i.addEventListener("click", function(){
        var value = this.getAttribute("data-value");
 
        // if(value=="+"){
        //     operand1 = parseFloat(display.textContent);
        //     operator = "+";
        //     display.innerText = "";
        //     result+= value;
        // }
        // else if(value=="-"){
        //     operand1 = parseFloat(display.textContent);
        //     console.log(operand1);
        //     operator = "-";
        //     display.innerText = "";
        //     result+= value;
        // }
        // else if(value=="/"){
        //     operator = "/";
        //     operand1 = parseFloat(display.textContent);
        //     display.innerText = "";
        //     result+= value;
        // }
        // else if(value=="*"){
        //     operator = "*";
        //     operand1 = parseFloat(display.textContent);
        //     display.innerText = "";
        //     result+= value;
        // }
        // else if(value=="%"){
        //     operator = "%";
        //     operand1 = parseFloat(display.textContent);
        //     display.innerText = "";
        //     result+= value;
        // }


        if(value=="ac"){
            result = "";
            display.textContent = result;
        }
        else if(value=="x"){
            let str = display.innerText;
            let arr = str.split(''); 
            arr.pop();
            str = arr.join(''); 
            if(str==""){
                str=0;
            }
            display.innerText = str;
            result = str;
        }

        else if(value=="="){
            try{
                result=eval(result);
                display.innerText = result;
            }
            catch(error){
                display.innerText = "illegal exp.";
            }
        }
        else{
            display.innerText += value;
            result+= value;
        }
    });
}