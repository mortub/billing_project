const { Joi } = require('express-validation');

export const updateTransactionValidator = {
  body: Joi.object().keys({
    total_price: Joi.number().required(),
    currency: Joi.string().required(),
  }),
};
