//Create a journaling website where a user can write entries including at least a title and body.
//Create Entry objects that include a method to return the number of words in the entry
//Then, add a separate method (or methods) to return the number of vowels and consonants in each entry
//Finally, add a method called getTeaser to return the first sentence of the entry. If the sentence is over 8 words, only display those first 8 words.
export default function Entry(title, body) {
  this.title = title;
  this.body = body;
  
}

Entry.prototype.getTeaser = function(){
  let sentance = this.body.split(".");
  let words = sentance[0].split(" ");
  if(words.length > 8){
    const output = words.slice(0,8);
    return output.join(" ") + ".";
  }
  return sentance[0] + ".";
}

Entry.prototype.wordCount = function() {
  const words = this.body.split(" ");
  return words.length;
};

Entry.prototype.vowelConsonantCount = function() {
  let countTotalVowels = 0;
  let countConsonants = 0;
  
  for (const word of this.body.split(" ")) {
    let punctuationCount = 0;
    let vowelWordCount = 0;
    for (const character of word) {
      if (["a", "e", "i", "o", "u"].includes(character)) {
        vowelWordCount++; 
      }
      else if ([",",".","'", "!", "?", ":"].includes(character)){
        punctuationCount++;
      }
    }
    countConsonants += word.length - vowelWordCount - punctuationCount;
    countTotalVowels += vowelWordCount;
  }
  return [countTotalVowels, countConsonants];
};