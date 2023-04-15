import { Request, Response } from 'express';
import { CreateTransactionDTO } from '../utils/dtos/CreateTransactionDTO';
import { UpdateTransactionDTO } from '../utils/dtos/UpdateTransactionDTO';
import { Transaction } from '../models/Transaction';
import { Customer } from '../models/Customer';

export class TransactionsController {
  public static async createTransaction(req: Request, res: Response) {
    const { total_price, currency, credit_card_type, credit_card_number, customer_id } =
      req.body as CreateTransactionDTO;
    const customer = await Customer.findByPk(customer_id);
    if (!customer) {
      return res.status(400).send('customer not found');
    }
    const transaction = await Transaction.create({
      total_price,
      currency,
      credit_card_type: credit_card_type ?? null,
      credit_card_number: credit_card_number ?? null,
      customer_id,
    });
    res.status(201).send(transaction);
  }

  public static async updateTransaction(req: Request, res: Response) {
    const transactionId = req.params.id;
    const { total_price, currency } = req.body as UpdateTransactionDTO;
    const result = await Transaction.update(
      {
        total_price,
        currency,
      },
      {
        where: { id: transactionId },
      },
    );
    if (result[0] === 0) {
      return res.status(400).send('transaction not updated');
    }
    return res.status(200).send();
  }

  public static async deleteTransaction(req: Request, res: Response) {
    const transactionId = req.params.id;
    const result = await Transaction.destroy({
      where: { id: transactionId },
    });
    if (result === 0) {
      return res.status(400).send('transaction not deleted');
    }
    return res.status(200).send();
  }

  public static async getAllTransactions(req: Request, res: Response) {
    const transactions = await Transaction.findAll();
    res.send(transactions);
  }
}
