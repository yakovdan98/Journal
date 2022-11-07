import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Entry from './entry.js';


//Create a journaling website where a user can write entries including at least a title and body.
//Create Entry objects that include a method to return the number of words in the entry
//Then, add a separate method (or methods) to return the number of vowels and consonants in each entry
//Finally, add a method called getTeaser to return the first sentence of the entry. If the sentence is over 8 words, only display those first 8 words.

function handleFormSubmission(e) {
  e.preventDefault();
  const response = document.getElementById("response");
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  const entry = new Entry(title.trim(), body.trim());
  response.innerText = entry.wordCount();

  const consonantResponse = document.getElementById("consonant-response");
  const vowelResponse = document.getElementById("vowel-response");
  consonantResponse.innerText = entry.vowelConsonantCount()[1];
  vowelResponse.innerText = entry.vowelConsonantCount()[0];
  
  const teaser = entry.getTeaser();
  document.getElementById("teaser-response").innerText = teaser;
}

document.getElementById("journal-entry").addEventListener("submit", handleFormSubmission);