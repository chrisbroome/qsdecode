var qsdecode = require('./qsdecode');

var queryString = "x=y&2=4&asdf=hijklmnop&qrstuv=wxyz"

console.log(JSON.stringify(qsdecode(queryString)));
