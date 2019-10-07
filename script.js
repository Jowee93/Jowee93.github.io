let btn1 = document.getElementById("btn1");
let joke = document.getElementById("joke");

btn1.addEventListener("click", function() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      console.log(data.value);
      let jokeValue = data.value;
      joke.innerHTML = jokeValue;
    });
});

let btn2 = document.getElementById("btn2");
let gif = document.getElementById("gif");

btn2.addEventListener("click", function() {
  //   debugger;
  $.ajax({
    url:
      "https://api.giphy.com/v1/gifs/random?api_key=2rVJ9AoEOwtPGEntimYqpIxldTpUQN3Z&tag=joker",
    method: "GET",
    success: function(results) {
      console.log(results);
      console.log(results.data);
      gif.setAttribute("src", results.data.image_url);
    },
    error: function(error) {
      console.log(`Error: ${error}`);
    }
  });
});

$.ajax({
  url: "https://api.chucknorris.io/jokes/random",
  method: "GET",
  success: function(results) {
    console.log(results);
  },
  error: function(error) {
    console.log(`Error: ${error}`);
  }
});

// api.openweathermap.org/data/2.5/weather?lat=35&lon=139
