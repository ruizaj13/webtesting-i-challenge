module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  if (item.durability == 100) {
    return item.durability
  } else {
    const diff = 100 - item.durability
    return item.durability + diff
  }
}

function get(item) {
  return { ...item };
}
