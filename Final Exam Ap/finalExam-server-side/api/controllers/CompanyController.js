const Company = require('../models/Company');
// const Company = require('../models/Company');

const CompanyController = () => {
  const create = async (req, res) => {
    const { body } = req;
      try {
        const CompanyInsert = await Company.create(body
        );

        return res.status(200).json({  CompanyInsert });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
  };

  const getAll = async (req, res) => {
    try {
      const Companys = await Company.findAll({
        order: [
            ['id', 'ASC'],
        ],
    });

      // let allCompany = []
      // for (const element of Companys){
      //   let Company = element.dataValues
      //   const company = await Company.findAll({where :{Company_id : Company.id}});
      //   Company.countries = company;
      //   allCompany.push(Company)
      // }
      return res.status(200).json({ Companys });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const edit = async (req, res) => {
    try {
        const { body } = req;
        const CompanyUpdate = await Company.update(body,{
          where: { id: body.id },
        });
      return res.status(200).json({ msg: 'Company Updated' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const deleteCompany = async (req, res) => {
    try {
        const { query } = req;
        const id = query.id
        let company = await Company.findOne({where: {id: id}})

       company.destroy();
        
      return res.status(200).json({ msg: 'Company deleted' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };


  return {
    create,
    getAll,
    edit,
    deleteCompany

  };
};

module.exports = CompanyController;