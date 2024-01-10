function searchMovie() {
    let moviename = document.getElementById("moviename").value
    if (moviename == '') {
        alert("Enter a movie name...")
    }
    else {
        console.log(moviename);
        try {
            fetch(`https://www.omdbapi.com/?apikey=df82801&t=${moviename}`)

                .then(data => data.json())
                .then(data => {
                    displaymovie(data);
                })
                .catch((error) => console.log("Error in fetching data", error))
        }
        catch {
            alert("Movie does not exist...")
        }
    }
}

function displaymovie(data) {
    console.log(data);

    let result = document.getElementById("result")
    if (data.Response === 'False') {
        result.innerHTML = `<div class="bg-black opacity-75 text-white p-3 m-3 fw-medium shadow rounded"><h2>${data.Error}</h2></div>`
    }
    else {
        result.innerHTML = `
           <div class="info">
           <img src="${data.Poster}" class="poster">
           <div>
               <h2>${data.Title}</h2>
               <div class="rating">
                  <i class="fa-solid fa-star text-warning"></i>
                  <h4>${data.imdbRating}</h4>
              </div>
              <div class="details">
                 <span>${data.Year}</span>
                 <span>${data.Runtime}</span>
              </div>
              <div class="genre">
                  <div>${data.Genre.split(",").join("</div><div>")}</div>
              </div>
           </div>
           </div>
           <h3>Plot :</h3>
           <p>${data.Plot}</p>
           <h3>Cast :</h3>
           <p>${data.Actors}</p>
           <h3>Director :</h3>
           <p>${data.Director}<p>
        `
    }
}









