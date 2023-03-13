var hotel = JSON.parse(localStorage.getItem("savedHotel")) || [];
var restaurant = JSON.parse(localStorage.getItem("savedRes")) || [];

function renderHotelEl() {
  document.getElementById("hotel-container").innerHTML = "";
  var hotelContainer = document.getElementById("hotel-container");
  hotelContainer.innerHTML = "";
  for (var i = 0; i < (hotel ? hotel.length : 0); i++) {
    var name = hotel[i].name;
    var location =
      hotel[i].location.display_address[0] +
      ", " +
      hotel[i].location.display_address[1];
    var phone = hotel[i].display_phone;
    var img = hotel[i].image_url;

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
      </div>
      <footer class="card-footer">
        <button class="remove-hotel is-fullwidth is-medium button is-danger">Remove Favorite</button>
      </footer>`;
    hotelContainer.appendChild(hotelEl);
  }
}

function renderRestaurantEl() {
  var restContainer = document.getElementById("rest-container");
  restContainer.innerHTML = "";
  for (var i = 0; i < (restaurant ? restaurant.length : 0); i++) {
    var name = restaurant[i].name;
    var location = restaurant[i].address;
    var phone = restaurant[i].phone;
    if (restaurant[i].photo) {
      img = restaurant[i].photo.images.original.url;
    } else {
      img =
        "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg";
    }

    var restaurantEl = document.createElement("div");
    restaurantEl.className = "rest-card";
    restaurantEl.innerHTML = `
      <header class="card-header">
        <p class="card-header-title">
          ${name}
        </p>
      </header>
      <figure class="image is-4by3">
        <img src="${img}" alt="restaurant image">
      </figure>
      <div class="card-content">
        <div class="content">
          <p>${location}</p>
          <p>${phone}</p>
        </div>
      </div>
      <footer class="card-footer">
        <button class="remove-res is-fullwidth is-medium button is-danger">Remove Favorite</button>
      </footer>
    `;
    restContainer.appendChild(restaurantEl);
  }
}

document.addEventListener("click", function (e) {
  if (event.target.classList.contains("remove-hotel")) {
    var index = event.target.dataset.index;
    hotel.splice(index, 1);
    localStorage.setItem("savedHotel", JSON.stringify(hotel));
    renderHotelEl();
  }
});

document.addEventListener("click", function (e) {
  if (event.target.classList.contains("remove-res")) {
    var index = event.target.dataset.index;
    restaurant.splice(index, 1);
    localStorage.setItem("savedRes", JSON.stringify(restaurant));
    renderRestaurantEl();
  }
});

renderHotelEl();

renderRestaurantEl();
