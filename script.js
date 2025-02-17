function convertTemp(){
    // var celsius = document.getElementById("c").value;
    // var fahrenheit = document.getElementById("f").value;
    // alert(fahrenheit)
    // if (celsius == ""){ //if farenheight is input
    //     document.getElementById('c').value = (fahrenheit-32) * 5/9
    // }
    var ce = document.getElementById("c").value;
    var fa = (ce * 9/5) + 32
    document.getElementById("f").value = fa
}

function convertWeight(){
    var kg = document.getElementById("kilo").value;
    var p = kg * 2.2
    document.getElementById("pounds").value = p
}
function convertDistance(){
    //To convert KMs to Miles
    // KM * 0.62137
    var km = document.getElementById("km").value;
    var m = km * 0.62137
    document.getElementById("miles").value = m
}