const currenciesModel = require("./currencies.model");
const historyService = require("../history/history.service");

exports.conversion = async(username,MonneyCodeFrom,MonneyCodeTo,valueIn) =>{
  try{
      const currencyFrom = await currenciesModel.findOne({MonneyCode: MonneyCodeFrom}).exec();
      const currencyTo = await currenciesModel.findOne({MonneyCode: MonneyCodeTo}).exec();
      const rate = currencyTo.Rate/currencyFrom.Rate;
      const valueOut = valueIn*rate;
      await historyService.create({
          "usernameUser":username,
          "MonneyCodeFrom":MonneyCodeFrom,
          "MonneyCodeTo":MonneyCodeTo,
          "rate":rate,
          "valueIn":valueIn,
          "valueOut":valueOut,
      })
      return valueOut;
  }
  catch (e) {
      throw new Error(e.message);
  }
};

exports.create = async(data)=>{
    const currency = new currenciesModel (data);
    return currency.save();
}

exports.findAll = async ()=>{
return currenciesModel.find();
}