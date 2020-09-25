'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dateNow = new Date();
    await queryInterface.bulkInsert({ tableName: 'Documents', schema: 'globals' }, [
      {id: 1,  CountryId:1, name:"antecedentes penales", description:"es la constancia oficial de que una persona ha sido condenada con sentencia firme por un delito", createdAt: dateNow, updatedAt: dateNow},
      {id: 2,  CountryId:1, name:"antecedentes policiacos", description:"es la constancia oficial de que una persona ha cometido un delito ante la entidad de la policía", createdAt: dateNow, updatedAt: dateNow},
      {id: 3,  CountryId:1, name:"recibo de agua o luz", description:"recibo de un servicio público que consume la persona", createdAt: dateNow, updatedAt: dateNow},
      {id: 4,  CountryId:1, name:"factura", description:"documento mercantil que detalla los servicios o productos brindado", createdAt: dateNow, updatedAt: dateNow},
      {id: 5,  CountryId:1, name:"contador de agua o luz", description:"fotografìa del dispositivo que mide el servicio público", createdAt: dateNow, updatedAt: dateNow},
      {id: 6,  CountryId:1, name:"documento de identificación", description:"documento personal de identifación único que identifica a un guatemalteco", createdAt: dateNow, updatedAt: dateNow},
      {id: 7,  CountryId:1, name:"licencia de conducir", description:"documento que autoriza al ciudadano guatemalteco conducir un medio de transporte", createdAt: dateNow, updatedAt: dateNow}
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete({ tableName: 'Documents', schema: 'globals' }, {CountryId:1}, {});
  }
};