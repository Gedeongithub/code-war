function multipleOfIndex(array) {
  return array.filter((val, index) => index === 0 ? val === 0 : val % index === 0);
}
​