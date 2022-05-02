const baseUrl = "https://localhost:5001/api/Customers";
const email = sessionStorage.getItem("empEmail");
const password = sessionStorage.getItem("empPassword");
function updatePayment(customer)
{
    console.log(email);
    const updatePaymentUrl = baseUrl + "/" + customer.custID;
    console.log("MADE IT");
    fetch(updatePaymentUrl, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
    }).then((response) => {
        console.log(response);
    })
    console.log("MADE IT TO END OF JS");
    console.log(email);
}