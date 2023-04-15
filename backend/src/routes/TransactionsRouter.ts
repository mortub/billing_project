import { TransactionsController } from '../controllers/TransactionsController';
import { Router } from 'express';
import { createTransactionValidator } from '../utils/validators/CreateTransactionValidator';
import { validate } from 'express-validation';
import { updateTransactionValidator } from '../utils/validators/UpdateTransactionValidator';

export const transactionsRouter = Router();

transactionsRouter.post(
  '/transactions',
  validate(createTransactionValidator, { statusCode: 400 }, {}),
  TransactionsController.createTransaction,
);

transactionsRouter.patch(
  '/transactions/:id',
  validate(updateTransactionValidator, { statusCode: 400 }, {}),
  TransactionsController.updateTransaction,
);

transactionsRouter.delete('/transactions/:id', TransactionsController.deleteTransaction);

transactionsRouter.get('/transactions', TransactionsController.getAllTransactions);
