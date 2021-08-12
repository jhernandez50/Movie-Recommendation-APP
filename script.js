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