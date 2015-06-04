// Challenge from http://developersleague.net/programming-challenge-1/
// 

var factorial = function(num) {
    if(num == 0) {
        return 1
    } else {
        return num * factorial(num - 1);
    }
}

var results = function(a, b) {
	var lower = 0;
	var higher = 0;

	if ((a < 25 && b < 25) || (a == b)) {
		return 0; // Checks for ties and scores less than 25
	} else if (a < b) {
		lower = a;
		higher = b;
	} else {
		lower = b;
		higher = a;
	}
	
	if (higher == 25 && lower < 24) {
		return factorial(24+lower)/(factorial(lower) * factorial(24));
		// PointsCLowerScore -> Calculates how many ways the points could be scored
		// Since the winning team had to have scored the last point, there is only one way 
		// for them to have the point, so it's factorial of 24, since there is only 1C1 way 
		// to get the last point for a win
	} else if ((higher == lower + 2) && (lower > 23)) {
		return (factorial(48)/(factorial(24)* factorial(24))) * (Math.pow(2, lower - 24));
		// Because there was a point when each team was at 24:24, this number is represented by
		// 48C24 (48 points, 24 points to choose from in terms of scoring.
		// Then multiply by 2^(lower score - 24) because from this point onward, there are
		// two different ways points can be distributed until a win occurs
	} 
}

console.log(results(3,25));
console.log(results(24,24));