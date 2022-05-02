const baseUrl = "https://localhost:5001/api/Products";
var cartTotal = 0;

function chooseVeg()
{
    fetch(baseUrl).then(function(response) 
    {
		console.log(response);
		return response.json();
	}).then(function(json) {
        console.log(json)
        let html = ``;
		json.forEach((product) => {
            if(product.productCategory == 'Vegetable')
            {
                html += `<div class="card col-md-4 bg-light text-dark">`;
                html += `<img src = "${product.productImage}" class = "card-img" alt="...">`;
                html += `<class = "card-img-overlay">`
                html += `<h5 class = "card-title">`+ product.productName + `</h5>`;
                html += `<h7 class="card-title">`+ "$" + product.productPrice + `</h7>`;
                html += `<br>`
                html += `<button onclick = "addToCart(` + product.productId + `)"> Add To Cart</button>`
                html += `</div>`
            }
            else
            {
                html += ``;
            }
		});
        document.getElementById("productPlacement").innerHTML = html;

	}).catch(function(error) {
		console.log(error);
	})
}
function chooseGrains()
{
    fetch(baseUrl).then(function(response) 
    {
		console.log(response);
		return response.json();
	}).then(function(json) {
        console.log(json)
        let html = ``;
		json.forEach((product) => {
            if(product.productCategory == 'Grains')
            {
                html += `<div class="card col-md-4 bg-light text-dark">`;
                html += `<img src = "${product.productImage}" class = "card-img" alt="...">`;
                html += `<class = "card-img-overlay">`
                html += product.productId;
                html += `<h5 class = "card-title">`+ product.productName + `</h5>`;
                html += `<h7 class="card-title">`+ "$" + product.productPrice + `</h7>`;
                html += `<br>`
                html += `<button onclick = "addToCart(` + product.productId + `)"> Add To Cart</button>`
                html += `</div>`
            }
            else
            {
                html += ``;
            }
		});
        document.getElementById("productPlacement").innerHTML = html;

	}).catch(function(error) {
		console.log(error);
	})
}
function chooseDairy()
{
    fetch(baseUrl).then(function(response) 
    {
		console.log(response);
		return response.json();
	}).then(function(json) {
        console.log(json)
        let html = ``;
		json.forEach((product) => {
            if(product.productCategory == 'Dairy')
            {
                html += `<div class="card col-md-4 bg-light text-dark">`;
                html += `<img src = "${product.productImage}" class = "card-img" alt="...">`;
                html += `<class = "card-img-overlay">`
                html += `<h5 class = "card-title">`+ product.productName + `</h5>`;
                html += `<h7 class="card-title">`+ "$" + product.productPrice + `</h7>`;
                html += `<br>`
                html += `<button onclick = "addToCart(` + product.productId + `)"> Add To Cart</button>`
                html += `</div>`
            }
            else
            {
                html += ``;
            }
		});
        document.getElementById("productPlacement").innerHTML = html;

	}).catch(function(error) {
		console.log(error);
	})
}
function chooseMeats()
{
    fetch(baseUrl).then(function(response) 
    {
		console.log(response);
		return response.json();
	}).then(function(json) {
        console.log(json)
        let html = ``;
		json.forEach((product) => {
            if(product.productCategory == 'Meat')
            {
                html += `<div class="card col-md-4 bg-light text-dark">`;
                html += `<img src = "${product.productImage}" class = "card-img" alt="...">`;
                html += `<class = "card-img-overlay">`
                html += `<h5 class = "card-title">`+ product.productName + `</h5>`;
                html += `<h7 class="card-title">`+ "$" + product.productPrice + `</h7>`;
                html += `<br>`
                html += `<button onclick = "addToCart(` + product.productId + `)"> Add To Cart</button>`
                html += `</div>`
            }
            else
            {
                html += ``;
            }
		});
        document.getElementById("productPlacement").innerHTML = html;

	}).catch(function(error) {
		console.log(error);
	})
}
function chooseFruit()
{
    fetch(baseUrl).then(function(response) 
    {
		console.log(response);
		return response.json();
	}).then(function(json) {
        console.log(json)
        let html = ``;
		json.forEach((product) => {
            if(product.productCategory == 'Fruit')
            {
                html += `<div class="card col-md-4 bg-light text-dark">`;
                html += `<img src = "${product.productImage}" class = "card-img" alt="...">`;
                html += `<class = "card-img-overlay">`
                html += `<h5 class = "card-title">`+ product.productName + `</h5>`;
                html += `<h7 class="card-title">`+ "$" + product.productPrice + `</h7>`;
                html += `<br>`
                html += `<button onclick = "addToCart(` + product.productId + `)"> Add To Cart</button>`
                html += `</div>`
            }
            else
            {
                html += ``;
            }
		});
        document.getElementById("productPlacement").innerHTML = html;

	}).catch(function(error) {
		console.log(error);
	})
}
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
            html += `<img src = "${product.productImage}" class = "card-img" alt="...">`;
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

function addToCart(id)
{
    const url = baseUrl;

    fetch(baseUrl).then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        json.forEach((product) => {
            if(product.productId == id)
            {
                //addCart(product, id);
                // sessionStorage.setItem("cartTotal", cartTotal + 10);
                // console.log("Cart Total:" + sessionStorage.getItem("cartTotal"));
                cartTotal += 10;
                console.log("Cart Total = " + cartTotal);
            };
        })
    }).catch(function(error){
        console.log(error);
    // });
    // const postUrl = baseUrl;
    // const sendCart = {
    //     productId: document.getElementById("productId").value,
    //     custLName: document.getElementById("custLName").value,
    //     custEmail: document.getElementById("custEmail").value,
    //     custPassword: document.getElementById("custPassword").value,
    //     cardName: document.getElementById("cardName").value,
    //     cardNo: document.getElementById("cardNo").value,
    //     cardMonth: document.getElementById("cardMonth").value,
    //     cardYear: document.getElementById("cardYear").value,
    //     cvvNo: document.getElementById("cvvNo").value,
    // } 
    // fetch(postUrl, {
    //     method: "POST",
    //     headers: {
    //         "Accept": 'application/json',
    //         "Content-Type": 'application/json',
    //     },
    //     body: JSON.stringify(sendCust)
    })
    // window.location.href = "./groceries_main.html"
}


function placeOrder(){
    const postUrl = baseUrl;
    const sendOrder = {
        orderRecordDate: Date(),
        orderCompletedDate: null,
        orderProduct: null,
        orderTotal: cartTotal,
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
}