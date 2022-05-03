const orderUrl = "https://localhost:5001/api/Orders";
const baseUrl = "https://localhost:5001/api/Products";

function chooseAll()
{
    fetch(baseUrl).then(function(response) 
    {
		console.log(response);
		return response.json();
	}).then(function(json) {
        console.log(json)
        let html = ``;
		json.forEach((product) => {
            html += `<div class="card col-md-4 bg-light text-dark">`;
            // html += `<img src = "${product.productImage}" class = "card-img" alt="...">`;
            html += `<class = "card-img-overlay">`
            html += `<h5 class = "card-title">`+ product.productName + `</h5>`;
            html += `<h7 class="card-price">`+ "$" + product.productPrice + `</h7>`;
            html += `<br>`
            html += `<button onclick = "addToCart(` + product.productId + `)"> Add To Cart</button>`
            html += `</div>`
		});
        document.getElementById("productPlacement").innerHTML = html;

	}).catch(function(error) {
		console.log(error);
	})
}