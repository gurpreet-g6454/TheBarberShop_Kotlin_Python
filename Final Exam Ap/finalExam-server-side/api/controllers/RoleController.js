const Role = require('../models/Role');

const RoleController = () => {
  const create = async (req, res) => {
    const { body } = req;
      try {
        const role = await Role.create({body
        });

        return res.status(200).json({ role });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
  };

  const getAll = async (req, res) => {
    try {
      const roles = await Role.findAll();

      return res.status(200).json({  roles });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };


  return {
    create,
    getAll,
  };
};

module.exports = RoleController;
