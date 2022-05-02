const baseUrl = "https://localhost:5001/api/Order";
var fieldlists = [];

function handleOnLoad()
{
    fetch(baseUrl).then(function(response){
        return response.json();
    }).then(function(json){
        populateList(json);
    });
}
function populateList(json)
{
    fieldlists =json
    let html = "<table>";
    html += "<tr><th<h1>Order #</h1></th><th><h1>Complete<h1><th></tr";
    fieldlists.forEach((element) => {
        html += `<tr><td>${Order.OrderId}</td><td>`;
        html += "<button id='complete';>Complete</button>" + `</td><tr>`;
    })
    html += "</table>";
    document.getElementById("table").innerHTML = html;
}