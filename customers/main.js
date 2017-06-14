
(function fetchUser() {
  'use strict';

  const html = `
    <h1>Internal Company Directory</h1>
  `
  document.querySelector(".customers").insertAdjacentHTML('beforebegin', html)

  for (var i = 1; i <= 12; i++) {

  fetch('https://randomuser.me/api/')

    .then(function(response){
      return response.json()
    })
    .then(function(json){
      const picture = json.results[0].picture.medium;
      const nameFirst = json.results[0].name.first;
      const nameLast = json.results[0].name.last;
      const email = json.results[0].email;
      const street = json.results[0].location.street;
      const city = json.results[0].location.city;
      const state = json.results[0].location.state;
      const zipCode = json.results[0].location.postcode;
      const phone = json.results[0].phone;

      const name = nameFirst + " " + nameLast;
      const address = street + " " + city + "," + " " + state + " " + zipCode;

      const html = `
        <div class = "user" id="${name}">
          <img src="${picture}" alt="${name}'s Picture">
          <h2>${name}</h2>
          <hr>
          <h3>${email}</h3>
          <div class = "locationInfo">
            <p>${address}</p>
          </div>
          <h4>${phone}</4>
        </div>
      `
    document.querySelector(".customers").insertAdjacentHTML('afterbegin', html)
    })
  }


  // Test This When You Can: See if you can get this to work. We want to load images faster by calling on the API
  // only once via the results url. We'll need to loop through the array that is formed and assign new
  // new names to info.


  // fetch('https://randomuser.me/api/?results=12')
  //   // Gets info from API
  //   .then(function(response){
  //     return response.json()
  //     // Sets up response info to be processed as JSON.
  //     // Info ready to be parsed.
  //   })
  //   .then(function(json){
  //     console.log("data", json)
  //     for(let i=0; i <= json.length; i++){
  //
  //       const picture = json[i].results[j].picture.medium;//Loop for size
  //       const nameFirst = json[i].results[j].name.first;
  //       const nameLast = json[i].results[j].name.last;//Loop for first and last
  //       const email = json[i].results[j].email;
  //       const street = json[i].results[j].location.street;
  //       const city = json[i].results[j].location.city;
  //       const state = json[i].results[j].location.state;
  //       const zipCode = json[i].results[j].location.postcode;//Loop for location
  //       const phone = json[i].results[j].phone;
  //
  //       const name = nameFirst + " " + nameLast;
  //       const address = street + " " + city + "," + " " + state + " " + zipCode;
  //
  //       const html = `
  //         <div class = "user" id="${name}">
  //           <img src="${picture}" alt="${name}'s Picture">
  //           <h2>${name}</h2>
  //           <h3>${email}</h3>
  //           <div class = "locationInfo">
  //             <p>${address}</p>
  //           </div>
  //           <h4>${phone}</4>
  //         </div>
  //       `
  //     document.querySelector(".customers").insertAdjacentHTML('afterbegin', html)
  //     }
  //   })
})();
