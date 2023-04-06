import { Router } from 'express';
import { CustomersController } from '../controllers/CustomersController';

export const customersRouter = Router();

customersRouter.post('/customers/:id', CustomersController.createCustomer);

customersRouter.patch('/customers/:id', CustomersController.updateCustomer);

customersRouter.delete('/customers/:id', CustomersController.deleteCustomer);

customersRouter.get('/customers', CustomersController.getAllCustomers);
