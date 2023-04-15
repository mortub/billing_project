import { GenderEnum } from '../enums/GenderEnum';

const { Joi } = require('express-validation');

export const createCustomerValidator = {
  body: Joi.object().keys({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    gender: Joi.string()
      .required()
      .valid(...Object.values(GenderEnum)),
    country: Joi.string(),
    city: Joi.string(),
    street: Joi.string(),
    phone: Joi.string().regex(/^[0-9]{10}$/),
  }),
};
