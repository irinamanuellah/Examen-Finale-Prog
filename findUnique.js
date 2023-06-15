export function findUnique(numbers) {
  numbers.sort();
  if (numbers[0] !== numbers[1]) {
    return numbers[0];
  }else if(numbers.length==0){
    return undefined;
  }
   else {
    return numbers[numbers.length - 1];
  }
}