## Describe: pigLatin()

### Test: It will return an empty string for an empty text input
### Code: pigLatin("   ");
### Expected Output: ""

### Test: It  will return a single word starting with vowel (a, e, i, o, u) translated to pig latin
### Code: pigLatin("anthony");
### Expected Output: "nthonyway"

### Test: It will return translated words beginning with vowels
### Code: pigLatin("anna anthony octopus");
### Expected Output: "nnaway nthonyway ctopusway"

### Test: It will recognize vowels versus consonants and translate
### Code: pigLatin("the dog ate a orange");
### Expected Output: "hetay ogday teway way rgangeway"

### Test: It will recognize qu versus vowels versus consonants and translate
### Code: pigLatin("quick dogs get apples");
### Expected Output: "ickquay ogsday etgay pplesway"

### Test: recognized mixed cased strings
### Code: pigLatin("Quick dogs Get appples");
### Expected Output: "ickquay ogsday etgay pplesway"

### Test: replace punctutaion in proper spot after translation of words
### Code: pigLatin("Quick dogs get apples.");
### Expected Output: "ickquay ogsday etgay pplesway."

Specific Behaviors:
1. take the text as the argument
2. use split(" ") to make an array from text string
3. loop through array
4. for each element identify if it starts with a vowel, or a consonant, or with qu
5. if it begins with a vowel, then add 'way' to the end of the word
6. if it begins with a consonant, then remove first letter and add 'first letter + ay' to the end of the word
7. if it begins with 'qu', then remove 'qu' and add 'quay' to the end of the word
8. return string with changed elements