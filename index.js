let Name = 'Evgeny Gubarevich';
let currentdate = new Date();
let nextdate = new Date('January 1,2023');
let tillNY = Math.ceil((nextdate-currentdate)/(24*60*60*1000));
console.log('My name is' + ' ' + Name, ', today is' + ' ' + currentdate, ', and' + ' ' + tillNY + ' ' + 'days till the New Year ');