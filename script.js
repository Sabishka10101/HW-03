let numOrStr = prompt('input number or string');
console.log(numOrStr);
switch (numOrStr) {
    case null:
        console.log('Bи скасували');
        break;
    case '':
        console.log('Empty String');
        break;
    default:
        console.log('OK!')
}