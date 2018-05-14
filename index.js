const Xray = require('x-ray');

const xray = Xray();
const courses = xray(
  'https://kiki.ccu.edu.tw/~ccmisp06/Course/5304.html',
  'table > tr:not(:first-child)',
  [{
    number: 'td:nth-child(2)',
    name: 'td:nth-child(4)',
    teacher: 'td:nth-child(5)',
  }]
);

courses.write('./dist/courses.json');
