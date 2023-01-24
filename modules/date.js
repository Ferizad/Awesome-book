import { DateTime } from './luxon.js';

let now = DateTime.now();
now = now.toLocaleString(DateTime.DATETIME_MED);
const date = document.querySelector('.date');
date.innerHTML = now;
