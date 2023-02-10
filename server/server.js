const App = require("./initialize")
// port
const port = process.env.PORT || 8000;

App.listen(port, () => console.log(`Server is running on port ${port}`));
