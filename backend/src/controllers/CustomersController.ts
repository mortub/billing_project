import { Request, Response } from 'express';
import { CreateCustomerDTO } from '../utils/dtos/CreateCustomerDTO';
import { UpdateCustomerDTO } from '../utils/dtos/UpdateCustomerDTO';
import { Customer } from '../models/Customer';

export class CustomersController {
  public static async createCustomer(req: Request, res: Response) {
    const body: CreateCustomerDTO = req.body;
    const customer = await Customer.create({
      customer_id: '813-86-3131',
      first_name: 'Benedikt',
      last_name: 'Abberley',
      email: 'babberley0@artisteer.com',
      gender: 'Male',
    });
    res.send(customer);
  }

  public static async updateCustomer(req: Request, res: Response) {
    const body: UpdateCustomerDTO = req.body;
    res.send('update Customer');
  }

  public static async deleteCustomer(req: Request, res: Response) {
    res.send('delete Customer');
  }

  public static async getAllCustomers(req: Request, res: Response) {
    const customers = await Customer.findAll();
    res.send(customers);
  }
}
