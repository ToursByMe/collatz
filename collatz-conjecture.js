 
 /* export const steps = (n) =>{
if(n < 0 || n < 1)
  throw 'Only positive numbers are allowed!';
  let addNumber = 0;
while ( n > 1){
  if(n % 2 === 0){
    n /= 2;
  }else{
    n = (n * 3) + 1;
}

    addNumber++;
  }
    return addNumber;
 }; */
 /*********************************************************************************/
/*  function collatz(n,sequence) {
  var sequence = sequence || [n]; // the sequence should be an array //or start with first value
  if (n%2 === 0) {// n is even
    m = n/2;
  } else { // n is odd
    m = 3*n + 1;
  }
  sequence.push(m); // add the current value to the sequence
  if (m === 1) { // sequence has reached the end
    return "Sequence took " + sequence.length + " steps";
    } else { // carry on by invoking the sequence again
      return collatz(m,sequence);
    }
}

collatz(18); */

 /*******************************************************************************/
 export const steps = (n) =>{
  if(n < 0 || n < 1)
    throw 'Only positive numbers are allowed';
    let addNumber = 0;
  while (n !== 1){
  n % 2 === 0 ? n /= 2 : n = (n * 3) + 1;
      addNumber++;
    }
      return addNumber;
   };

  