import { Request, Response } from 'express';
import { CreateTransactionDTO } from '../utils/dtos/CreateTransactionDTO';
import { UpdateTransactionDTO } from '../utils/dtos/UpdateTransactionDTO';

export class TransactionsController {
  public static async createTransaction(req: Request, res: Response) {
    const body: CreateTransactionDTO = req.body;
    res.send('create transaction');
  }

  public static async updateTransaction(req: Request, res: Response) {
    const body: UpdateTransactionDTO = req.body;
    res.send('update transaction');
  }

  public static async deleteTransaction(req: Request, res: Response) {
    res.send('delete transaction');
  }

  public static async getAllTransactions(req: Request, res: Response) {
    res.send('get all transactions');
  }
}
