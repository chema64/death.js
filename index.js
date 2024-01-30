function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    
        var yearsToDeath = 90;
        var days = 0;
        var weeks = 0;
        var months = 0;
        var yearsLeft = 0;
        
        yearsLeft = yearsToDeath - age;
        console.log(yearsLeft);
        days = yearsLeft * 365;
        weeks = yearsLeft * 52;
        months = yearsLeft * 12;
        
        
        console.log("You hava " + days + " days, " + weeks + " weeks and " +  months + " months left");
        return "You hava " + days + " days, " + weeks + " weeks and " +  months + " months left";
    
    
    
    
    
    
/*************Don't change the code below**********/
}

$("button").click(function() {
    $("#title").text(lifeInWeeks($("input").val()));
})