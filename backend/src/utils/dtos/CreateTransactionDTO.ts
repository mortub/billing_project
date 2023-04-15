export class CreateTransactionDTO {
  total_price!: number;
  currency!: string;
  credit_card_type?: string;
  credit_card_number?: string;
  customer_id!: number;
}
