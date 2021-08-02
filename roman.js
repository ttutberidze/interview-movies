
const map = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

const solution = (str) => {
  let result = 0;
  for(let i = str.length - 1; i >= 0; i--) {
    if(map[str[i - 1]] < map[str[i]]) {
      result += map[str[i]] - map[str[i - 1]]
      i--;
    }else{
      result += map[str[i]]
    }
  }
  return result;
}

console.log(solution("LVIII"))
console.log(solution("MCMXCIV"))
console.log(solution("IX"))
console.log(solution("IV"))
console.log(solution("III"))
