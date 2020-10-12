let findList = function(threshold, ...lists)
{


    for(let l of lists)
    {
        let pass = false;

        for(let e of l)
        {
            if(e< threshold){

                pass = true;
                break;
            }
        }

        if(!pass)
            return l;
    }
};

let list1 = [2,4,5,7];
let list2 = [15,20,46];
let list3 = [34,67,89];
let winner = findList(20,list1,list2,list3);

if(winner !== undefined){
    console.log(winner);

    console.log(...winner);
}