import { getCustomRepository } from 'typeorm';
import Customer from '../entities/Customer';
import CustomerRepository from '../repositories/CustomersRepository';

class ListCustomerService {
  public async execute(): Promise<Customer[]> {
    const customersRepository = getCustomRepository(CustomerRepository);

    const customers = await customersRepository.find();

    return customers;
  }
}

export default ListCustomerService;
