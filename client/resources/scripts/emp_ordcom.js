const orderUrl = "https://localhost:5001/api/Orders";
const baseUrl = "https://localhost:5001/api/Products";
function orderComplete()
{
    {
        // changing button from complete to order completed once button clicked
        var elem = document.getElementById("mordcom");
        if (elem.value=="Complete") elem.value = "Order Completed ";
        else elem.value = "Complete";
    }
}

function handleOnLoad()
{
    fetch(orderUrl).then(function(response) 
    {
		console.log(response);
		return response.json();
	}).then(function(json) {
        console.log(json)
        let html = ``;
		json.forEach((order) => {
            if(order.completed == 0)
            {
                html += `<div>`;
                html += `<h5 class = "row">`+ "Order number: " + order.orderId + `</h5>`;
                html += `<h5 class = "row">`+ "Total: " + '$' + order.orderTotal + `</h5>`;
                html += `<button onclick = "lookForCompleteOrder(` + order.orderId + `)">Complete Order</button>`;
                html += `<br></br>`;
            }
            else if(order.completed == 1)
            {
                html += ``;
            }
		});
        document.getElementById("orderComplete").innerHTML = html;

	}).catch(function(error) {
		console.log(error);
	})
}
function completeOrder(id)
{
    const completeUrl = orderUrl + "/" + id;
    fetch(completeUrl, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
    }).then((response) => {
        console.log(response);
    })
    setTimeout(() => {
        document.getElementById("orderComplete").innerHTML = "";
        handleOnLoad();
        }, 2000);
}
function lookForCompleteOrder(id)
{
    fetch(orderUrl).then(function(response) 
    {
		console.log(response);
		return response.json();
	}).then(function(json) {
        console.log(json)
		json.forEach((order) => {
            if(order.orderId == id) {
                completeOrder(order.orderId);
                console.log(order.orderId);
                console.log(id);
            }
		});
	}).catch(function(error) {
		console.log(error);
	})
}