// Copyright (c) 2024 YA-androidapp(https://github.com/yzkn) All rights reserved.


const scrape = require('./scrape.js');


const result = scrape.scrape('秩父');

const jsonString = JSON.stringify(result, null, "\t")
console.log(jsonString.slice(0, 1000));
// console.log(jsonString);
