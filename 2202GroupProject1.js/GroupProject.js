let pallet = function (offset, shape){

    let rectangle = function(height, width){
        let drawing = "";
        for(let i=0; i<height; i++){

            for(let j=0; j<offset; j++){
                drawing += " ";
            }
            
            for(let k=0; k<width; k++){
                drawing += "*";
            }

            drawing += "\n";

        }
        console.log(drawing);
    }

    let triangle = function(height){
        let drawing = "";
        for(let i=0; i<height; i++){

            for(let j=0; j<offset; j++){
                drawing += " ";
            }

            for(let k=0; k<(i+1); k++){
                drawing += "*";
            }

            drawing += "\n";
        }
        console.log(drawing);
    }

    if(shape === "rectangle"){
        return rectangle;
    }else if(shape === "triangle"){
        return triangle;
    }

}

let rectangleOffset10 = pallet(10, "rectangle");
rectangleOffset10(4,6);
rectangleOffset10(8,2);
let rectangleOffset20 = pallet(20, "rectangle");
rectangleOffset20(4,6);
rectangleOffset20(8,2);
let triangleOffset10 = pallet(10, "triangle");
triangleOffset10(10);
triangleOffset10(5);
let triangleOffset20 = pallet(20, "triangle");
triangleOffset20(10);
triangleOffset20(5);