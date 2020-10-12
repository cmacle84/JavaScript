let genericPrinter = function(stringToBePrinted,printingFunction){
    printingFunction(stringToBePrinted);
};

let printVertical = function(toBePrinted){
    for(i=0;i<toBePrinted.length;i++)
        console.log(toBePrinted.charAt(i));
};
genericPrinter("Test",printVertical);