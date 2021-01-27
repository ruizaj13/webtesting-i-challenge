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
    // item.enhancement >= 15 ? item.durability - 10 : item.durability - 5
    // item.enhancement > 16 ? item.enhancement - 1 : item.enhancement
    if(item.enhancement >= 15) {
      item.durability -= 10 
    } else if (item.enhancement < 15) {
      item.durability -= 5
    }
    if (item.enhancement > 16) {
      item.enhancement -= 1
    } 
    return item
}

function repair(item) {
  const diff = 100 - item.durability
  return item.durability == 100 ? item.durability : item.durability + diff
}

function get(item) {
  return { ...item };
}

