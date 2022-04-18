const store = require("./store");

async function storageSupporter(data) {
  const { first_name, last_name } = data;
  return new Promise((resolve, reject) => {
    if (false) {
      console.error("there was an error");
      reject("the data is incorrect");
      return false;
    }

    const full_supporter = {
      first_name: first_name,
      last_name: last_name,
    };
    store.add(full_supporter);
    resolve(full_supporter);
  });
}

async function getSupporters(data) {
  return new Promise((resolve, reject) => {
    resolve(store.list(data));
  });
}

module.exports = {
  storageSupporter,
  getSupporters,
};
