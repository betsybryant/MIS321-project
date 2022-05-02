baseUrl = "https://localhost:5001/api/Customers";

function custLogin(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log(email);
    console.log(password);

    fetch(baseUrl).then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        json.forEach((customer) => {
            if(email === customer.custEmail && password === customer.custPassword)
            {
                sessionStorage.setItem("custEmail", customer.custEmail);
                sessionStorage.setItem("custPassword", customer.custPassword);
                console.log(email);
                window.location.href = "./selection.html";
            }
            else
            {
                incorrectPassword();
            }
		});
    }).catch(function(error){
        console.log(error);
    });
}
function incorrectPassword()
{
    let html = ``;
    html += `<h9>Incorrect Email or Password</h9>`;
    document.getElementById("incorrectPassword").innerHTML = html;
}

// function findSongs(){
//     // var url = "https://www.songsterr.com/a/ra/songs.json?pattern="
//     const url = "https://localhost:5001/api/Songs"
//     //var url = "jhdjjtqo9w5bzq2t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
//     let searchString = document.getElementById("searchSong").value;

//     //url += searchString;

//     console.log(searchString)

//     fetch(url).then(function(response) {
// 		console.log(response);
// 		return response.json();
// 	}).then(function(json) {
//         console.log(json)
//         let html = ``;
//         let count = 0
//         html += `<div class = "row">`
// 		json.forEach((song) => {
//             console.log(song.songTitle)
//             if(song.deleted == "n"){
//                 html += `<div class="card col-md-4 bg-dark text-white">`;
//                 html += `<img src="./resources/images/music.jpeg" class="card-img" alt="...">`;
//                 html += `<div class="card-img-overlay">`;
//                 html += `<h5 class="card-title">`+song.songTitle+`</h5>`;
//                 html += `</div>`;
//                 html += `</div>`;
//             }
            

//             if (count ==3){
//                 html += `</div><div class = "row">`;
//             }
// 		});
		
//         if(html === ``){
//             html = "No Songs found :("
//         }
// 		document.getElementById("cards").innerHTML = html;

// 	}).catch(function(error) {
// 		console.log(error);
// 	})
// }