const { Joi } = require('express-validation');

export const createTransactionValidator = {
  body: Joi.object().keys({
    total_price: Joi.number().required(),
    currency: Joi.string().required(),
    credit_card_type: Joi.string(),
    credit_card_number: Joi.string(),
    customer_id: Joi.number().required(),
  }),
};
