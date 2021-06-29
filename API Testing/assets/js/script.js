// Write a fetch request to the Giphy API
// Then log the response in the console

var key = "1c0b6d20"
//"http://www.omdbapi.com/?t=die+hard&apikey="+key

var url = "https://api.openbrewerydb.org/breweries?by_page=10&by_dist=" //by_type=brewpub&

var url2 = "http://www.mapquestapi.com/geocoding/v1/address?key=i59AhjaYZTQaOPj86iKkHTeoACIvMK7I&location=Arlington,VA"

fetch(url2)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log(response);

        console.log(response.results[0].locations[0].latLng);

        var lat = JSON.stringify(response.results[0].locations[0].latLng.lat);

        var lng = JSON.stringify(response.results[0].locations[0].latLng.lng);

        console.log(lat,lng);

        url = url +lat+","+lng ;

        console.log(url);

        fetch(url)
            .then(function(response){
                return response.json();
            })
            .then(function(response){
                console.log(response);

                var responseContainerEl = document.querySelector("#responsive-container");

                var breweries = [];

                for (var i = 0 ; i < response.length ; i++) {
                    breweries[i] = [];

                    breweries[i][0] = document.createElement("h3");

                    breweries[i][0].textContent = response[i].name;

                    breweries[i][1] = document.createElement("p");

                    breweries[i][1].textContent = response[i].brewery_type.toUpperCase();
                    
                    breweries[i][2] = document.createElement("p");
                    
                    breweries[i][2].textContent = response[i].street + ", " + response[i].city + ", " + response[i].state + " " + response[i].postal_code;

                    responseContainerEl.appendChild(breweries[i][0]);
                    
                    responseContainerEl.appendChild(breweries[i][1]);

                    responseContainerEl.appendChild(breweries[i][2]);
                }
            
            })

    })