'use strict';

const now = dayjs();
const summerStart = dayjs('2021-06-21');
const summerEnd = dayjs('2021-09-23');
const message = document.querySelector('#msg');
const text = document.querySelector('#text');

if (now.isBefore(summerStart)) {
  message.textContent = 'NE';
  text.textContent = 'Ještě si počkej!';
} else if (now.isAfter(summerEnd)) {
  message.textContent = 'NE';
  text.textContent = 'Léto je v pr....!';
} else {
  message.textContent = 'ANO';
  text.textContent = 'Je léto a já všechno v *** mám!';
}
