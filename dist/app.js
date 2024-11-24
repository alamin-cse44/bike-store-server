"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const bike_route_1 = require("./app/modules/bike/bike.route");
const order_route_1 = require("./app/modules/order/order.route");
// parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routing
app.use('/api', bike_route_1.BikeRoutes);
app.use('/api', order_route_1.OrderRoutes);
app.get('/', (req, res) => {
    res.send('Welcome! you have successfully run this application.');
});
exports.default = app;
