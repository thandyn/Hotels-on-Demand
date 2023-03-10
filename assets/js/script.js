var lat = "";
var lon = "";
backUpData = {};

function renderHotelEl(busiData) {
  console.log(busiData);
  var hotelContainer = document.getElementById("hotel-container");
  hotelContainer.innerHTML = "";
  for (var i = 0; i < busiData.length; i++) {
    var name = busiData[i].name;
    var location = busiData[i].location.address1;
    var phone = busiData[i].phone;
    var url = busiData[i].url;
    var img = busiData[i].image_url;

    var hotelEl = document.createElement("div");
    hotelEl.className = "hotel-card";
    hotelEl.innerHTML = `
    <header class="card-header">
    <p class="card-header-title">
    ${name}
    </p>
    </header>
    <figure class="image is-4by3">
    <img src="${img}" alt="hotel image">
    </figure>
    <div class="card-content">
    <div class="content">
    <p>${location}</p>
    <p>${phone}</p>
    </div>
    <footer class="card-footer">
    <button class="is-fullwidth is-medium button is-success">Favorite</button>
    <a href="${url}" class="is-fullwidth is-medium button is-success">Info</a>
    </footer>`;
    hotelContainer.appendChild(hotelEl);
  }
}

function renderRestEl(data) {
  console.log(data);
  var restContainer = document.getElementById("rest-container");
  restContainer.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    var name = data[i].name;
    var location = data[i].address;
    var phone = data[i].phone;
    var url = data[i].website;
    var img = data[i].photo.images.original.url;

    // img ="https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"

    var restEl = document.createElement("div");
    restEl.className = "rest-card";
    restEl.innerHTML = `
    <header class="card-header">
    <p class="card-header-title">
    ${name}
    </p>
    </header>
    <figure class="image is-4by3">
    <img src="#" alt="restaurant image">
    </figure>
    <div class="card-content">
    <div class="content">
    <p>${location}</p>
    <p>${phone}</p>
    </div>
    <footer class="card-footer">
    <button class="is-fullwidth is-medium button is-success">Favorite</button>
    <a href="${url}" class="is-fullwidth is-medium button is-success">Info</a>
    </footer>`;
    restContainer.appendChild(restEl);
  }
}

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  var cityInput = document.getElementById("search-value").value;
  if (!cityInput) {
    return;
  }
  // fetch(
  //   `https://proxy.cors.sh/https://api.yelp.com/v3/businesses/search?location=${cityInput}&term=hotels&sort_by=best_match&limit=10`,
  //   {
  //     headers: {
  //       Authorization:
  //         "Bearer KK1z_UNPqGdV5DE38Usm9M4nwWOtrX8NvxCEbWL2qAFNbMSGtpP3ce0_ZA6gw0vANgRlwIQYky9wCA5feMpcqGQCHoXchSkahkHXVudiEJdP0l4Pin-ntq0985YHZHYx",
  //     },
  //   }
  // )
  //   .then((response) => response.json())
  //   .then((response) => {
  //     console.log(response);
  //     var busiData = response.businesses;
  //     var lat = busiData[0].coordinates.latitude;
  //     var lon = busiData[0].coordinates.longitude;
  //     renderHotelEl(busiData);
  fetchRestaurant(lat, lon);
  //   })
  //   .catch((err) => console.error(err));
});

function fetchRestaurant(lat, lon) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c671075f01mshcac5c7dba6a56ecp16f198jsn6efda25750d9",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  fetch(
    `https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=33.777850&longitude=-117.945037&limit=10&currency=USD&distance=2&open_now=false&lang=en_US`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      var restData = response.data;
      renderRestEl(restData);
    })

    .catch((err) => console.error(err));
}
