import { isModuleDeclaration } from "@babel/types";

/* Given an array A of non-negative integers, return an array 
consisting of all the even elements of A, followed by all the 
odd elements of A. You may return any answer array that satisfies this condition. */

function sortArrayByParity(A) {
  return [...A.filter(num => num % 2 == 0),...A.filter(num => num % 2 !== 0)]
  // let evenArray = [];
  // let oddArray = [];
  // for(let num of A) {
  //   if(num % 2 == 0) {
  //     evenArray.push(num)
  //   } else {
  //     oddArray.push(num)
  //   }
  // }
  // return [...evenArray,...oddArray]
}

module.exports = sortArrayByParity;