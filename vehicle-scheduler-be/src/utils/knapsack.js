export default function optimizeVehicles(vehicles, maxHours) {
    const n = vehicles.length;

    const dp = Array.from(
        { length: n + 1 },
        () => Array(maxHours + 1).fill(0)
    );

    for (let i = 1; i <= n; i++) {
        const time = vehicles[i - 1].Duration;
        const impact = vehicles[i - 1].Impact;

        for (let j = 0; j <= maxHours; j++) {
            dp[i][j] = dp[i - 1][j];

            if (time <= j) {
                dp[i][j] = Math.max(
                    dp[i][j],
                    impact + dp[i - 1][j - time]
                );
            }
        }
    }

    const ans = [];
    let w = maxHours;

    for (let i = n; i > 0; i--) {
        if (dp[i][w] !== dp[i - 1][w]) {
            ans.push(vehicles[i - 1]);
            w -= vehicles[i - 1].Duration;
        }
    }

    return ans.reverse();
}