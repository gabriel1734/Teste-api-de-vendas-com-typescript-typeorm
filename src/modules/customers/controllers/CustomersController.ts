import { Request, Response } from 'express';
import CreateCustomerService from '../services/CreateCustomerService';
import DeleteCustomerService from '../services/DeleteCustomerService';
import ListCustomerService from '../services/ListCustomerService';
import ShowCustomerService from '../services/ShowCustomerService';
import UpdateCustomerService from '../services/UpdateCustomerService';

export default class CustomersController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listCustomers = new ListCustomerService();

    const customers = await listCustomers.execute();

    return res.status(200).json(customers);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showCustomer = new ShowCustomerService();

    const customer = await showCustomer.execute({ id });

    return res.status(200).json(customer);
  }
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email } = req.body;

    const createCustomer = new CreateCustomerService();

    const customer = await createCustomer.execute({
      name,
      email,
    });

    return res.status(200).json(customer);
  }
  public async update(req: Request, res: Response): Promise<Response> {
    const { name, email } = req.body;
    const { id } = req.params;

    const updateCustomer = new UpdateCustomerService();

    const customer = await updateCustomer.execute({
      id,
      name,
      email,
    });

    return res.status(200).json(customer);
  }
  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteCustomer = new DeleteCustomerService();

    await deleteCustomer.execute({ id });

    return res.status(200).json({ message: 'The product has deleted' });
  }
}
