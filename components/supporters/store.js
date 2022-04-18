const supporters = [];

function addSupporter(supporter) {
    supporters.push(supporter);
}

function getSupporters() {
  return supporters;
}

module.exports = {
  add: addSupporter,
  list: getSupporters,
  //get
  //update
  //delete
};
