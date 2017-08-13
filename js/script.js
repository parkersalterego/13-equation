var pickNumber = prompt('Pick a number any number');

var multiplyBy4 = pickNumber * 4;

var multiplyBy5 = multiplyBy4 *5;

var divideBySelf = multiplyBy / pickNumber;

var subtractBy7 = multiplyBy5 - 7;


alert('your number is' + ' ' + pickNumber + ' ' + 'and now, we\'re going to multiply that by 4');
alert('That comes out to' + ' ' + multiplyBy4);

alert('your number is' + ' ' + multiplyBy4 + ' ' + 'and now, we\'re going to multiply that by 5');
alert('That comes out to' + ' ' + multiplyBy5);

alert('your number is' + ' ' + multiplyBy5 + ' ' + 'and now, we\'re going to divide that by' + pickNumber);
alert('That comes out to' + ' ' + divideBySelf);

alert('your number is' + ' ' + divideBySelf + ' ' + 'and now we\'re going to subtract 7');
alert('that comes out to' + ' ' + subtractBy7);
