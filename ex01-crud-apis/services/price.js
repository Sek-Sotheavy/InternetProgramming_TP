const Prices = require("../models/prices");

const findAll = async () => {
  try {
    console.log("Run");
    const prices = await Prices.find()
    console.log(prices);
    return {
      success: true,
      data: items
    };
  } catch (err) {
    return {
      success: false,
      error: err.message
    }
  }
}

const findById = async (id) => {
  try {
    const prices = await Prices.findById(id)
    return {
      success: true,
      data: prices
    };
  } catch (err) {
    return {
      success: false,
      error: err || 'error'
    }
  }
}
const create = async (newPrice) => {
  try{
    const createdPrice = await Prices.create(newPrice)
     return {
      success: true,
      data: createdPrice
     };
  }catch (err) {
    return {
      success: false,
      error: err || 'error'
    }
}
}

const update = async (pricesId, newPrice) => {
  try {
    const updatePrice = await Items.findById(pricesId)
    updatePrice.desc = newPrice.desc
    updatePrice.category = newPrice.category
    await updatePrice.save()
    return {
      success: true,
      data: updatePrice
    };
  } catch (err) {
    return {
      success: false,
      error: err || 'error'
    }
  }
}

const remove = async (pricesId) => {
  try {
    await Items.deleteOne({_id:pricesId})
    return{
      success: true,
      data: "The price deleted successfully!!"
    }
  } catch (error) {
    return{
      success: false,
      error: error.message
    }
  }
}

module.exports = {
  update,
  remove,
  findAll,
  create,
}