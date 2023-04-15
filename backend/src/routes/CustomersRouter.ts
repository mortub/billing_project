import { Router } from 'express';
import { CustomersController } from '../controllers/CustomersController';
import { createCustomerValidator } from '../utils/validators/CreateCustomerValidator';
import { updateCustomerValidator } from '../utils/validators/UpdateCustomerValidator';
const { validate } = require('express-validation');

export const customersRouter = Router();

customersRouter.post(
  '/customers',
  validate(createCustomerValidator, { statusCode: 400 }, {}),
  CustomersController.createCustomer,
);

customersRouter.patch(
  '/customers/:id',
  validate(updateCustomerValidator, { statusCode: 400 }, {}),
  CustomersController.updateCustomer,
);

customersRouter.delete('/customers/:id', CustomersController.deleteCustomer);

customersRouter.get('/customers', CustomersController.getAllCustomers);
