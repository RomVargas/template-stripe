console.log('stripe pagos')
//variables de ambiente (STRIPE API KEY)
import { config } from "dotenv"
if(process.env.NODE_ENV !== 'production') {
    config()
}

//Inicializando Stripe
import Stripe from 'stripe'
console.log(process.env.STRIPE_SECRET)
export const stripe = new Stripe(process.env.STRIPE_SECRET, {
    apiVersion: '2020-03-02'
})
