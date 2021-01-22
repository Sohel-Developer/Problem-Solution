//kilometer To Meter Calculator

function kilometerToMeter(kilometer) {
	if (kilometer >= 0) {
		var meter = kilometer * 1000;

		return meter;
	} else {
		return "Negative value not allow";
	}
}

//Shopping Budget Calculator

function budgetCalculator(watch, phone, laptop) {
	if (
		typeof watch == "number" &&
		watch >= 0 &&
		typeof phone == "number" &&
		phone >= 0 &&
		typeof laptop == "number" &&
		laptop >= 0
	) {
		//Calculate Different Products
		var watchPrice = watch * 50;
		var phonePrice = phone * 100;
		var laptopPrice = laptop * 500;

		//Total Price Calculate
		var TotalPrice = watchPrice + phonePrice + laptopPrice;

		return TotalPrice;
	} else {
		return "Pleace input correct values";
	}
}

//Hotel Cost Calculate

function hotelCost(day) {
	if (typeof day == "number" && day >= 0) {
		if (day <= 10) {
			// Calculate cost if day is less than 11
			var cost = day * 100;

			return cost;
		} else if (day <= 20) {
			// Calculate cost if day is less than 21
			var firstTenDays = 10 * 100;
			var remainingDays = day - 10;
			var cost = firstTenDays + remainingDays * 80;

			return cost;
		} else {
			// Calculate cost if day is 21 or more
			var firstTenDays = 10 * 100;
			var secondTenDays = 10 * 80;
			var remainingDays = day - 20;
			var cost = firstTenDays + secondTenDays + remainingDays * 50;

			return cost;
		}
	} else {
		return "Please input correct day number";
	}
}

// Find the largest name in  array
function megaFriend(friendsArray) {
	if (Array.isArray(friendsArray) && friendsArray.length > 0) {
		var largestName = friendsArray[0];

		for (var i = 1; i < friendsArray.length; i++) {
			// Check if currentName is actually a string or not
			if (typeof friendsArray[i] == "string") {
				var currentName = friendsArray[i];

				// Check if largestName's length is smaller than currentName's length or not
				if (largestName.length < currentName.length) {
					largestName = currentName;
				}
			} else {
				return "Please provide an array with only string";
			}
		}

		return largestName;
	} else {
		return "Please provide an array with miminum one value";
	}
}
