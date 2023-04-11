import { DataTypes, Model, Sequelize } from 'sequelize';
import { GenderEnum } from '../utils/enums/GenderEnum';
import { sequelize } from './DBConnection';

export class Customer extends Model {
  declare id: number;
  declare customer_id: string;
  declare first_name: string;
  declare last_name: string;
  declare email: string;
  declare gender: GenderEnum;
  declare country: string;
  declare city: string;
  declare street: string;
  declare phone: string;
}

Customer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    customer_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    street: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
  },
  { sequelize },
);
