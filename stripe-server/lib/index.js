"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripe = void 0;
console.log('stripe pagos');
//variables de ambiente (STRIPE API KEY)
const dotenv_1 = require("dotenv");
if (process.env.NODE_ENV !== 'production') {
    dotenv_1.config();
}
//Inicializando Stripe
const stripe_1 = __importDefault(require("stripe"));
console.log(process.env.STRIPE_SECRET);
exports.stripe = new stripe_1.default(process.env.STRIPE_SECRET, {
    apiVersion: '2020-03-02'
});
//# sourceMappingURL=index.js.map