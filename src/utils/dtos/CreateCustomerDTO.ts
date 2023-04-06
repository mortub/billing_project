import { GenderEnum } from '../enums/GenderEnum';

export class CreateCustomerDTO {
  first_name!: string;
  last_name!: string;
  email!: string;
  gender!: GenderEnum;
  country?: string;
  city?: string;
  street?: string;
  phone?: string;
}
