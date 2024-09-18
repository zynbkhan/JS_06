//Question 1
function showPowerResult() {
    var result = power(2, 3); 
    document.write("Power(2, 3): " + result + "<br>");
}

function power(a, b) {
    var result = 1;
    for (var i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}

showPowerResult();

// Question # 2:
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;  
    } else {
        return false; 
    }
}
var year = 2024;
document.write("Is 2024 a leap year?: " + isLeapYear(year) + "<br>"); 


// Question # 3:
function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}
function calculateArea(a, b, c) {
    var S = calculateSemiPerimeter(a, b, c); 
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c)); 
    return area;
}
var a = 5;
var b = 6;
var c = 7;
document.write("Area of triangle: " + calculateArea(a, b, c) + "<br>"); 


// Question # 4:
function calculateAverage(marks1, marks2, marks3) {
    return (marks1 + marks2 + marks3) / 3;
}
function calculatePercentage(marks1, marks2, marks3, totalMarks) {
    var obtainedMarks = marks1 + marks2 + marks3;
    return (obtainedMarks / totalMarks) * 100;
}
function mainFunction(marks1, marks2, marks3, totalMarksPerSubject) {
    var totalMarks = totalMarksPerSubject * 3;
    var average = calculateAverage(marks1, marks2, marks3);
    var percentage = calculatePercentage(marks1, marks2, marks3, totalMarks);
    document.write(`Average Marks: ${average}<br>`);
    document.write(`Percentage: ${percentage.toFixed(2)}%<br>`);
}
var marks1 = 85;
var marks2 = 90;
var marks3 = 88;
var totalMarksPerSubject = 100;
mainFunction(marks1, marks2, marks3, totalMarksPerSubject);


// Question # 5:
function customIndexOf(sentence, char) {
    if (char.length !== 1) {
        throw new Error("The 'char' parameter must be a single character.");
    }
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] === char) {
            return i;
        }
    }
    return -1;
}
var sentences = "Hello, World!";
document.write("Index of 'W': " + customIndexOf(sentences, 'W') + "<br>"); // Output: 7
document.write("Index of 'z': " + customIndexOf(sentences, 'z') + "<br>"); // Output: -1


// Question # 6:
function removeVowels(sentence) {
    var vowelsPattern = /[aeiouAEIOU]/g;
    return sentence.replace(vowelsPattern, '');
}
var sentence = "Hello, World!";
document.write("After removing vowels: " + removeVowels(sentence) + "<br>"); // Output: "Hll, Wrld!"


// Question # 7:
function countDoubleVowelOccurrences(text) {
    var vowels = 'aeiouAEIOU';
    let count = 0;
    for (var i = 0; i < text.length - 1; i++) {
        var currentChar = text[i];
        var nextChar = text[i + 1];
        if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
            count++;
        }
    }
    return count;
}
var text = "Pleases read this application and give me gratuity";
document.write("Number of double vowels: " + countDoubleVowelOccurrences(text) + "<br>"); 


// Question # 8:
function toMeters(km) {
    return km * 1000;
}
function toFeet(km) {
    return km * 3280.84;
}
function toInches(km) {
    return km * 39370.1;
}
function toCentimeters(km) {
    return km * 100000;
}
var distanceInKm = prompt("Enter the distance between two cities in kilometers:");
document.write(`Distance in meters: ${toMeters(distanceInKm)} m<br>`);
document.write(`Distance in feet: ${toFeet(distanceInKm)} ft<br>`);
document.write(`Distance in inches: ${toInches(distanceInKm)} in<br>`);
document.write(`Distance in centimeters: ${toCentimeters(distanceInKm)} cm<br>`);


// Question # 9:
function calculateOvertimePay(hoursWorked) {
    var standardHours = 40;
    var overtimeRate = 12.00;
    if (hoursWorked > standardHours) {
        var overtimeHours = hoursWorked - standardHours;
        var overtimePay = overtimeHours * overtimeRate;
        return overtimePay;
    } else {
        return 0;
    }
}
var hoursWorked = 50; 
document.write(`Overtime Pay: Rs. ${calculateOvertimePay(hoursWorked)}<br>`);


// Question # 10:
function calculateNotes(amount) {
    amount *= 100;

    var note100 = 100;
    var note50 = 50;
    var note10 = 10;

    var num100Notes = Math.floor(amount / note100);
    amount %= note100;

    var num50Notes = Math.floor(amount / note50);
    amount %= note50;

    var num10Notes = Math.floor(amount / note10);

    return {
        '100 Rupee Notes': num100Notes,
        '50 Rupee Notes': num50Notes,
        '10 Rupee Notes': num10Notes
    };
}
var amountInHundreds = 17; 
var notes = calculateNotes(amountInHundreds);

document.write(`For Rs. ${amountInHundreds * 100}, the cashier should give:<br>`);
document.write(`100 Rupee Notes: ${notes['100 Rupee Notes']}<br>`);
document.write(`50 Rupee Notes: ${notes['50 Rupee Notes']}<br>`);
document.write(`10 Rupee Notes: ${notes['10 Rupee Notes']}<br>`);

