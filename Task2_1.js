let genericPrinter = function(stringToBePrinted,printingFunction){
    printingFunction(stringToBePrinted);
};

let printInReverse = function(toBePrinted){
    let result = "";
    for(i=toBePrinted.length-1;i>=0;i--)
        result += toBePrinted.charAt(i);
    console.log(result);
};
genericPrinter("Test",printInReverse);