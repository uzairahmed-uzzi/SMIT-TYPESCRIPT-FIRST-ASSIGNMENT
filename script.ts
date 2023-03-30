var tab=document.getElementById("tab")! as HTMLTableElement;

//  const api=fetch("https://api.open-meteo.com/v1/forecast?latitude=24.85&longitude=67.19&hourly=temperature_2m");
var data="";
var api=fetch("https://animechan.vercel.app/api/quotes");
 api.then((val)=>{
    return val.json();
 }).then((val)=>
 {
    console.log(val[0]['anime']);
    data=val;
    return data;
    
 }).then((data)=>{
    var i=0
    while(i<data.length){
    tab.innerHTML+= `<tr>
    <td>${data[i]['anime']}</td>
    <td>${data[i]['character']}</td>
    <td>${data[i]['quote']}</td>
    </tr>      
                `;
    i++;
    }
            
 })

 