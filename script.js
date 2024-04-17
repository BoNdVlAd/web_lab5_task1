const vstavkaSort = (arr) => {
  for (let i = 1, l = arr.length; i < l; i++) {
    const current = arr[i];
    let j = i;
    while (j > 0 && arr[j - 1] < current) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = current;
  }
  return arr;
};

function generateArray() {
  let arrayLength = document.getElementById('arrayLength').value;
  if (arrayLength <= 0) {
    alert('Довжина масиву повина бути більшою за 0');
    return;
  }

  let A = [];
  for (let i = 0; i < arrayLength; i++) {
    A.push(Math.floor(Math.random() * 100));
  }

  document.getElementById('inputArray').textContent = A.join(', ');

  let maxElement = Math.max(...A);
  let B = A.map((ai) => maxElement * ai);
  B = vstavkaSort(B);

  document.getElementById('outputArray').textContent = B.join(', ');
}
