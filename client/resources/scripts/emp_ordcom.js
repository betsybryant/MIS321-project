const baseUrl ="https://localhost:5001/api/Orders";
var fieldList = ["OrderId", "OrderRecordDate", "OrderCompleteDate", "OrderProduct", "OrderTotal"];

function handleOnLoad(){
    const orderUrl = baseUrl;

    fetch(orderUrl).then(function(response){
        return response.json();
    }).then(function(json){
        displayTable(json);
    });
}
function displayTable(json)
{
    fieldlists = json;
    let html = "<table>";
    html += "<tr><th><h1>Order #</h1></th><th><h1>Complete<h1><th></tr>";
    fieldlists.forEach((lists) => {
        html+=`<tr><td>${fieldlists.OrderId}</td><td>`;
        html += `<button id = "ordcom" onclick = "orderComplete"> Complete</button></td><tr>`; //creates button in table
    });
    html += "</table>";
    document.getElementById("ordercomplete").innerHTML =html;
}
function orderComplete()
{
    {
        // changing button from complete to order completed once button clicked
        var elem = document.getElementById("mordcom");
        if (elem.value=="Complete") elem.value = "Order Completed ";
        else elem.value = "Complete";
    }
}