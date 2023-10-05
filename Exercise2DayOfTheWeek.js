let dayNumber = 4;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
      console.error('wrong input for the weekday try again');
};
if (dayNumber <=7 && dayNumber >=1)
console.log(`Today is ${dayName} 
Input day: ${dayNumber}`);