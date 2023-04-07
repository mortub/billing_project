import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('sqlite::memory:');

export class DBConnection {
  public static async connectToDB() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      sequelize.sync();
      console.log('Tables have been created successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
}
