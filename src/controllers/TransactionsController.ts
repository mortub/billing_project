import { Request, Response } from 'express';

export class TransactionsController {
  public static async createTransaction(req: Request, res: Response) {
    res.send('create transaction');
  }

  public static async updateTransaction(req: Request, res: Response) {
    res.send('update transaction');
  }

  public static async deleteTransaction(req: Request, res: Response) {
    res.send('delete transaction');
  }

  public static async getAllTransactions(req: Request, res: Response) {
    res.send('get all transactions');
  }
}
