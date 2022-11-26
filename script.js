let numOrStr = prompt('input number or string');
switch (numOrStr && String(+numOrStr)) {
    case null:
        console.log('Bи скасували');
        break;
    case "":
        console.log('Empty String');
        break;
    case 'NaN':
        console.log("number is Ba_NaN");
        break;
    default:
        console.log('OK!')
}