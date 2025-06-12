function fibonacci(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    const array = fibonacci(n - 1);
    array.push(array[array.length - 1] + array[array.length - 2]);
    return array;
  }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
