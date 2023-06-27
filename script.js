function isTriangle(l1, l2, l3) {
  if (l1 + l2 > l3 &&
      l2 + l3 > l1 &&
      l1 + l3 > l2 &&
      l1 > 0 && l2 > 0 && l3 > 0) {
    return true;
  } else {
    return false;
  }
}

function largeString(arr, R) {
  let stringResult = "";
  
  for (let i = 0; i <= arr.length - R; i++) {
    let actual = arr.slice(i, i + R).join("");
    
    if (actual.length > stringResult.length) {
      stringResult = actual;
    }
  }
  
  return stringResult;
}
function JosephusP(arr, k) {
  let index = 0;
  
  while (arr.length > 1) {
    index = (index + k - 1) % arr.length;
    arr.splice(index, 1);
    console.log(arr);
  }
  
  return arr[0];
}






console.log(isTriangle(3, 4, 5)); 

const arrStr = ["abcd", "efghij", "klmnop", "qrst", "cuenta", "uvwxyz"];
const R = 2;

console.log(largeString(arrStr, R)); 

const matriz = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

console.log(JosephusP(matriz, k)); 