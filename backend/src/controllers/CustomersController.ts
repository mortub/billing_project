import { Request, Response } from 'express';
import { CreateCustomerDTO } from '../utils/dtos/CreateCustomerDTO';
import { UpdateCustomerDTO } from '../utils/dtos/UpdateCustomerDTO';
import { Customer } from '../models/Customer';
import { uuid } from 'uuidv4';

export class CustomersController {
  public static async createCustomer(req: Request, res: Response) {
    const { first_name, last_name, email, gender, country, city, street, phone } = req.body as CreateCustomerDTO;
    const customer = await Customer.create({
      customer_id: uuid(),
      first_name,
      last_name,
      email,
      gender,
      country,
      city,
      street,
      phone,
    });
    res.send(customer);
  }

  public static async updateCustomer(req: Request, res: Response) {
    const customerId = req.params.id;
    const { first_name, last_name, email, gender, country, city, street, phone } = req.body as UpdateCustomerDTO;
    await Customer.update(
      {
        first_name,
        last_name,
        email,
        gender,
        country,
        city,
        street,
        phone,
      },
      {
        where: { customer_id: customerId },
      },
    );
    return res.send();
  }

  public static async deleteCustomer(req: Request, res: Response) {
    const customerId = req.params.id;
    await Customer.destroy({
      where: { customer_id: customerId },
    });
    res.send();
  }

  public static async getAllCustomers(req: Request, res: Response) {
    const customers = await Customer.findAll();
    res.send(customers);
  }
}
