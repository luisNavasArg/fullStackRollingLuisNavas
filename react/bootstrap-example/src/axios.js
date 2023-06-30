import axios from 'axios';

export let traeData = axios("https://dog.ceo/api/breeds/list/all")
.then(result=>result)
.catch(err=>console.log(err))