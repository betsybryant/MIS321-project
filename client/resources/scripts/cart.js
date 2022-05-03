const orderUrl = "https://localhost:5001/api/Orders";
const empUrl = "https://localhost:5001/api/Employees";

function placeOrder(){
    const postUrl = orderUrl;
    const sendOrder = {
        //orderId: 2,
        orderRecordDate: new Date().toString(),
        orderCompleteDate: null,
        orderProduct: "Test",
        orderTotal: 10
    }
    fetch(postUrl, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(sendOrder)
    })
    console.log("Order placed for $" + parseFloat(sessionStorage.getItem("cartTotal")));
}

function testing(){
    console.log("TESTING");
}

function createEmployee(){
    const postUrl = empUrl;
    const sendEmp = {
        //empId: 2,
        empFName: "Alex",
        empLName: "Payne",
        empEmail: "ampayne4@crimson.ua.edu",
        empPassword: "password123"
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
    fetch(empUrl, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(sendEmp)
    })
    // window.location.href = "./groceries_main.html"
}