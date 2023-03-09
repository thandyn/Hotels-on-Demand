var info = '';

function renderHotelEl(){
  
}

document.getElementById('submit').addEventListener('click', function(e){
  // e;
  var cityInput = document.getElementById('search-value').value;
  console.log(cityInput);
  if (!cityInput){
    return;
    
  }
  

fetch(
  `https://proxy.cors.sh/https://api.yelp.com/v3/businesses/search?location=${cityInput}&term=hotels&sort_by=best_match&limit=10`,
  {
    headers: {
      Authorization:
        "Bearer KK1z_UNPqGdV5DE38Usm9M4nwWOtrX8NvxCEbWL2qAFNbMSGtpP3ce0_ZA6gw0vANgRlwIQYky9wCA5feMpcqGQCHoXchSkahkHXVudiEJdP0l4Pin-ntq0985YHZHYx",
    },
  }
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  info=businesses
  .catch((err) => console.error(err));
      // console.log([0]);
})



// $(document).ready(function () {
//   var hotel = $("#hotel-container");
// function renderHotel(data){

//   hotel.append(name, location, phone, image_url, url);
// }
// })
