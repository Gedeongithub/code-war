const arrCheck = value => {
  if(!Array.isArray(value)) return false
  return value.every(val=>Array.isArray(val))
}
​