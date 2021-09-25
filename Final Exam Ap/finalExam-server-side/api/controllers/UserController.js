const User = require('../models/User');
const authService = require('../services/auth.service');
const Role = require('../models/Role');
const UserCountry = require('../models/User_country');
const DevSeed   = require('../db/seeds/dev.seed');

const UserController = () => {
  const register = async (req, res) => {
    const { body } = req;
      try {
        let countryArr = body.country_id
        delete body.country_id;
        const user = await User.create(body);
        let userInsert = user.dataValues;

        //-- add country
        for (const element of countryArr){
          await UserCountry.create({user_id:userInsert.id, country_id:element});
          }

        let market = await Market.findOne({ where: { id: body.market_id } });
        let role = await Role.findOne({ where: { id: body.role } });
        let countryDataArr = [];
        for (const element of countryArr){
          let countryData = await Country.findOne({ where: { id: element } });
          countryDataArr.push(countryData)
        }
        let scope = await Scope.findOne({ where: { id: body.scope } });

        userInsert.market = market;
        userInsert.role = role;
        userInsert.country = countryDataArr;
        userInsert.scope = scope;
        const token = authService().issue({ id: userInsert.id });
     
        return res.status(200).json({ token, user: userInsert });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
  };

  const login = async (req, res) => {
    const { email } = req.body;

    if (email) {
      try {
        const user = await User
          .findOne({
            where: {
              email,
            },
          });

        if (!user) {
          return res.status(400).json({ msg: 'Bad Request: User not found' });
        }
        return res.status(200).json({ token, user });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }

    return res.status(400).json({ msg: 'Bad Request: Email or password is wrong' });
  };

  const validate = (req, res) => {
    const { token } = req.body;

    authService().verify(token, (err) => {
      if (err) {
        return res.status(401).json({ isvalid: false, err: 'Invalid Token!' });
      }

      return res.status(200).json({ isvalid: true });
    });
  };

  const getAll = async (req, res) => {
    try {
      const users = await User.findAll();
      let allusers = []
      for (const element of users){
        let singleuser = element.dataValues

        let market = await Market.findOne({ where: { id: singleuser.market_id } });
        let role = await Role.findOne({ where: { id: singleuser.role } });
        let country = await UserCountry.findAll({ where: { user_id: singleuser.id } });
        let countryDataArr = [];
        for (const element of country){
          let countryData = await Country.findOne({ where: { id: element.country_id } });
          countryDataArr.push(countryData)
        }
        let scope = await Scope.findOne({ where: { id: singleuser.scope } });
        
        singleuser.market = market;
        singleuser.role = role;
        singleuser.country = countryDataArr;
        singleuser.scope = scope;

        allusers.push(singleuser)
      }
      return res.status(200).json({ users });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const runseeds = async (req, res) => {
    try {
       const seeds = await DevSeed().firstSeed()

      return res.status(200).json({ msg: 'Seeds inserted' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const editUser = async (req, res) => {
    try {
       
        const { body } = req;
        const id = body.id
       let countryArr = body.country_id.split(',')
        delete body.country_id;
        const user = await User.update(body,{
          where: { id: body.id },
        });
        await UserCountry.create({user_id:userInsert.id, country_id:element});

        for (const element of countryArr){
          await UserCountry.create({user_id:userInsert.id, country_id:element});
          }

      return res.status(200).json({ msg: 'User Updated' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };


  return {
    register,
    login,
    validate,
    getAll,
    runseeds,
    editUser
  };
};

module.exports = UserController;
