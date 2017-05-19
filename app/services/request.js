require('es6-promise').polyfill();
require('isomorphic-fetch');
let baseurl = './';
if( process.env.NODE_ENV === `development` ) {
    baseurl = 'http://localhost:3000/interview/';
}
const options = {
    headers: {
        'content-type': 'application/json'
    },
    credentials: 'include'
};

export default function request(obj) {
    return fetch(baseurl + obj.url, {
        ...options,
        ...obj.options
    })
    .then((res) => res.json());
}
