const stripe = require('stripe')('sk_test_51MJzWIKNMH8hnkPOqU9xEiroJrhlAc9w0JiViqrbloNVbudNrAIyb5ZrpTdBNzGFGvcbcJ7WmdQgJ5CMuXXG9hmQ00p05eq3fm');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const PaymentRoute = require('./routes/paymentRoute')
app.use('/',PaymentRoute)



app.listen(5000, () => console.log('Running on port 5000'));
