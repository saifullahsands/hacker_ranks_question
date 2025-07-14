function secondLargestNumber(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  console.log(uniqueArr);
  for (let j = 0; j < uniqueArr.length; j++) {
    for (let z = 0; z < uniqueArr.length - 1; z++) {
      if (uniqueArr[z] < uniqueArr[z + 1]) {
        [uniqueArr[z], uniqueArr[z + 1]] = [uniqueArr[z + 1], uniqueArr[z]];
      }
    }
  }
  console.log("Sorted Unique Array:", uniqueArr);
  console.log("Second Largest:", uniqueArr[1]);
}

let arr = [10, 5, 10, 20, 5];

secondLargestNumber(arr);
