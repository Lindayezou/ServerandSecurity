function randomNumber (upper, lower) {
  return Math.floor(Math.random()*(upper -lower + 1)) + lower
}

export = randomNumber;