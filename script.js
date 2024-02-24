var date =document.createElement('input');
date.setAttribute("type","date");
date.id="dob"

var button=document.createElement("button");
button.setAttribute("type","button");
button.className="btn btn-primary";
button.innerHTML="Click me";
button.addEventListener("click",date_data);

var userDataDisplay = document.createElement("div");
userDataDisplay.id = "userDataDisplay";

document.body.append(date,button,userDataDisplay);

function date_data(){
    var input = document.getElementById("dob").value;
    var input_date= new Date(input);
    var current_date = new Date();
    console.log(current_date);

    var millisecdiff = parseInt(current_date.getTime()-input_date.getTime());
    console.log(millisecdiff);

    var seconddiff = Math.floor(millisecdiff/1000);
    console.log(seconddiff);

    var mintesdiff =Math.floor(seconddiff/60);
    console.log(mintesdiff);

    var hourdiff =Math.floor(mintesdiff/60);
    console.log(hourdiff);

    var daydiff =Math.floor(hourdiff/24);
    console.log(daydiff);

    var yeardiff =current_date.getFullYear() - input_date.getFullYear();
    console.log(yeardiff);

    var monthdiff = (yeardiff*12)+(current_date.getMonth() - input_date.getMonth());
    console.log(monthdiff);

    var userData = {
        "Years": yeardiff, "Months": monthdiff, "Days":daydiff, 
        "Hours": hourdiff, "Minutes": mintesdiff, "Seconds":seconddiff,
        "Mille Seconds": millisecdiff

    }

    userDataDisplay.innerHTML = ""; // Clear previous content
    for (var key in userData) {
        var userDataText = document.createTextNode(key + ": " + userData[key]);
        userDataDisplay.appendChild(userDataText);
        userDataDisplay.appendChild(document.createElement("br")); // Add line break
    }


}