function calc(){
    var a = document.getElementById("fir").value;
    var b = document.getElementById("sec").value;
    var d = (Math.round(Math.random()*100));
    var combine = (a) + " and " + (b) + " both has " + (d) + "%"
    document.getElementById("opps").innerHTML = combine
    if(d <= 49){
        document.getElementById("opps1").innerHTML = "opps!!!try another spouse"
    }
    if(d >= 50){
        document.getElementById('opps1').innerHTML = "congratulation latest couples in town"
    }
}   