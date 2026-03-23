function printFirstItemThenFirstHalfThenSayHi100Times(array) {
  console.log(array[0]);

  var middleIndex = Math.floor(array.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(array[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log('hi');
  }
}

// O(1 + n/2 + 100) => O(n)