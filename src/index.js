module.exports = function toReadable(number) {
    let dozen;
    let hundred;

    const numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    const dozens = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const arr10to19 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    if (number < 100) {
			dozen = Math.floor(number / 10)
        if (number < 10) {
            return numbers[number];
        } else if (number < 20) {
            return arr10to19[number % 10];
        } else {
            if (number % 10 == 0) {
                return dozens[dozen - 1];
            } else {
                return dozens[dozen - 1] + " " + numbers[number % 10];
            }
        }
    } else if (number < 1000) {
				hundred = Math.floor(number / 100);
				dozen = Math.floor(number / 10 % 10);
        if (dozen == 0) {
            if (number % 10 == 0) {
                return numbers[hundred] + " " + "hundred";
            } else {
                return (
                    numbers[hundred] +
                    " " +
                    "hundred " +
                    numbers[number % 10]
                );
            }
        } else if (dozen == 1) {
            return (
                numbers[hundred] + " " + "hundred " + arr10to19[number % 10]
            );
        } else if (dozen != 0) {
            if (number % 10 == 0) {
                return (
                    numbers[hundred] +
                    " " +
                    "hundred " +
                    dozens[dozen - 1]
                );
            } else {
                return (
                    numbers[hundred] +
                    " " +
                    "hundred " +
                    dozens[dozen - 1] +
                    " " +
                    numbers[number % 10]
                );
            }
        }
    } 
}
