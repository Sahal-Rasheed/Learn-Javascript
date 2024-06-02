// Conditional Statements

// 1. if Statement

const num = 5;

if (num > 10) {
    console.log("Bigger than 10");
} else if (num < 5) {
    console.log("Smaller than 5");
} else {
    console.log("Between 5 and 10");
}

// 2. Switch Statement

const color = 'red';

switch (color) {
    case'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is neither red nor blue');
}