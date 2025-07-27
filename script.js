function firstChar(text) {
  // your code here
	 let result = text.replace(/\s+/g, '')
	return result[1]
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
