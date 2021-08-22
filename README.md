# _Pig Latin Translator_

#### _This website will translate any passage to pig latin._

#### By _**Anna Clarke**_

## Technologies Used

* _HTNL_
* _CSS_
* _JavaScript_
* _jQuery_
* _Bootstrap_

## Description

_This website takes a passage entered by the user and displays it in pig latin._

## Setup/Installation Requirements

* _Clone this repository from Github to your desktop_
* _Navigate to the top of the directory_
* _Open directory in your text editor of choice_


## Known Bugs

* _Punctuation in the passage is not translated correctly._

## License

MIT

_Copyright (c) 2021 Anna Clarke_

## Contact Information

_Anna Clarke: annac.klingberg@gmail.com_

## Specifications

### Describe: pigLatin()

1. Test: It will return an empty string for an empty text input  
Code: pigLatin("   ");  
Expected Output: ""

2. Test: It  will return a single word starting with vowel (a, e, i, o, u) translated to pig latin  
Code: pigLatin("anthony");  
Expected Output: "nthonyway"

3. Test: It will return translated words beginning with vowels  
Code: pigLatin("anna anthony octopus");  
Expected Output: "nnaway nthonyway ctopusway"

4. Test: It will recognize vowels versus consonants and translate  
Code: pigLatin("the dog ate a orange");  
Expected Output: "hetay ogday teway way rgangeway"

5. Test: It will recognize qu versus vowels versus consonants and translate  
Code: pigLatin("quick dogs get apples");  
Expected Output: "ickquay ogsday etgay pplesway"

6. Test: recognized mixed cased strings  
Code: pigLatin("Quick dogs Get appples");  
Expected Output: "ickquay ogsday etgay pplesway"

7. Test: replace punctutaion in proper spot after translation of words  
Code: pigLatin("Quick dogs get apples.");  
Expected Output: "ickquay ogsday etgay pplesway."