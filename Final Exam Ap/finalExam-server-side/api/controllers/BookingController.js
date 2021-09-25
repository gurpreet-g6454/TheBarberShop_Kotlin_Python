const Booking = require('../models/Booking');
const Hospital = require('../models//Hospital');
const Company = require('../models/Company');
// const Booking = require('../models/Booking');

const BookingController = () => {
  const create = async (req, res) => {
    const { body } = req;
      try {
        let status = 1
        let msg = {}
        if(body.booking_type == 'Cylinder') {

      const Companys = await Company.findOne({
        where:
        {
          id:body.booking_type_id,
        }    
      })
          if(Companys) {
            if(Companys.company_cylinder > 0) {
              const Companyupdate = await Company.update({company_cylinder : Companys.company_cylinder -1},{
                where: { id: body.booking_type_id }
              });
              
            } else {
              status = 0
              msg = {msg : "No more Cylinder Availabale " };
            }

            
          } else {
            status = 0
            msg = {msg : "Invalid Comapany id" };
          }

        } else if(body.booking_type == 'Bed') {
          const Hospitals = await Hospital.findOne({
            where:
            {
              id:body.booking_type_id,
            }    
          })
          if(Hospitals) {
            if(Hospitals.hospital_bed > 0) {
              const HospitalUpdate = await Hospital.update({hospital_bed : Hospitals.hospital_bed -1},{
                where: { id: body.booking_type_id }
              });
              // const Hospitalnew = await Hospital.findOne({
              //   where:
              //   {
              //     id:body.booking_type_id,
              //   }    
              // })
              // console.log('asdasdas',Hospitalnew);process.exit()
            } else {
              status = 0
              msg = {msg : "No More Bed Availabale" };
            }

          } else {
            status = 0
            msg = {msg : "Invalid Hospital id" };
          }
        } else {
          status = 0
          msg = {msg : "Invalid booking type" };
        }
        if(status) {
          // delete body.booking_type_id
          // console.log(body);process.exit()
          const BookingInsert = await Booking.create(body
            );
    
            return res.status(200).json({ BookingInsert });
        } else {
          return res.status(200).json({ msg });

        }
      
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
  };

  const getAll = async (req, res) => {
    try {
      const { Op } = require("sequelize");

      let Bookings
      console.log(req.query.username,'req.query.username')
      if(req.query.search) {
        console.log('asdasdas')
           Bookings = await Booking.findAll(
            {
              where:
              {
                // username:req.query.search,
                [Op.or]: [ {
                    user_email: req.query.search
                  },{
                    username: req.query.search
                  }]
              } ,   
              order: [
                ['id', 'ASC'],
            ],
            })
            //  where {username : req.query.username, $or: [
            // {
            //   user_email: 
            //     {
            //         $eq: req.query.email
            //     }
            // }
            //   } ]
            // });
        
      } else {
       Bookings = await Booking.findAll({
        order: [
            ['id', 'ASC'],
        ],
    });
      }
     
      // let allBooking = []
      // for (const element of Bookings){
      //   let Booking = element.dataValues
      //   const booking = await Booking.findAll({where :{Booking_id : Booking.id}});
      //   Booking.countries = booking;
      //   allBooking.push(Booking)
      // }
      return res.status(200).json({ Bookings });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const edit = async (req, res) => {
    try {
        const { body } = req;
        const BookingUpdate = await Booking.update(body,{
          where: { id: body.id },
        });
      return res.status(200).json({ msg: 'Booking Updated' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const deleteBooking = async (req, res) => {
    try {
        const { query } = req;
        const id = query
        .id
        let booking = await Booking.findOne({where: {id: id}})

       booking.destroy();
        
      return res.status(200).json({ msg: 'Booking deleted' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };


  return {
    create,
    getAll,
    edit,
    deleteBooking

  };
};

module.exports = BookingController;