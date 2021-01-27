module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
 return item.enhancement == 20 ? item.enhancement : item.enhancement + 1
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  const diff = 100 - item.durability
  return item.durability == 100 ? item.durability : item.durability + diff
}

function get(item) {
  return { ...item };
}
