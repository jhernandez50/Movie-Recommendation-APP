//Variables
$(function(){
	getResponce()
})

$("#button-search").click(function(){
	getResponce()
})

const getResponce=()=>{
	const category = $("#ddn-category :selected").val();
	const country = $("#ddn-country :selected").val();
	const service = $("#ddn-stream :selected").val();

//API's Website fetch information
const options = {
	method: 'GET',
	url: 'https://streaming-availability.p.rapidapi.com/search/basic',
	params: {
	  country: country,
	  service: service,
	  type: 'movie',
	  genre: category,
	  page: '3',
	  language: 'en'
	},
	headers: {
	  'x-rapidapi-key': 'cd878e4e8emsh294d7a87d6c753bp120aa3jsnf1fe1c974034',
	  'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
	}
  };
  
  axios.request(options).then(function (response) {
	  console.log(response.data.results);
	  appendResponse(response.data.results);
  }).catch(function (error) {
	  console.error(error);
  });
}

const appendResponse=(data)=>{
	const ranking = $("#ddn-ranking :selected").val();
	
	let markup;
	if($('#movie-container').has('div').length>0){
		$('#movie-container').empty();
	};
	console.log(sortDataByRanking(data,ranking));

	sortDataByRanking(data,ranking).map(movie=>{
		const {title,overview,imdbVoteCount,year,imdbRating}=movie;
		const url = movie.posterURLs[154];
		markup= buildMarkup(url,title,overview,imdbVoteCount,imdbRating/10,year);
	$('#movie-container').append(markup);
	})
}

const sortDataByRanking=(data,ranking)=>{
	console.log(ranking)
	let sortedData=[];
	data.map(movie=>{
		console.log(ranking)
		if(movie.imdbRating/10>=ranking){
			sortedData.push(movie);
		}
	})
	return sortedData
}

const buildMarkup=(url,title,overview,votes,rating,year)=>{
	return `<div class="movie-card">
	<div class="columns">
	  <div class="column is-one-quarter">
		<img style="display: block;" class="mx-auto" src=${url} alt="">
	  </div>
	  <div class="column is-four-fifth">
		<h3 class="sub-heading1 mb-2">${title}</h3>
		<p class="text-long">${overview}</p>
		  <div class="columns">
			<div class="column is-one-fifth">
				<h3 class="sub-heading2 mt-3">Year: <span>${year}</span></h3>
			</div>
			<div class="column is-one-fifth">
			  <h3 class="sub-heading2 mt-3">Rating: <span>${rating}/10</span></h3>
			</div>
			<div class="column is-one-fifth">
			  <h3 class="sub-heading2 mt-3">Votes: <span>${votes}</span></h3>
			</div>
		  </div>
	  </div>
	</div>
  </div>`
}