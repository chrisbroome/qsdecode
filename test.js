import {qsdecode} from './qsdecode.js';

const queryString = "x=y&2=4&asdf=hijklmnop&qrstuv=wxyz"

console.log(JSON.stringify(qsdecode(queryString)));
