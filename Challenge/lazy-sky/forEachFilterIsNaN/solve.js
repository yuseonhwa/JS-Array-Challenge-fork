// 배열 원소중 숫자인 원소만 뽑아 배열을 만드세요.
function solution(inputArray) {
  return inputArray.filter((x) => typeof x === 'number');
}

exports.solution = solution;
