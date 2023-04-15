import { Request, Response } from 'express';
import { CreateCustomerDTO } from '../utils/dtos/CreateCustomerDTO';
import { UpdateCustomerDTO } from '../utils/dtos/UpdateCustomerDTO';
import { Customer } from '../models/Customer';
import { Transaction } from '../models/Transaction';

export class CustomersController {
  public static async createCustomer(req: Request, res: Response) {
    const { first_name, last_name, email, gender, country, city, street, phone } = req.body as CreateCustomerDTO;
    const customer = await Customer.create({
      first_name,
      last_name,
      email,
      gender,
      country: country ?? null,
      city: city ?? null,
      street: street ?? null,
      phone: phone ?? null,
    });
    res.status(201).send(customer);
  }

  public static async updateCustomer(req: Request, res: Response) {
    const customerId = req.params.id;
    const { first_name, last_name, email, gender, country, city, street, phone } = req.body as UpdateCustomerDTO;
    const result = await Customer.update(
      {
        first_name,
        last_name,
        email,
        gender,
        country: country ?? null,
        city: city ?? null,
        street: street ?? null,
        phone: phone ?? null,
      },
      {
        where: { id: customerId },
      },
    );
    if (result[0] === 0) {
      return res.status(400).send('customer not updated');
    }
    return res.status(200).send();
  }

  public static async deleteCustomer(req: Request, res: Response) {
    const customerId = req.params.id;
    await Transaction.destroy({
      where: { customer_id: customerId },
    });

    const result = await Customer.destroy({
      where: { id: customerId },
    });
    if (result === 0) {
      return res.status(400).send('customer not deleted');
    }
    return res.status(200).send();
  }

  public static async getAllCustomers(req: Request, res: Response) {
    const customers = await Customer.findAll();
    res.send(customers);
  }
}
