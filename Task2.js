let genericPrinter = function(stringToBePrinted,printingFunction){
    printingFunction(stringToBePrinted);
};

let printWithSpaces = function(toBePrinted){
    let result = "";
    for(i=0;i<toBePrinted.length;i++)
        result += toBePrinted.charAt(i) + " ";
    console.log(result);
};
genericPrinter("Test",printWithSpaces);