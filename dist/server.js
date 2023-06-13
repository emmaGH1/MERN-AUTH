"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const errorMiddleware_1 = require("./middleware/errorMiddleware");
dotenv_1.default.config();
const port = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use('/api/users', userRoutes_1.default);
app.use(errorMiddleware_1.notFound);
app.use(errorMiddleware_1.errorHandler);
app.get('/', (req, res) => res.send('Hey!!!'));
app.listen(port, () => console.log(`Server started on port ${port} `));
