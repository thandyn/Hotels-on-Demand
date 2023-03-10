var info = document.getElementById("card-container");

var backupData = {
  businesses: [
    {
      id: "ApylrCaVVcviLblyLF7JGA",
      alias: "ayres-hotel-anaheim-anaheim-4",
      name: "Ayres Hotel Anaheim",
      image_url:
        "https://s3-media4.fl.yelpcdn.com/bphoto/-xb-ruJ40t7wKVwGxkjTWA/o.jpg",
      is_closed: false,
      url: "https://www.yelp.com/biz/ayres-hotel-anaheim-anaheim-4?adjust_creative=E1Bhe26L4EzHaptqpuw8Ew&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=E1Bhe26L4EzHaptqpuw8Ew",
      review_count: 368,
      categories: [{ alias: "hotels", title: "Hotels" }],
      rating: 4,
      coordinates: {
        latitude: 33.80590464442396,
        longitude: -117.87800474851407,
      },
      transactions: [],
      price: "$$",
      location: {
        address1: "2550 E Katella Ave",
        address2: "",
        address3: "",
        city: "Anaheim",
        zip_code: "92806",
        country: "US",
        state: "CA",
        display_address: ["2550 E Katella Ave", "Anaheim, CA 92806"],
      },
      phone: "+17146342106",
      display_phone: "(714) 634-2106",
      distance: 3482.2528886538175,
    },
    {
      id: "0Jea8VxLRz6-CBrs2FU0tg",
      alias: "courtyard-by-marriott-anaheim-theme-park-entrance-anaheim-2",
      name: "Courtyard by Marriott Anaheim Theme Park Entrance",
      image_url:
        "https://s3-media3.fl.yelpcdn.com/bphoto/lM1gGYirCWYrxg26Tegaww/o.jpg",
      is_closed: false,
      url: "https://www.yelp.com/biz/courtyard-by-marriott-anaheim-theme-park-entrance-anaheim-2?adjust_creative=E1Bhe26L4EzHaptqpuw8Ew&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=E1Bhe26L4EzHaptqpuw8Ew",
      review_count: 268,
      categories: [{ alias: "hotels", title: "Hotels" }],
      rating: 4.5,
      coordinates: { latitude: 33.812348, longitude: -117.9143765 },
      transactions: [],
      price: "$$$",
      location: {
        address1: "1420 South Harbor Blvd",
        address2: "",
        address3: "",
        city: "Anaheim",
        zip_code: "92802",
        country: "US",
        state: "CA",
        display_address: ["1420 South Harbor Blvd", "Anaheim, CA 92802"],
      },
      phone: "+17142541442",
      display_phone: "(714) 254-1442",
      distance: 2485.5630693962203,
    },
    {
      id: "uKnyMxzZRWmiTkmpDeT7IQ",
      alias: "the-westin-anaheim-resort-anaheim-2",
      name: "The Westin Anaheim Resort",
      image_url:
        "https://s3-media2.fl.yelpcdn.com/bphoto/kYCPkipcRfhcQEOmjXH_-w/o.jpg",
      is_closed: false,
      url: "https://www.yelp.com/biz/the-westin-anaheim-resort-anaheim-2?adjust_creative=E1Bhe26L4EzHaptqpuw8Ew&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=E1Bhe26L4EzHaptqpuw8Ew",
      review_count: 187,
      categories: [{ alias: "hotels", title: "Hotels" }],
      rating: 4,
      coordinates: {
        latitude: 33.80245308673323,
        longitude: -117.92237208595964,
      },
      transactions: [],
      location: {
        address1: "1030 W Katella Ave",
        address2: null,
        address3: "",
        city: "Anaheim",
        zip_code: "92802",
        country: "US",
        state: "CA",
        display_address: ["1030 W Katella Ave", "Anaheim, CA 92802"],
      },
      phone: "+16572799786",
      display_phone: "(657) 279-9786",
      distance: 3842.4546687893953,
    },
    {
      id: "-t5jTrI6ZiPlpu_-7iunmQ",
      alias: "ayres-hotel-orange-orange-7",
      name: "Ayres Hotel Orange",
      image_url:
        "https://s3-media1.fl.yelpcdn.com/bphoto/EpqYTeNSPb7Th7A9rP-Mkg/o.jpg",
      is_closed: false,
      url: "https://www.yelp.com/biz/ayres-hotel-orange-orange-7?adjust_creative=E1Bhe26L4EzHaptqpuw8Ew&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=E1Bhe26L4EzHaptqpuw8Ew",
      review_count: 211,
      categories: [{ alias: "hotels", title: "Hotels" }],
      rating: 4.5,
      coordinates: {
        latitude: 33.7904348333839,
        longitude: -117.891137952437,
      },
      transactions: [],
      price: "$$",
      location: {
        address1: "200 N The City Dr",
        address2: "",
        address3: "",
        city: "Orange",
        zip_code: "92868",
        country: "US",
        state: "CA",
        display_address: ["200 N The City Dr", "Orange, CA 92868"],
      },
      phone: "+17149197940",
      display_phone: "(714) 919-7940",
      distance: 4631.925049433959,
    },
    {
      id: "QvGWrmgGtAhG-OeMdvpL8w",
      alias: "embassy-suites-by-hilton-anaheim-orange-orange",
      name: "Embassy Suites by Hilton Anaheim Orange",
      image_url:
        "https://s3-media1.fl.yelpcdn.com/bphoto/X6fIxmfqYOrnNEzNtQDmjQ/o.jpg",
      is_closed: false,
      url: "https://www.yelp.com/biz/embassy-suites-by-hilton-anaheim-orange-orange?adjust_creative=E1Bhe26L4EzHaptqpuw8Ew&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=E1Bhe26L4EzHaptqpuw8Ew",
      review_count: 372,
      categories: [{ alias: "hotels", title: "Hotels" }],
      rating: 3,
      coordinates: { latitude: 33.794477, longitude: -117.88998 },
      transactions: [],
      price: "$$",
      location: {
        address1: "400 N State College Blvd",
        address2: "",
        address3: "",
        city: "Orange",
        zip_code: "92868",
        country: "US",
        state: "CA",
        display_address: ["400 N State College Blvd", "Orange, CA 92868"],
      },
      phone: "+17149381111",
      display_phone: "(714) 938-1111",
      distance: 4211.594379301223,
    },
    {
      id: "F6hv59MKIimSyTJhsvtvvg",
      alias: "alo-hotel-by-ayres-orange",
      name: "ALO Hotel by Ayres",
      image_url:
        "https://s3-media2.fl.yelpcdn.com/bphoto/a4S9D2OO69Np0W_FuU4Geg/o.jpg",
      is_closed: false,
      url: "https://www.yelp.com/biz/alo-hotel-by-ayres-orange?adjust_creative=E1Bhe26L4EzHaptqpuw8Ew&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=E1Bhe26L4EzHaptqpuw8Ew",
      review_count: 256,
      categories: [{ alias: "hotels", title: "Hotels" }],
      rating: 4,
      coordinates: { latitude: 33.78989, longitude: -117.89148 },
      transactions: [],
      price: "$$",
      location: {
        address1: "3737 W Chapman Ave",
        address2: "",
        address3: "",
        city: "Orange",
        zip_code: "92868",
        country: "US",
        state: "CA",
        display_address: ["3737 W Chapman Ave", "Orange, CA 92868"],
      },
      phone: "+17149789168",
      display_phone: "(714) 978-9168",
      distance: 4733.944273056519,
    },
    {
      id: "bxVIobai0e17WUhct1f95Q",
      alias: "best-western-plus-park-place-inn-mini-suites-anaheim",
      name: "Best Western Plus Park Place Inn - Mini Suites",
      image_url:
        "https://s3-media1.fl.yelpcdn.com/bphoto/x1ikDfb-9TU5xuBgW0hQ6A/o.jpg",
      is_closed: false,
      url: "https://www.yelp.com/biz/best-western-plus-park-place-inn-mini-suites-anaheim?adjust_creative=E1Bhe26L4EzHaptqpuw8Ew&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=E1Bhe26L4EzHaptqpuw8Ew",
      review_count: 287,
      categories: [{ alias: "hotels", title: "Hotels" }],
      rating: 4,
      coordinates: { latitude: 33.8095321, longitude: -117.9148527 },
      transactions: [],
      price: "$$",
      location: {
        address1: "1544 S Harbor Blvd",
        address2: "",
        address3: "",
        city: "Anaheim",
        zip_code: "92802",
        country: "US",
        state: "CA",
        display_address: ["1544 S Harbor Blvd", "Anaheim, CA 92802"],
      },
      phone: "+17147764800",
      display_phone: "(714) 776-4800",
      distance: 2808.5175710998924,
    },
    {
      id: "L76FLmiMxHakvq6D5gFpCg",
      alias: "doubletree-by-hilton-hotel-anaheim-orange-county-orange-3",
      name: "DoubleTree by Hilton Hotel Anaheim - Orange County",
      image_url:
        "https://s3-media1.fl.yelpcdn.com/bphoto/n4OX_oDh0xnZ1HkDm-1kxg/o.jpg",
      is_closed: false,
      url: "https://www.yelp.com/biz/doubletree-by-hilton-hotel-anaheim-orange-county-orange-3?adjust_creative=E1Bhe26L4EzHaptqpuw8Ew&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=E1Bhe26L4EzHaptqpuw8Ew",
      review_count: 527,
      categories: [{ alias: "hotels", title: "Hotels" }],
      rating: 3,
      coordinates: { latitude: 33.7883, longitude: -117.891752 },
      transactions: [],
      price: "$$",
      location: {
        address1: "100 The City Dr",
        address2: "",
        address3: null,
        city: "Orange",
        zip_code: "92868",
        country: "US",
        state: "CA",
        display_address: ["100 The City Dr", "Orange, CA 92868"],
      },
      phone: "+17146344500",
      display_phone: "(714) 634-4500",
      distance: 4856.940607301909,
    },
    {
      id: "YqBG_HMBxlIaS3Al2I0rkw",
      alias: "hyatt-house-at-anaheim-resort-convention-center-anaheim",
      name: "Hyatt House at Anaheim Resort/Convention Center",
      image_url:
        "https://s3-media2.fl.yelpcdn.com/bphoto/7QjNidVnlnY1HZXCdCJy3A/o.jpg",
      is_closed: false,
      url: "https://www.yelp.com/biz/hyatt-house-at-anaheim-resort-convention-center-anaheim?adjust_creative=E1Bhe26L4EzHaptqpuw8Ew&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=E1Bhe26L4EzHaptqpuw8Ew",
      review_count: 332,
      categories: [{ alias: "hotels", title: "Hotels" }],
      rating: 4,
      coordinates: { latitude: 33.802964, longitude: -117.9142084 },
      transactions: [],
      price: "$$",
      location: {
        address1: "1800 S Harbor Blvd",
        address2: null,
        address3: "",
        city: "Anaheim",
        zip_code: "92802",
        country: "US",
        state: "CA",
        display_address: ["1800 S Harbor Blvd", "Anaheim, CA 92802"],
      },
      phone: "+17149711800",
      display_phone: "(714) 971-1800",
      distance: 3438.282963636829,
    },
    {
      id: "Vw1wC4Jrk3dTnr8V5uvFpA",
      alias: "hotel-indigo-anaheim-anaheim",
      name: "Hotel Indigo Anaheim",
      image_url:
        "https://s3-media2.fl.yelpcdn.com/bphoto/m80hUkXPpLuJWLffqw3e_A/o.jpg",
      is_closed: false,
      url: "https://www.yelp.com/biz/hotel-indigo-anaheim-anaheim?adjust_creative=E1Bhe26L4EzHaptqpuw8Ew&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=E1Bhe26L4EzHaptqpuw8Ew",
      review_count: 398,
      categories: [
        { alias: "hotels", title: "Hotels" },
        { alias: "venues", title: "Venues & Event Spaces" },
      ],
      rating: 4,
      coordinates: {
        latitude: 33.8037862387759,
        longitude: -117.913805717138,
      },
      transactions: [],
      price: "$$",
      location: {
        address1: "435 W Katella Ave",
        address2: "",
        address3: "",
        city: "Anaheim",
        zip_code: "92802",
        country: "US",
        state: "CA",
        display_address: ["435 W Katella Ave", "Anaheim, CA 92802"],
      },
      phone: "+17147727755",
      display_phone: "(714) 772-7755",
      distance: 3339.580285237273,
    },
  ],
  total: 1500,
  region: {
    center: {
      longitude: -117.8997802734375,
      latitude: 33.831467203681264,
    },
  },
};

// function renderHotelEl(){
// }

document.getElementById("submit").addEventListener("click", function (e) {
  // e;
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
        var urlEl = document.createElement("p");

        // var imgEl = document.createElement("img");
        // var imgUrl = `https://s3-media1.fl.yelpcdn.com/bphoto/${response.businesses[i].image_url}.png`;
        // imgEl.attr("src", imgUrl);

        nameEl.textContent = response.businesses[i].name;
        locationEl.textContent =
          "Address: " +
          response.businesses[i].location.display_address[0] +
          " " +
          response.businesses[i].location.display_address[1];
        phoneEl.textContent = "Phone Number: " + response.businesses[i].phone;
        urlEl.textContent = "Website: " + response.businesses[i].url;

        // imgEl.textContent = response.businesses[i].image_url

        info.append(nameEl, locationEl, phoneEl, urlEl);
      }
    })
    // info=businesses
    .catch((err) => {
      console.error(err);
      console.log("Loading Backup");
      for (var i = 0; i < backupData.businesses.length; i++) {
        var nameEl = document.createElement("h1");
        console.log(backupData.businesses[i].name);
        var locationEl = document.createElement("h2");
        var phoneEl = document.createElement("p");
        var urlEl = document.createElement("p");

        // var imgEl = document.createElement("img");
        // var imgUrl = `https://s3-media1.fl.yelpcdn.com/bphoto/${backupData.businesses[i].image_url}.png`;
        // imgEl.attr("src", imgUrl);

        nameEl.textContent = backupData.businesses[i].name;
        locationEl.textContent =
          "Address: " +
          backupData.businesses[i].location.display_address[0] +
          " " +
          backupData.businesses[i].location.display_address[1];
        phoneEl.textContent = "Phone Number: " + backupData.businesses[i].phone;
        urlEl.textContent = "Website: " + backupData.businesses[i].url;

        // imgEl.textContent = response.businesses[i].image_url

        info.append(nameEl, locationEl, phoneEl, urlEl);
      }
    });
});

// function renderHotelEl(response.businesses){
//   for (var i = 0; i < response.business.length; i++)
//     var name = response.businesses[i].name;
//     var location = response.businesses[i].location;
//     var phone = response.businesses[i].phone;
//     var img = response.businesses[i].image_url;
//     var url = response.businesses[i].url;

//     var hotelEl = document.createElement.("div")
//     hotelEl.classNaame = "hotel-card";
//     hotelEl.innerHTML =
//                 <header class="card-header">
//                   <p class="card-header-title">
//                     ${name}
//                   </p>
//                 </header>
//                 <figure class="image is-4by3">
//                   <img src="${img}" alt="hotel image">
//                 </figure>
//                 <div class="card-content">
//                 <div class="content">
//                   <p>${location}</p>
//                   <p>${phone}</p>
//                 </div>
//                 <footer class="card-footer">
//                   <button class="is-fullwidth is-medium button is-success">Favorite</button>
//                   <button class="is-fullwidth is-medium button is-success">Info</button>
//                 </footer>;
//     document.getElementById("hotel-container")appendChild(hotelEl); //change hotel-container to ID instead of class

// // $(document).ready(function () {
//   var hotel = $("#hotel-container");
// function renderHotel(data){

//   hotel.append(name, location, phone, image_url, url);
// }
// })
