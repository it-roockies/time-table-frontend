const mainindex=()=>{
    const greater=document.createElement("div")
    greater.className="container"
    greater.innerHTML=
        `<h1>Welcome to TPPU's official academic calendar website</h1>
        <div class="calendars_table" id="calendars_table">    
        <div class="cal_item prep"><a href="prep.html" class="button">Preparty year</a></div>
        <div class="cal_item first"><a onclick="mainfunctionffirst()" class="button">First level</a></div>
        <div class="cal_item second"><a href="second.html" class="button">Second level</a></div>
        <div class="cal_item third"><a href="third.html" class="button">Third level</a></div>                       
        </div>
        <p>Powered by <a href="https://t.me/mirabbos" target="_blank">Mirabbos</a></p>`
    document.getElementById("root").appendChild(greater)
}