import { DateTime } from 'luxon';
import { Book } from './content.js';

export function displayContainer(item) {
  const disObj = new Book();
  disObj.updateSection(item);
}

export function displayDate() {
  let date = DateTime.now();
  date = date.setLocale('en-US').toLocaleString(DateTime.DATETIME_FULL);
  document.getElementById('time').innerHTML = `${date}`;
}