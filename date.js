var today1 = new Date();

var year = today1.getFullYear();
var month = ('0' + (today1.getMonth() + 1)).slice(-2);
var day = ('0' + today1.getDate()).slice(-2);

var dateString = year + '-' + month  + '-' + day;


var today2 = new Date();   

var hours = ('0' + today2.getHours()).slice(-2); 
var minutes = ('0' + today2.getMinutes()).slice(-2);
var seconds = ('0' + today2.getSeconds()).slice(-2); 

var timeString = hours + ':' + minutes  + ':' + seconds;


function AmPm(){
    if(hours>=12){
        document.write("PM");
    }
    else {
        document.write("AM")
    }
}

