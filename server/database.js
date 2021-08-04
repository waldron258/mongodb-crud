const { MongoClient } = require("mongodb");
const config = require("./config");

const uniqid = require("uniqid");

/* 
MONGOOSE

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(config.db.uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Correctly connected to the DB");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
*/

let client = null;

const connectDB = async () => {
  try {
    if (!client || !client.isConnected()) {
      client = await MongoClient.connect(config.db.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Correctly connected to the database!");
    }
    return client;
  } catch (e) {
    console.log(e.message);
  }
};

const insert = async (database, collection, document, indexes, session) => {
  client = await connectDB();
  const coll = client.db(database).collection(collection);
  const options = session ? { session } : {};
  let result;
  if (document instanceof Array) {
    document.map((doc) => (doc.movieId = uniqid()));
    result = await coll.insertMany(document, options);
  } else {
    document.movieId = uniqid();
    result = await coll.insertOne(document, options);
  }
  if (indexes !== null) {
    await coll.createIndexes(indexes);
  }
  return result;
};

const find = async (database, collection, document) => {
  client = await connectDB();
  const coll = client.db(database).collection(collection);

  let result =
    document === undefined
      ? await coll.find().toArray()
      : await coll.find(document).toArray();

  result === null && (result = {});
  return result;
};

const update = async (database, collection, document, newDocument) => {
  client = await connectDB();
  const coll = client.db(database).collection(collection);
  let result = await coll.updateOne(document, { $set: newDocument });
  return result;
};

const remove = async (database, collection, document) => {
  client = await connectDB();
  const coll = client.db(database).collection(collection);
  let result = await coll.deleteOne(document);
  return result;
};

module.exports = {
  insert: insert,
  find: find,
  update: update,
  remove: remove,
};
