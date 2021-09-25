const Role = require('../../models/Role');
// const Country = require('../../models/Country');
const Hospital = require('../../models/Hospital');
const Company = require('../../models/Company');
const Booking = require('../../models/Booking');
const Scope = require('../../models/Scope');


const DevSeed = () => {
    const firstSeed = async () => {
    let roles = [{
        role_name : 'Market Tool Manager',
        role_alias: 'MTM'
    },{
        role_name : 'Global Tool Manager',
        role_alias: 'GTM'
    },{
        role_name : 'Questions & Requests',
        role_alias: 'Q&R'
    },{
        role_name : 'Business Unit',
        role_alias: 'BIU'
    },{
        role_name : 'Field Service Engineer',
        role_alias: 'FSE'
    }]
    const roleInsert = await Role.bulkCreate(roles);

    let hospitals = [{
        hospital_name : 'Hopital default1',
        hospital_website:'www.default.com',
        hospital_bed:20,
        hospital_price:100
    },{
        hospital_name : 'Max hospital',
        hospital_website:'www.default.com',
        hospital_bed:20,
        hospital_price:100
    },{
        hospital_name : 'AIMS',
        hospital_website:'www.default.com',
        hospital_bed:20,
        hospital_price:100
    },{
        hospital_name : 'PGI',
        hospital_website:'www.default.com',
        hospital_bed:20,
        hospital_price:100
    }]
   const hospitalinsert = await Hospital.bulkCreate(hospitals);


   let companies = [{
    company_name : 'companies default1',
    company_address:'www.default.com',
    company_cylinder:20,
    cylinder_price:100
},{
    company_name : 'companies default2',
    company_address:'www.default.com',
    company_cylinder:20,
    cylinder_price:100
},{
    company_name : 'companies default3',
    company_address:'www.default.com',
    company_cylinder:20,
    cylinder_price:100
}]
const companyInsert = await Company.bulkCreate(companies);


let Bookings = [{
    user_email : 'abcdef@gmail.com',
    username:'abcd efg',
    booking_type:'Cylinder',
    booking_status:'Active'
},{
    user_email : 'newuser@gmail.com',
    username:'new efg',
    booking_type:'Bed',
    booking_status:'Active'
},{
    user_email : 'dummyuser@gmail.com',
    username:'dummy efg',
    booking_type:'Cylinder',
    booking_status:'Resolved'
}]
const bookingInsert = await Booking.bulkCreate(Bookings);



    let scope= [{
        scope_name : 'Local'
    },{
        scope_name : 'Global'
    }]
    const scopeInsert = await Scope.bulkCreate(scope);

    return 1
}

  
    return {
        firstSeed,
    };
  };
module.exports = DevSeed;
  