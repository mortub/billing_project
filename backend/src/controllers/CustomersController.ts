import { Request, Response } from 'express';
import { CreateCustomerDTO } from '../utils/dtos/CreateCustomerDTO';
import { UpdateCustomerDTO } from '../utils/dtos/UpdateCustomerDTO';
import { Customer } from '../models/Customer';

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
        country: country ?? null,
        city: city ?? null,
        street: street ?? null,
        phone: phone ?? null,
      },
      {
        where: { id: customerId },
      },
    );
    return res.send();
  }

  public static async deleteCustomer(req: Request, res: Response) {
    const customerId = req.params.id;
    await Customer.destroy({
      where: { id: customerId },
    });
    res.send();
  }

  public static async getAllCustomers(req: Request, res: Response) {
    const customers = await Customer.findAll();
    res.send(customers);
  }
}
