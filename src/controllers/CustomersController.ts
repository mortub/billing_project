import { Request, Response } from 'express';

export class CustomersController {
  public static async createCustomer(req: Request, res: Response) {
    res.send('create customer');
  }

  public static async updateCustomer(req: Request, res: Response) {
    res.send('update Customer');
  }

  public static async deleteCustomer(req: Request, res: Response) {
    res.send('delete Customer');
  }

  public static async getAllCustomers(req: Request, res: Response) {
    res.send('get all Customers');
  }
}
