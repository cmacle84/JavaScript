let calenderName = function(monthOrDay){
    let monthName = function(number){
        let month = "";
        switch(number){
            case(1):
            month = "Jan";
            break;
            case (2):
            month = "Feb";
            break;
            case(3):
            month = "March"
            break;
            case(4):
            month = "Apr";
            break;
            case(12):
            month = "Dec";
            break;
            default:
                month = "Unknown";
        }
        return month + "_" + monthOrDay;
    };
    let dayName = function(number){
        let day = "";
        switch(number){
            case(1):
            day = "Mon";
            break;
            case(2):
            day = "Tues"
            break;
            case(7):
            day = "Sun";
            break;
            default:
                day = "Unknown";
        }
        return day + "_" + monthOrDay;
    };
    if(monthOrDay == "m")
        return monthName;
    else
        return dayName;
};
let findNameOfDay = calenderName("d");
console.log(findNameOfDay(1));