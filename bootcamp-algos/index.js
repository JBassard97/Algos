// Begin algorithms for Bootcamp
// TODO: FIND LARGEST NUM IN ARRAY
var maxNum = function (array) {
  let maxNumber = Math.max(...array);
  return maxNumber;
};
// TODO: ADD ALL NUMS IN ARRAY
var sumArray = function (array) {
  let total = array.reduce((acc, num) => acc + num, 0);
  return total;
};
// TODO: COUNT VOWELS IN STRING
var vowelCount = function (str) {
  let voweltotal = Array.from(str.toLowerCase()).filter((char) =>
    "aeiou".includes(char)
  ).length;
  return voweltotal;
};
// TODO: RETURN FACTORIAL OF NUM (6! = 1*2*3*4*5*6)
var factorial = function (num) {
  var result = 1;
  for (var i = num; i > 1; i--) {
    result = result * i;
  }
  return result;
};
// TODO: CHECK IF STRING IS A PALINDROME
var isPalindrome = function (str) {
  var reversedString = str.split("").reverse().join("");
  if (reversedString === str) {
    return true;
  } else {
    return false;
  }
};
// TODO: CAPITALIZE JUST 1ST LETTER IN STRING
var capitalizeFirstLetterCase = function (string) {
  let capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
  return capitalizedString;
};
// TODO: CAPITALIZE ALL WORDS IN STRING
function capitalizeEveryWordCase(str) {
  let words = str.split(" ");
  for (let word of words) {
    words[words.indexOf(word)] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return words.join(" ");
}
// TODO: CREATE A MAP OF ALL CHARS IN A STRING AND THEIR FREQUENCIES
var characterCount = function (str) {
  var charMap = {};
  for (let char of str) {
    if (char in charMap) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  return charMap;
};
// TODO: MULTIPLY 2 LARGEST NUMS IN AN ARRAY
var productOfLargestTwo = function (arr) {
  var largest = null;
  var secondLargest = null;

  for (var currentNumber of arr) {
    if (currentNumber > largest || largest === null) {
      secondLargest = largest;
      largest = currentNumber;
    } else if (currentNumber > secondLargest || secondLargest === null) {
      secondLargest = currentNumber;
    }
  }
  return largest * secondLargest;
};
// TODO: TURN ANY STRING INTO camelCase
var camelCase = function (str) {
  var result = "";
  var words = str.toLowerCase().split(" ");
  for (var word of words) {
    var letters = word.split("");
    if (result.length > 0) {
      letters[0] = letters[0].toUpperCase();
    }
    result += letters.join("");
  }
  return result;
};
// TODO: GIVEN AN ARRAY AND A TARGET, FIND THE INDEX OF THE TARGET IF PRESENT
var linearSearch = function (arr, target) {
  var index = 0;
  for (var element of arr) {
    if (element === target) {
      return index;
    }
    index++;
  }
  return -1;
};
// TODO: CHECK IF AN ARRAY HAS ONLY UNIQUE NUMBERS/ NO REPEATS
var hasOnlyUniqueNumbers = function (arr) {
  var numMap = {};
  for (var currentNumber of arr) {
    if (numMap[currentNumber]) {
      return false;
    }
    numMap[currentNumber] = true;
  }
  return true;
};
// TODO: CHECK IF 2 STRINGS ARE ANAGRAMS OF EACH OTHER ("HELLO" == "EHLLO")
var isAnagram = function (strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }
  var aLetterMap = {};
  var bLetterMap = {};
  var strLength = strA.length;
  for (var i = 0; i < strLength; i++) {
    var aLetter = strA[i];
    var bLetter = strB[i];
    aLetterMap[aLetter] = (aLetterMap[aLetter] || 0) + 1;
    bLetterMap[bLetter] = (bLetterMap[bLetter] || 0) + 1;
  }
  for (var key in aLetterMap) {
    if (aLetterMap[key] !== bLetterMap[key]) {
      return false;
    }
  }
  return true;
};
// TODO: Write code to create a function that accepts an array of numbers
// TODO: Each number represents the duration of a song in minutes
// TODO: Return the maximum number of songs from the list that can fit in a 60 minute playlist
var mostSongsInPlaylist = function (arr) {
  // Sort the array of song durations in ascending order
  const sortedDurations = arr.sort((a, b) => a - b);
  let totalDuration = 0;
  let maxSongs = 0;
  // Iterate through the sorted durations to find the maximum number of songs
  for (let duration of sortedDurations) {
    if (totalDuration + duration <= 60) {
      // If adding the current song duration keeps the total duration under or equal to 60
      totalDuration += duration;
      maxSongs++;
    } else {
      // If adding the current song duration exceeds 60, stop iterating
      break;
    }
  }
  return maxSongs;
};
// TODO: CHECK IF A NUMBER IS A PERFECT SQUARE (without Math.sqrt)
var isPerfectSquare = function (num) {
  if (num < 0) {
    // Negative numbers are not perfect squares
    return false;
  }
  // Check if the square of an integer is equal to the given number
  for (let i = 0; i <= num; i++) {
    if (i * i === num) {
      return true;
    } else if (i * i > num) {
      // If the square of i exceeds the given number, it's not a perfect square
      return false;
    }
  }
  return false; // For numbers greater than 0 that are not perfect squares
};
// TODO: RETURN THE NUMBER OF X'S IN THIS 2D ARRAY
// var arr = [
//   ["X", "O", "O", "O", "X", "O"],
//   ["O", "X", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "X", "X"],
//   ["O", "O", "O", "O", "O", "O"],
// ];
var arraySearch2D = function (arr) {
  let count = 0;
  // Iterate through each row
  for (let i = 0; i < arr.length; i++) {
    // Iterate through each column in the current row
    for (let j = 0; j < arr[i].length; j++) {
      // Check if the current element is "X"
      if (arr[i][j] === "X") {
        count++;
      }
    }
  }
  return count;
};
// End algorithms for bootcamp
