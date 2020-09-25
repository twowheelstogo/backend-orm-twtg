'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dateNow = new Date();
    await queryInterface.bulkInsert({ tableName: 'DocumentMetadata', schema: 'globals' }, [
      {DocumentId:6, id:1, regex:"^[0-9]{13}$", key:"cui", name:"código único de identificación", description:"ingresar los dígitos del cui", mask:"#### ####### ####", hint: "1234 56789 0101", createdAt: dateNow, updatedAt: dateNow},
      {DocumentId:6, id:2, regex:"^(m|M|f|F)$", key:"sex", name:"sexo", description:"ingresar 'm' si es masculino, y si es femenino ingresar 'f'", mask:"A", hint: "m", createdAt: dateNow, updatedAt: dateNow},
      {DocumentId:6, id:3, regex:"^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$", key:"birthdate", name:"fecha de nacimiento", description:"ingresar la fecha de nacimiento con el formato dd/mm/aaaa", mask:"##/##/####", hint: "30/01/2020", createdAt: dateNow, updatedAt: dateNow},
      {DocumentId:7, id:1, regex:"^[0-9]+-[0-9]+$", key:"drivecard", name:"número de documento", description:"ingresar el número de documento", mask:"####-#############", hint: "1-1234567891011", createdAt: dateNow, updatedAt: dateNow},
      {DocumentId:7, id:2, regex:"^(a|A|B|b|c|C|m|M|e|E)$", key:"drivecard-type", name:"tipo de licencia", description:"ingresar el tipo de licencia: A, B, C, M o E", mask:"A", hint: "A", createdAt: dateNow, updatedAt: dateNow}
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete({ tableName: 'DocumentMetadata', schema: 'globals' }, {}, {});
  }
};