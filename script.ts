type Data =
{
  'anime':string;
  'character':string;
  'quote':string;
};
let data:Data[];
const api=fetch("https://animechan.vercel.app/api/quotes");
 api.then((val)=>{
    return val.json();
 }).then((val)=>
 {
   data=val;
   return data;
    
 }).then((data)=>{
  let tab=document.getElementById("tab")! as HTMLTableElement;
  let  i=0;
  while(i<data.length){
  tab.innerHTML+= `<tr>
  <td>${data[i]['anime']}</td>
  <td>${data[i]['character']}</td>
  <td>${data[i]['quote']}</td>
  </tr>`;
  i++;
  }
            
}).catch((Error)=>{
  console.log("GETTING ERROR WHILE FETCHING:  "+Error.toString());
});


 