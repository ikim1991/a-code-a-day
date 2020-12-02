import { createImportSpecifier } from "typescript";

const app = require('./app');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}...`)
});