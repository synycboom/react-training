(async () => {})()
    .then(value => console.log(value));

(async () => 15)()
    .then(value => console.log(value));

(async () => {throw 'error'})()
    .catch(error => console.log(error));