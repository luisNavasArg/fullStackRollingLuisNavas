let url ="http://localhost:3000/libros";
let urldogs = "https://dog.ceo/api/breeds/list/all"
export let books = fetch(url)
.then(data=>data.json())
.then(result=>result)
.catch(err=>console.log(err));

export let dogs = fetch(urldogs)
.then(data=>data.json())
.then(result=>result)
.catch(err=>console.log(err));
