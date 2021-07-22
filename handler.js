const awsServerlessExpress = require("aws-serverless-express");
const app = require("./server/index");

/*
AWS
*/

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  return awsServerlessExpress.proxy(server, event, context);
};

/*
LOCAL

const PORT = process.env.PORT || 1234;

app.get("/", (req, res) => {
  res.send("API correctly running");
});

server.listen(PORT, function () {
  var port = server.address().port;
  console.log("App correctly running on port ", PORT);
});
*/
