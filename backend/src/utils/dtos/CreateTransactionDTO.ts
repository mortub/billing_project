export class CreateTransactionDTO {
  total_price!: number;
  currency!: string;
  credit_card_type!: string;
  credit_card_number!: number;
  customer_id!: string;
}
