const $ = require('jquery');
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const date = new Date();
date.setDate(1);
const firstDay = date.getDay();
console.log($('td')[firstDay]);
const dayOfWeek = $('td')[firstDay].innerHTML = 1;
const currentMonth = date.getMonth();
console.log(currentMonth);
$('.month').html(monthNames[currentMonth]);

function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(),
                    anyDateInMonth.getMonth()+1,
                    0).getDate();}

console.log(daysInMonth(new Date));
for (var i = firstDay; i < daysInMonth(new Date) + 1; i ++) {
  $('td')[i].innerHTML = i;
}
