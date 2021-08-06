
document.addEventListener('DOMContentLoaded', function(){

fetch('https://api.themoviedb.org/3/watch/providers/regions?api_key=b4cfe3333fbf02f20974b17f4729d756&language=en-US')
.then(response => response.json())
.then(data => {
    console.log(data);
})
fetch('https://api.themoviedb.org/3/discover/movie?api_key=b4cfe3333fbf02f20974b17f4729d756&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
.then(response => response.json())
.then(data => {
    console.log(data);
})
fetch("https://ott-details.p.rapidapi.com/getPlatforms?region=MX", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "5bde7cc5c6msh2b37c367dd44fa4p1a0d67jsnf2293b402fd5",
		"x-rapidapi-host": "ott-details.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(data => {
    console.log(data);
});
fetch("https://imdb8.p.rapidapi.com/title/get-ratings?tconst=tt0944947", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "5bde7cc5c6msh2b37c367dd44fa4p1a0d67jsnf2293b402fd5",
		"x-rapidapi-host": "imdb8.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(data => {
    console.log(data);

});

});
      


