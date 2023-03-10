document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  var cityInput = document.getElementById("search-value").value;
  console.log(cityInput);
  if (!cityInput) {
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
    .then((response) => {
      console.log(response);
      for (var i = 0; i < response.businesses.length; i++) {
        var nameEl = document.createElement("h1");
        console.log(response.businesses[i].name);

        var locationEl = document.createElement("h2");
        var phoneEl = document.createElement("p");
        // var imgEl = document.createElement ("");
        var urlEl = document.createElement("p");

        nameEl.textContent = response.businesses[i].name;

        locationEl.textContent =
          response.businesses[i].location.display_address[0]  + " " +
          response.businesses[i].location.display_address[1];

        phoneEl.textContent = response.businesses[i].phone
        urlEl.textContent = response.businesses[i].url
        // imgEl.textContent = response.businesses[i].

        info.append(nameEl, locationEl, phoneEl, urlEl);
      }
    })
    // info=businesses
    .catch((err) => console.error(err));
});

// $(document).ready(function () {
//   var hotel = $("#hotel-container");
// function renderHotel(data){

//   hotel.append(name, location, phone, image_url, url);
// }
// })
