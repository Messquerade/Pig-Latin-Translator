function pigLatin(text) {
  if (text.trim().length === 0) {
    return "";
  };


const wordArray = text.toLowerCase().split(" ");
let translatedString = "";

wordArray.forEach(function(element) {
  let firstLetter = element.charAt(0);
  if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
   element = element.slice(1) + "way";
  } else if (element.slice(0, 2) === "qu") {
    element = element.slice(2) + "quay";
  } else {
    element = element.slice(1) + firstLetter + "ay";
  }
  translatedString = translatedString + element + " ";
});
return translatedString.trim();
};

// pigLatin("quick dogs get apples");
// "uickqay ogsday etgay pplesway"


// if (element.includes(".")) {
  // let i = element.indexOf(".")
  // element.replace(".", "")
  // 
  // translate

  // element = element.slice(0, i) + "." + element.slice(i)
// }