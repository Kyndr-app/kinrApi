const db = require("moongose");
const dbUrl = `mongodb+srv://${process.env.USER_DB}:${process.env.PWD_USER_DB}@kyndr.04qiy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

db.Promise = global.Promise;

db.connect(dbUrl, {
  useNewUrlParser: true,
});

console.log("succesfull db connection");

const { listenerCount } = require("./schema");

const supporterList = [];

function addSupporter(supporter) {
  list.push(supporter);
}

function getSupporters() {
  return supportersList;
}

module.exports = {
  add: addSupporter,
  list: getSupporters,
};
