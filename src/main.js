require("./plugins/dotenv");
require("./modules/app/model");

const createServer = require("./modules/app/router");

const port = process.env.PORT || 3000;

const app = createServer();

app.listen(port, () => {
  console.log(`server is running is http://localhost:${port}`);
});
