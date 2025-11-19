var h1 = document.createElement('h1');
h1.innerHTML = 'Hello from JS!'
console.log(h1);
document.body.appendChild(h1);


//importing value of a
// import array from './app.js';
import user from './app.js'
// console.log(array);
console.log(user);

//for importing named type 
import { arr } from "./app.js";
console.log(arr);