const baseUrl = "https://localhost:5001/api/Customers";
function updatePayment(customer)
{
    const updatePaymentUrl = baseUrl + "/" + customer.custId;
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
}