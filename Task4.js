let powerOf = function(power){
    let raiseToPower = function (value){
        let result = 1;
        for(i=0;i<power;i++)
            result *= value;
            return result;
    };
    return raiseToPower;
};
let powerOfTwo = powerOf(2);
let powerOfThree = powerOf(3);
let powerOfFour = powerOf(4);

console.log(powerOfFour(5));