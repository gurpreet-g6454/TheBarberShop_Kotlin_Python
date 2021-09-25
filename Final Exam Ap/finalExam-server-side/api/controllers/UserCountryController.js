const UserCountry = require('../models//User_country');

const UserCountryController = () => {
  const create = async (req, res) => {
    const { body } = req;
      try {
        const role = await UserCountry.create({body
        });

        return res.status(200).json({ role });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
  };

  const getAll = async (req, res) => {
    try {
      const roles = await UserCountry.findAll();

      return res.status(200).json({  roles });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const deleteOP = async (req, res) => {
    try {
      const roles = await UserCountry.findAll();

      return res.status(200).json({  roles });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const update = async (req, res) => {
    try {
      const roles = await UserCountry.findAll();

      return res.status(200).json({  roles });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };


  return {
    create,
    getAll,
    deleteOP,
    update
  };
};

module.exports = UserCountryController;
