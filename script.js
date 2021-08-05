
document.addEventListener('DOMContentLoaded', function(){

fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=b4cfe3333fbf02f20974b17f4729d756&language=en-US')
.then(response => response.json())
.then(data => {
    console.log(data);
})
fetch('https://api.themoviedb.org/3/watch/providers/regions?api_key=b4cfe3333fbf02f20974b17f4729d756&language=en-US')
.then(response => response.json())
.then(data => {
    console.log(data);
})
fetch('https://api.themoviedb.org/3/certification/movie/list?api_key=b4cfe3333fbf02f20974b17f4729d756')
.then(response => response.json())
.then(data => {
    console.log(data);
})
});
      


