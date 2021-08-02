
const solution = (arr) => {
  const result = [];
  if(arr.length > 0) {

    for(let i = 0; i < arr[0].length; i++) {
      let currentLetter = arr[0][i];
      let next = true;
      for(let k = 1; k < arr.length; k++) {
        const currentSymbolIndex = arr[k].indexOf(currentLetter);
        if(currentSymbolIndex === -1) {
          next = false;
          break;
        }else{
          arr[k] =  arr[k].substr(0, currentSymbolIndex) + arr[k].substr(currentSymbolIndex + 1)
        }
      }
      if(next) {
        result.push(currentLetter)
      }
    }
  }
  return result;
}

console.log(solution(["bella","label","roller"]))
console.log(solution(["cool","lock","cook"]))
