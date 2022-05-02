const orderUrl = "https://localhost:5001/api/Orders";

function placeOrder(){
    const postUrl = orderUrl;
    const sendOrder = {
        orderId: 1,
        orderRecordDate: 'Test',
        orderCompletedDate: 'test',
        orderProduct: 'Test',
        orderTotal: parseFloat(sessionStorage.getItem("cartTotal")),
        // custFName: document.getElementById("custFName").value,
        // custLName: document.getElementById("custLName").value,
        // custEmail: document.getElementById("custEmail").value,
        // custPassword: document.getElementById("custPassword").value,
        // cardName: document.getElementById("cardName").value,
        // cardNo: document.getElementById("cardNo").value,
        // cardMonth: document.getElementById("cardMonth").value,
        // cardYear: document.getElementById("cardYear").value,
        // cvvNo: document.getElementById("cvvNo").value,
    }
    fetch(postUrl, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(sendOrder)
    })
    console.log("Order placed for $" + sessionStorage.getItem("cartTotal"));
}