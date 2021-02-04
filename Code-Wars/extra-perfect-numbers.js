/*
Extra perfect number is the number that first and last bits are set bits.

Given a positive integer N , Return the extra perfect numbers in range from 1 to N .

**extraPerfect(3)  ==>  return {1,3}

*Explanation:
(1)10 =(1)2
First and last bits as set bits.

(3)10 = (11)2
First and last bits as set bits.


**extraPerfect(7)  ==>  return {1,3,5,7}

*Explanation:
(5)10 = (101)2
First and last bits as set bits.

(7)10 = (111)2
First and last bits as set bits.


*/

const extraPerfect = (n) => {
    let arr = [];

    for(let i = 1; i <= n; i += 2){
        arr.push(i);
    }

    return arr;
}