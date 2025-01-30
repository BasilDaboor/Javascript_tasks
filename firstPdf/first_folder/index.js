function updateInputs() {

    let calculation = document.getElementById("calculationType").value;
    let inputFields = document.getElementById("inputFields");
    inputFields.innerHTML = ""; 

    let inputs = {
        cashFlow: ["Cash Flow", "Current Liabilities"],
        netIncome: ["Revenues", "Expenses"],
        totalAssets: ["Liabilities", "Equity"],
        netIncomeMargin: ["Profit", "Sales"],
        average: ["Number 1", "Number 2", "Number 3"],
        discount: ["Price", "Discount (%)"],
        ageLimit: ["Age"],
        exponential: ["Base Number", "Exponent"],
        remainder: ["Number 1", "Number 2"]
    };

    inputs[calculation].forEach((placeholder, index) => {
        let input = document.createElement("input");
        input.type = "number";
        input.placeholder = placeholder;
        input.id = `input${index}`;
        inputFields.appendChild(input);
    });
}

function calculate() {
    let calculation = document.getElementById("calculationType").value;
    let output = document.getElementById("output");
    

    let values = [];
    document.querySelectorAll("#inputFields input").forEach(input => {
        values.push(parseFloat(input.value) || 0);
    });

    let result;
    switch (calculation) {
        case "cashFlow":
            result = values[0] / values[1];
            break;
        case "netIncome":
            result = values[0] - values[1];
            break;
        case "totalAssets":
            result = values[0] + values[1];
            break;
        case "netIncomeMargin":
            result = values[0] * values[1];
            break;
        case "average":
            result = values.reduce((a, b) => a + b, 0) / values.length;
            break;
        case "discount":
            result = values[0] - (values[0] * values[1] / 100);
            break;
        case "ageLimit":
            result = values[0] > 18 && values[0] < 30;
            break;
        case "exponential":
            result = Math.pow(values[0], values[1]);
            break;
        case "remainder":
            result = values[0] % values[1];
            break;
    }

    output.textContent = "Result: " + result;
}






function updateInputs2() {
    let expression = document.getElementById("expressionsOutput").value;
    console.log("Selected Expression:", expression);

}

function log(){

    let expression = document.getElementById("expressionsOutput").value;

    if (expression) {
        try {
            let result = eval(expression);  // Evaluate the expression safely
            console.log("Expression:", expression);
            console.log("Output:", result);
            document.getElementById("output2").textContent = "Result: " + result;
        } catch (error) {
            console.log("Error:", error.message);
            document.getElementById("output2").textContent = "Error: Invalid Expression";
        }
    } else {
        console.log("No expression selected");
    }


}








function updateInputs3() {
    let manipulateType = document.getElementById("StringManipulation").value;
    console.log("Selected Expression:", manipulateType);

}

function stringManipulate() {
    let text = "Welcome to Orange"
    let manipulateType = document.getElementById("StringManipulation").value;

    let output3 = document.getElementById("output3");


    switch (manipulateType) {
        case "WELCOME_TO_ORANGE":
            result = text.toUpperCase();
            console.log(result);
            
            break;
        case "TO":
                result = text.slice(8,10).toUpperCase();
                console.log(result); 
            break;
        case "Hello_from_Orange":
                result ="Hello from "+text.slice(11);
                console.log(result); 
            break;
        case "welcome_to_orange":
                result =text.toLowerCase()
                console.log(result); 
            break;
        case "17":
                result =text.length;
                console.log("length: "+result); 
            break;
        case "Welcome_to_“Orange”":
                result =text.replace("Orange", `“Orange”`);
                console.log(result); 
            break;
        case "Welcome_to_Orange_Jordan":
                result =text+" Jordan"
                console.log(result); 
            break;
}
output3.textContent =  result;
}







function updateInputs4() {
    let manipulateType = document.getElementById("arraysManipulation").value;
    console.log("Selected Expression:", manipulateType);

}

function arraysManipulation() {
    let array=["Coding", "Academy", "By", "Orange"];
    let manipulateType = document.getElementById("arraysManipulation").value;

    let output4 = document.getElementById("output4");


    switch (manipulateType) {
        case "push()":
            array.push("Jordan")
            console.log("add using push(): "+array);
            
            break;
        case "splice()":
                array.splice(-2);
                console.log("Splice the array: "+array); 
            break;
        case "unshift()":
            array.unshift("Welcome","to")
                console.log("add in the beginning using unshift(): " );
                console.log(array);
                 
            break;
        case "shift()":
            array.shift()
            console.log("remove from the beginning using shift(): " );
            console.log(array);
            break;
        case "join()":
            array=array.join(" ");
            console.log(array); 
            break;
        case "same":
                console.log(array); 
            break;
        case "slice()":
            console.log([...array.slice(0, 1),...array.slice(-1)]); 
               
            break;
}
output4.textContent =  array;
}



updateInputs();

