import { Request, Response } from 'express';
import { CreateTransactionDTO } from '../utils/dtos/CreateTransactionDTO';
import { UpdateTransactionDTO } from '../utils/dtos/UpdateTransactionDTO';
import { Transaction } from '../models/Transaction';

export class TransactionsController {
  public static async createTransaction(req: Request, res: Response) {
    const { total_price, currency, credit_card_type, credit_card_number, customer_id } =
      req.body as CreateTransactionDTO;
    const transaction = await Transaction.create({
      total_price,
      currency,
      credit_card_type: credit_card_type ?? null,
      credit_card_number: credit_card_number ?? null,
      customer_id,
    });
    res.send(transaction);
  }

  public static async updateTransaction(req: Request, res: Response) {
    const transactionId = req.params.id;
    const { total_price, currency } = req.body as UpdateTransactionDTO;
    await Transaction.update(
      {
        total_price: total_price ?? null,
        currency: currency ?? null,
      },
      {
        where: { id: transactionId },
      },
    );
    return res.send();
  }

  public static async deleteTransaction(req: Request, res: Response) {
    const transactionId = req.params.id;
    await Transaction.destroy({
      where: { id: transactionId },
    });
    res.send();
  }

  public static async getAllTransactions(req: Request, res: Response) {
    const transactions = await Transaction.findAll();
    res.send(transactions);
  }
}
