function dp(m, n) {
    const arr = new Array(m)
    for(let i = 0; i < m; i++){
        arr[i] = new Array(n).fill(1);
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            const top = arr[i][j - 1];
            const left = arr[i - 1][j];
            const cur = arr[i - 1][j] + arr[i][j - 1];
            arr[i][j] = cur;
        }
    }
    return arr[m - 1][n - 1]
}

dp(3, 4)