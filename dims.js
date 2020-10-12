let point = {x:5, y:6};
console.log(point);
point.z = 5;
console.log(point);
delete point.z;
console.log(point);

let allPoints = [{x:6,y:7} , {x:15,y:20} , {x:6,y:4}];
    for(let i =0;i<allPoints.length;i++)
    {
        let p = allPoints[i];
        console.log(p);
    }

function addDim(points)
{
    for(let i =0;i<points.length;i++)
    {
        let p = points[i];
        p.z = 0;
    }
}
function removeDim(points)
{
    for(let i =0;i<points.length; i++)
    {
        let p = points[i];
        delete p.z;
    }
}
addDim(allPoints)
{
for(let p of allPoints)
{
    console.log(p);
}
}
console.log("======================");
printCoord(allPoints[0]);

removeDim(allPoints)
for(let p of allPoints)
{
    console.log(p);
}

function printCoord(point)
{
    console.log("Coordinates:");
    for(let c in point)
    {
        console.log(c +"---"+ point[c]);
    }
}

printCoord(allPoints[0]);
for(let p of allPoints)
{
    console.log(p);
}