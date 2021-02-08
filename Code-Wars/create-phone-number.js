/**
 * Write a function that accepts an array of 10 integers (between 0 and 9), 
 * that returns a string of those numbers in the form of a phone number.
 * 
 * Example:
 * 
 * createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
 */

const createPhoneNumber = (numbers) => {
    let areaCode = '';
    let phone = '';
  
    for(let i = 0; i < numbers.length; i++){
        if(areaCode.length !== 3){
            areaCode += numbers[i];
            continue;
        }
        if(phone.length === 3){
            phone += "-" + numbers[i];
            continue;
        }
        phone += numbers[i];
    }
    return `(${areaCode}) ${phone}`
}

/**
 * 
 * Better solution
 * More Practice
 */
let createPhoneNumber = (numbers) => {
    let format = "(xxx) xxx-xxxx";
    
    for(let i = 0; i < numbers.length; i++){
      format = format.replace('x', numbers[i]);
    }
    
    return format;
}