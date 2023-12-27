Array.prototype.IndexAllArray = function(findvalue) {
	var array = this;
	var firstIndex = array.indexOf(findvalue);  //this command refers this class or this object 
	var lastIndex = array.lastIndexOf(findvalue);
	var allIndexList = [];

	while (firstIndex <= lastIndex) {
		if (findvalue == array[firstIndex]) {
			allIndexList.push(firstIndex);
		}
		firstIndex++;
	}
	return allIndexList;
};


String.prototype.IndexAllString = function(findvalue) {
	var string = this;
	var firstIndex = string.indexOf(findvalue);
	var lastIndex = string.lastIndexOf(findvalue);
	var output_list = [];

	if (firstIndex != -1) {
		for (let i=firstIndex; i < string.length; i++) {
			if (string[i] === findvalue[0]) {
				let found = true;

				for (let j=1; j<findvalue.length; j++) {
					if (string[i+j] != findvalue[j]) {
						found = false;
						break;
					}
				}

				if (found == true) {
					output_list.push(i);
				}
			}
		}
	}

	if (firstIndex == -1) {
		return 0;
	}
    return output_list;
};

