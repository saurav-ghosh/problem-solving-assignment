// Convert kilometer to Meter

function kilometerToMeter(kilometer) {

     //Calculate meter
    var meter = kilometer * 1000;

    //Error massage for negative Distance
    if (kilometer < 1){
        return 'Distance should not be 0 and negative';
    }
    return meter;
}



//Calculate a Shopping  Budget

function budgetCalculator(watch, phone, laptop) {

    // Calculate watch, phone and laptop's Quantity
    var totalPrize = watch * 50 + phone * 100 + laptop * 500;

    // Error massage for negative Quantity
    if (watch < 0) {
        return 'Quantity should not be negative';
    }
    if(phone < 0){
        return 'Quantity should not be negative'
    }
    if(laptop < 0){
        return 'Quantity should not be negative'
    }
    return totalPrize;
}



//Calculate a hotel cost

function hotelCost(day) {

    // Initial/default Cost is 0
    var totalCost = 0;

    // If day will 1-10, 11-20 and 20-infinite the cost for each day will be 100, 80 and then 50 
    if (day <= 10) {
        totalCost = day * 100;
    } else if (day <= 20) {
        var firstTerm = 10 * 100;
        var remainingDay = day - 10;
        var secondTerm = remainingDay * 80;
        totalCost = firstTerm + secondTerm;
    } else {
        var firstTerm = 10 * 100;
        var secondTerm = 10 * 80;
        var remainingDay = day - 20;
        var thirdTerm = remainingDay * 50;
        totalCost = firstTerm + secondTerm + thirdTerm;
    }

    //Error massage for negative value
    if (day < 0) {
        return 'Day should not be negative';
    }
    return totalCost;
}



//Find the largest element of an array

function megaFriend(friends) {

    // Default longest string is Empty
    var longest = "";

    //iteration for each element to find the longest element
    for (var i = 0; i < friends.length; i++) {
        var element = friends[i];
        if (element.length > longest.length) {
            longest = element;
        }
    }

    //Error massage for empty array
    if (friends == "") {
        return 'Empty array is not granted here';
    }
    return longest;
}