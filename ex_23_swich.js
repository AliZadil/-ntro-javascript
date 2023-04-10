/*
Print in the console the price of the room according to the following scheme:
Prince for Basic Room --> 50€
Price for Junior Suite Room --> 80€
Price for Master Suite --> 100€
Use the Switch statement.
*/

let roomtype = 'Master Suite';

switch (roomtype) {
    case 'Basic Room':
        console.log('50$')
        break;
    case 'Junior Suite Room':
        console.log('80$')
        break;
    case 'Master Suite':
        console.log('100$')
        break;
    default:
        console.log('Check room type')
        break;
}