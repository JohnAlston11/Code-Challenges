/*
INSTRUCTIONS:

{a,e,i,o,u,A,E,I,O,U}

Natural Language Understanding is the subdomain of Natural Language Processing where people used to design AI based 
applications have ability to understand the human languages. HashInclude Speech Processing team has a project named 
Virtual Assistant. For this project they appointed you as a data engineer (who has good knowledge of creating clean 
datasets by writing efficient code). As a data engineer your first task is to make vowel recognition dataset. 
In this task you have to find the presence of vowels in all possible substrings of the given string. For each 
given string you have to print the total number of vowels.

Input
str contains both lowercase and uppercase letter.

Output
Return the vowel sum

Example
In given sample test case, first string is "baceb" so the substrings are b, ba, bac, bace, baceb, a, ac, ace, aceb, c, ce, ceb, e, eb, b and the number of vowels in each substring are 0, 1, 1, 2, 2, 1, 1, 2, 2, 0, 1, 1, 1, 1, 0 and the total number is sum of all presence which is 16.

*/

/* WORKS */
function vowelRecognition(input){
    let count = 0;
    let sub = '';
  
    for(let i = 0; i < input.length; i++){
        sub = input.substring(i)
        for(let j = 0; j < sub.length; j++){
            let check = sub.substring(0, j+1).match(/[aeiou]/gi)
            if(check){
                count += check.length;
            }
        }
    }
    return count;
}