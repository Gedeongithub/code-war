const cannonsReady = (gunners) => {
  let dictionary = Object.values(gunners);
  return dictionary.includes('nay')? 'Shiver me timbers!':'Fire!';
}