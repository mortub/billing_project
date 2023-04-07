import { Router } from 'express';
import { transactionsRouter } from './TransactionsRouter';
import { customersRouter } from './CustomersRouter';

export const AppRouter = Router();

AppRouter.use(transactionsRouter);
AppRouter.use(customersRouter);
