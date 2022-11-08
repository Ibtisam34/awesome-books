/*eslint-disable*/
import Book from './modules/book.js';
import './modules/Arrow.js'
import { DateTime } from './modules/luxon.js';

const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.getElementById('current-date').innerHTML = currentDate;






