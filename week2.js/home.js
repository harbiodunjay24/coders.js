let challenge= '30 Days Of JavaScript'
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(1));
console.log(challenge.substr(2));
console.log(challenge.includes());
console.log(challenge.split());
console.log(challenge.split(""));
let social='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
console.log(social.split(','));
let string = '30 Days Of JavaScript'
console.log(string.replace('JavaScript', 'Python')) 
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('j'));
console.log(challenge.lastIndexOf('a'));
let word ='You cannot end a sentence with because because because is a conjunction'
console.log(word.lastIndexOf('because'));
console.log(word.search('because'));
let challenges=' 30 Days Of JavaScript '
console.log(challenges.trim());
console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('JavaScript'));
console.log(challenge.match('a'));
let str =  '30 Days of' 
console.log(str.concat('JavaScript'));
console.log(challenge.repeat('2'));
let quote='There is no exercise better for the heart than reaching down and lifting people up.'
console.log(quote);
let mother_teresa="Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(mother_teresa);
let love='Love is the best thing in this world. Some found their love and some are still looking for their love.' 
console.log(love.match('love'));
let conjunctions = 'You cannot end a sentence with because because because is a conjunction'
console.log(conjunctions.match('because'));
let sentence='You cannot end a sentence with because because because is a conjunction'
console.log(sentence.charCodeAt('because'));
console.log(sentence.substring(30,55));
// Use console.log() and escape characters to print the following pattern.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125');
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof'10');
console.log(typeof 10);
let numstring="10"
console.log(typeof Number(numstring));
let num=10
console.log(typeof (numstring+num));
console.log(numstring==num);
// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(typeof parseFloat("9.8"));
let somethingelse=parseFloat("9.8")
console.log(Math.ceil(somethingelse));
let fav ='4.5'
console.log(typeof Math.floor(fav));
let py='python'
let jr='jargon'
console.log(py.includes('on')&&(jr.includes('on')));
let jargons='I hope this course is not full of jargon'
console.log(jargons.includes('jargon'));
console.log(Math.floor(Math.random()*101));
console.log(Math.floor(Math.random()*(100-50+1) + 50));
console.log(Math.floor(Math.random()*256));
let js="JavaScript"

let lengthOfJs=js.length
console.log(js[Math.floor(Math.random()*lengthOfJs)])
const sentences = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentences.replace(/[@|%|&|#|$|;|!|?|,]/g,""))
console.log(sentences.match("a").length);





// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let txt= 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
console.log(txt.match(/\d+/g,)) 

