let parseOneObject = function(jasonFormattedString)
{
    let resultRealObject = {};

    console.log(resultRealObject);

    if(jasonFormattedString.charAt(0) != "{" && jasonFormattedString.charAt(jasonFormattedString.length-1) != "}") {
        console.log("Object is not well formatted");
        return null;
    }

    let allProperties = jasonFormattedString.slice(1,jasonFormattedString.length-1);
    let splittedProperties = allProperties.split(",");
    
    for(let p of splittedProperties)
    console.log(p);

    for(let p of splittedProperties)
    {



        let splitIndex = p.indexOf(":");
        let propertyName = (p.slice(0,splitIndex)).trim();
        let propertyValue = (p.slice(splitIndex+1,p.length)).trim();

        console.log("propertyName = " + propertyName + "-- propertyValue= "+ propertyValue);

        resultRealObject[propertyName]=propertyValue;

        if(propertyName in resultRealObject)
            console.log(p + " from inside the object ==> " + resultRealObject[propertyName]);
    }

    return resultRealObject;

};

let point1 = parseOneObject("{ x:5,y:6}");
console.log("properties of the object point1 => x =" + point1.x + " => y =" + point1.y);