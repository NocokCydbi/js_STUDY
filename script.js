'use strict';
const books = document.querySelectorAll('.book');

books[0].before(books[1]);
books[2].before(books[4]);
books[5].before(books[2]);
books[2].before(books[5]);

document.body.style.backgroundImage = 'url("image/you-dont-know-js.jpg")';

const EditText = document.getElementsByTagName('a')[2];
EditText.textContent = 'Книга 3. this и Прототипы Объектов';
const adv = document.querySelector('.adv');
adv.remove();
const Book2TextEdit = books[0].getElementsByTagName('li');
Book2TextEdit[10].before(Book2TextEdit[2]);
Book2TextEdit[8].before(Book2TextEdit[6]);
Book2TextEdit[3].before(Book2TextEdit[5]);
Book2TextEdit[4].before(Book2TextEdit[6]);
const Book5TextEdit = books[5].getElementsByTagName('li');
Book5TextEdit[3].before(Book5TextEdit[9]);
Book5TextEdit[7].before(Book5TextEdit[2]);
Book5TextEdit[9].before(Book5TextEdit[5]);
const book6 = books[2].querySelectorAll('li');
const newChapter = document.createElement('li');
newChapter.textContent = 'Глава 8: За пределами ES6';
book6[8].append(newChapter);
