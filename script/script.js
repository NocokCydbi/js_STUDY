'use strict';
const output = document.getElementById('output');

const getData = (url) => {
    let arr = [];
    return fetch(url)
    .then((response) => {
        if(response.status !== 200){
            throw new Error('status network is not 200');
        }
        return (response.json());
    })
    .then((response) => {
        arr.push(response);
        outputPhotos(arr);
    })
    .catch((error) => {
        console.error(error);
    });
    
};

const outputPhotos = (data) => {
    data.forEach((item) => {
    output.insertAdjacentHTML("beforebegin",
    `<h4>${item.title}</h4>
    <img src="${item.thumbnailUrl}" alt="${item.title}">`);
    });
    
     
};

const oneImg = getData('https://jsonplaceholder.typicode.com/photos/1'),
    twoImg = setTimeout(() => {getData('https://jsonplaceholder.typicode.com/photos/2');
}, 0);
    

