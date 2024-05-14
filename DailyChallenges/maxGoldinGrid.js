// https://leetcode.com/problems/path-with-maximum-gold/
// medium


/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let maxGold = 0;

  const helper = (row, col) => {
    if (row < 0 || row >= m || col < 0 || col >= n || grid[row][col] === 0) {
      return 0;
    }
    const currentGold = grid[row][col];
    grid[row][col] = 0;

    const down = helper(row + 1, col);
    const up = helper(row - 1, col);
    const right = helper(row, col + 1);
    const left = helper(row, col - 1);

    grid[row][col] = currentGold;
    return currentGold + Math.max(down, up, right, left);
  };
  for (let row = 0; row < m; ++row) {
    for (let col = 0; col < n; ++col) {
      if (grid[row][col] > 0) {
        maxGold = Math.max(maxGold, helper(row, col));
      }
    }
  }

  return maxGold;
};
