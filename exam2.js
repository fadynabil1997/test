


var text = document.getElementById("text");
var play = document.getElementById("butt1");
var stop = document.getElementById("butt2");
var ntega = document.getElementById("ntega");




play.onclick = ()=>{

    ntega.innerHTML = text.value;

}

stop.onclick = ()=>{
ntega.innerHTML = "";

//text.value = "";    // لحذف القيمه من داخل المربع
}


