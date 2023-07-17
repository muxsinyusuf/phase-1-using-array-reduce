const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Calculate the total number of batteries using reduce
const totalBatteries = batteryBatches.reduce((total, currentBatch) => total + currentBatch, 0);

console.log(totalBatteries); // Output: 25 (4 + 5 + 6 + 3 + 7)
// Code your solution here
