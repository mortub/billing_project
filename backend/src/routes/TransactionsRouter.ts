import { TransactionsController } from '../controllers/TransactionsController';
import { Router } from 'express';

export const transactionsRouter = Router();

transactionsRouter.post('/transactions', TransactionsController.createTransaction);

transactionsRouter.patch('/transactions/:id', TransactionsController.updateTransaction);

transactionsRouter.delete('/transactions/:id', TransactionsController.deleteTransaction);

transactionsRouter.get('/transactions', TransactionsController.getAllTransactions);
