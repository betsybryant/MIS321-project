const orderUrl = "https://localhost:5001/api/Orders";

function placeOrder(){
    if (sessionStorage.getItem("custEmail") != null){
        const postUrl = orderUrl;
        const sendOrder = {
            custId: parseInt(sessionStorage.getItem("custId")),
            orderRecordDate: new Date().toISOString(),
            orderProduct: "Test Product",
            orderTotal: parseFloat(sessionStorage.getItem("cartTotal")),
            completed: 0
        }
        fetch(postUrl, {
            method: "POST",
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(sendOrder)
        })
        console.log(sessionStorage.getItem("custFName") + " " + sessionStorage.getItem("custLName") + " placed an order for $" + parseFloat(sessionStorage.getItem("cartTotal")));
    }
    else{
        console.log("custEmail is null. Customer needs to login");
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
        let html1 = ``;
        html1 += "OrderTotal: $" + parseFloat(sessionStorage.getItem("cartTotal"));
        document.getElementById("orderTotal").innerHTML = html1;
        let html = ``;
		json.forEach((order) => {
            if(order.completed == '1')
            {
                if(order.custId == parseInt(sessionStorage.getItem("custId")))
                {
                    html += `<div>`;
                    html += `<h8 class = "row">`+ "Order number: " + order.orderId + `</h8>`;
                    html += `<h8 class = "row">`+ "Total: " + '$' + order.orderTotal + `</h8>`;
                    html += `<br></br>`;
                    document.getElementById("pastOrders").innerHTML = html;
                }
                else
                {
                    html += ``;
                }
            }
            else
            {
                html += ``;
            }
		});
	}).catch(function(error) {
		console.log(error);
	})
}