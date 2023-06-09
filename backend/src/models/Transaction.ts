import { DataTypes, Model, Sequelize } from 'sequelize';
import { Customer } from './Customer';
import { sequelize } from './DBConnection';

export class Transaction extends Model {
  declare id: number;
  declare total_price: number;
  declare currency: string;
  declare credit_card_type: string;
  declare credit_card_number: number;
  declare customer_id: string;
}

Transaction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    total_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    credit_card_type: {
      type: DataTypes.STRING,
    },
    credit_card_number: {
      type: DataTypes.STRING,
    },
    customer_id: {
      type: DataTypes.STRING,
    },
  },
  { sequelize },
);

Transaction.belongsTo(Customer, {
  foreignKey: 'customer_id',
  targetKey: 'id',
});
