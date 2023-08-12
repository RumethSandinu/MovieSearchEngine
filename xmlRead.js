//Load XML data from server
function loadXMLDoc() {
  //XMLHttpRequest object
    var xmlhttp = new XMLHttpRequest();
    //callback function to handle the response
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Call the prefDetails function with the XML data as an argument
        prefDetails(this);
      }
    };
    // Specify the XML file to be fetched and make the request is asynchronous
    xmlhttp.open("GET", "FavouritesPage.xml", true);
    // Send the request to the server
    xmlhttp.send();
  }

  //process the XML data and create card elements for each movie
  function prefDetails(xml) {
    var i;
    // Get the XML document from the response
    var xmlDoc = xml.responseXML;
    var cardsContainer = document.getElementById("tableContainer");
    // Clear the existing content of the cards container
    cardsContainer.innerHTML = "";
    // Get all movie elements from the XML document
    var x = xmlDoc.getElementsByTagName("movie");
  
    // Loop through each movie element in the XML data
    for (i = 0; i < x.length; i++) {
      // Extract data from movie element
      var name = x[i].getElementsByTagName("name")[0]?.textContent;
      var year = x[i].getElementsByTagName("year")[0]?.textContent;
      var imdb = x[i].getElementsByTagName("imdb")[0]?.textContent;
      var rottenTomatoes = x[i].getElementsByTagName("rottenTomatoes")[0]?.textContent;
      var image = x[i].getElementsByTagName("image")[0]?.textContent; 
      // Create a card element for each movie
      var card = document.createElement("div");
      card.className = "card";
      // Create an image element for the movie poster
      var img = document.createElement("img");
        img.src = image; 
        img.alt = name;
        img.style.width = "200px"; 
        img.style.height = "200px"; 
      // Create a div element to hold the content of the card
      var cardContent = document.createElement("div");
      cardContent.className = "card-content";
      var movieName = document.createElement("h3");
      movieName.textContent = name;
      var movieYear = document.createElement("p");
      movieYear.textContent = "Year : " + year;
      var movieImdb = document.createElement("p");
      movieImdb.textContent = "IMDb : " + imdb;
      var movieRt = document.createElement("p");
      movieRt.textContent = "Rotten Tomatoes : " + rottenTomatoes;
      // Append movie details to the card content
      cardContent.appendChild(movieName);
      cardContent.appendChild(movieYear);
      cardContent.appendChild(movieImdb);
      cardContent.appendChild(movieRt);
      // Append the image and card content to the card element
      card.appendChild(img);
      card.appendChild(cardContent);
      // Append the card to the cards container
      cardsContainer.appendChild(card);
    }
  }



