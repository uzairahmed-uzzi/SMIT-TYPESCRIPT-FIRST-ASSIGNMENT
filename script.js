var tab = document.getElementById("tab");
//  const api=fetch("https://api.open-meteo.com/v1/forecast?latitude=24.85&longitude=67.19&hourly=temperature_2m");
var data = "";
var api = fetch("https://animechan.vercel.app/api/quotes");
api.then(function (val) {
    return val.json();
}).then(function (val) {
    console.log(val[0]['anime']);
    data = val;
    return data;
}).then(function (data) {
    var i = 0;
    while (i < data.length) {
        tab.innerHTML += "<tr>\n    <td>".concat(data[i]['anime'], "</td>\n    <td>").concat(data[i]['character'], "</td>\n    <td>").concat(data[i]['quote'], "</td>\n    </tr>      \n                ");
        i++;
    }
});
