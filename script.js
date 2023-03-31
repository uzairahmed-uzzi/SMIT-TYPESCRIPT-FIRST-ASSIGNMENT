var data;
var api = fetch("https://animechan.vercel.app/api/quotes");
api.then(function (val) {
    return val.json();
}).then(function (val) {
    data = val;
    return data;
}).then(function (data) {
    var tab = document.getElementById("tab");
    var i = 0;
    while (i < data.length) {
        tab.innerHTML += "<tr>\n  <td>".concat(data[i]['anime'], "</td>\n  <td>").concat(data[i]['character'], "</td>\n  <td>").concat(data[i]['quote'], "</td>\n  </tr>");
        i++;
    }
}).catch(function (Error) {
    console.log("GETTING ERROR WHILE FETCHING:  " + Error.toString());
});
