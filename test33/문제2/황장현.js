const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const N = input[0][0];
  const localBudgetRequests = input[1];
  const M = input[2][0];
  let result = 0;

  const sum = localBudgetRequests.reduce(
    (sum, localBudgetRequest) => sum + localBudgetRequest,
    0
  );

  if (sum <= M) {
    return Math.max(...localBudgetRequests);
  }

  let lowLocalBudgetRequest = Math.min(...localBudgetRequests);
  let highLocalBudgetRequest = Math.max(...localBudgetRequests);

  while (lowLocalBudgetRequest <= highLocalBudgetRequest) {
    const midLocalBudgetRequest = Math.floor(
      (lowLocalBudgetRequest + highLocalBudgetRequest) / 2
    );

    const updatelocalBudgetRequests = localBudgetRequests.map(
      (localBudgetRequest) =>
        localBudgetRequest > midLocalBudgetRequest
          ? midLocalBudgetRequest
          : localBudgetRequest
    );

    const tempSum = updatelocalBudgetRequests.reduce(
      (sum, localBudgetRequest) => sum + localBudgetRequest,
      0
    );

    console.log(updatelocalBudgetRequests);
    console.log(tempSum, '>=', M);
    console.log(midLocalBudgetRequest);

    if (tempSum >= M) {
      result = midLocalBudgetRequest;
      highLocalBudgetRequest = midLocalBudgetRequest - 1;
    } else {
      lowLocalBudgetRequest = midLocalBudgetRequest + 1;
    }
  }
  return result;
}

console.log(solution(input));
