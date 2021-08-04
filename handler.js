const awsServerlessExpress = require("aws-serverless-express");
const app = require("./server/index");

const server = awsServerlessExpress.createServer(app);
/*
AWS

exports.handler = (event, context) => {
  return awsServerlessExpress.proxy(server, event, context);
};
*/

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("API correctly running");
});

server.listen(PORT, function () {
  var port = server.address().port;
  console.log("App correctly running on http://localhost:" + PORT);
});

/*
LOCAL


*/
