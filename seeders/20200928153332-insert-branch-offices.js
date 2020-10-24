'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    await queryInterface.bulkInsert({ tableName: 'BranchOffices', schema: 'managers' }, [
      
      { id: "CARDALESCAYALA20200413", CompanyId: "AC20200413", name: "CARDALES CAYALA", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.609692, -90.482804] })), createdAt: now, updatedAt: now },
      { id: "BKZONA2120200327", CompanyId: "BK20200327", name: "ZONA 21", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.5618815, -90.4656439] })), createdAt: now, updatedAt: now },
      { id: "SANCRISTOBAL20200403", CompanyId: "BK20200327", name: "SAN CRISTOBAL", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.601267, -90.580711] })), createdAt: now, updatedAt: now },
      { id: "CONDADOCONCEPCION20200404", CompanyId: "CC20200404", name: "CONDADO CONCEPCION", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.627306, -90.454789] })), createdAt: now, updatedAt: now },
      { id: "GLOFIBODEGAS20200517", CompanyId: "GL20200517", name: "GL OFIBODEGAS", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.627306, -90.4877] })), createdAt: now, updatedAt: now },
      { id: "ZONA1020200617", CompanyId: "LULISGT20200617", name: "ZONA 10", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.58001, -90.49675] })), createdAt: now, updatedAt: now },
      { id: "BOULEVARLIBERACION20200330", CompanyId: "MC20200328", name: "BOULEVAR LIBERACION", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.599708, -90.524595] })), createdAt: now, updatedAt: now },
      { id: "CALLEMARTI20200331", CompanyId: "MC20200328", name: "CALLE MARTI", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.651038, -90.500302] })), createdAt: now, updatedAt: now },
      { id: "ELFRUTAL20200329", CompanyId: "MC20200328", name: "EL FRUTAL", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.51845, -90.564442] })), createdAt: now, updatedAt: now },
      { id: "LASAMERICAS20200401", CompanyId: "MC20200328", name: "LAS AMERICAS", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.586253, -90.520117] })), createdAt: now, updatedAt: now },
      { id: "LOSALAMOS20200330", CompanyId: "MC20200328", name: "LOS ALAMOS", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.648993, -90.479559] })), createdAt: now, updatedAt: now },
      { id: "MCBARCENAS20200407", CompanyId: "MC20200328", name: "MC BARCENAS", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.529842, -90.597204] })), createdAt: now, updatedAt: now },
      { id: "MCBOSQUES20200417", CompanyId: "MC20200328", name: "MC BOSQUES", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.655802, -90.569006] })), createdAt: now, updatedAt: now },
      { id: "MCMONTSERRAT20200417", CompanyId: "MC20200328", name: "MC MONTSERRAT", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.640035, -90.565988] })), createdAt: now, updatedAt: now },
      { id: "MCMULTIMART20200417", CompanyId: "MC20200328", name: "MC MULTIMART", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.645201, -90.57735] })), createdAt: now, updatedAt: now },
      { id: "MCZONA920200401", CompanyId: "MC20200328", name: "MC ZONA9", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.598074, -90.51921] })), createdAt: now, updatedAt: now },
      { id: "PETAPA20200330", CompanyId: "MC20200328", name: "MC PETAPA", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.588389, -90.54503] })), createdAt: now, updatedAt: now },
      { id: "VILLAHERMOSA20200328", CompanyId: "MC20200328", name: "MCDONALDS", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.522704, -90.534379] })), createdAt: now, updatedAt: now },
      { id: "VILLANUEVA20200403", CompanyId: "MC20200328", name: "VILLA NUEVA", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.526637, -90.588599] })), createdAt: now, updatedAt: now },
      { id: "TIVOLI20200603", CompanyId: "MF20200603", name: "TIVOLI", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.608978, -90.518736] })), createdAt: now, updatedAt: now },
      { id: "GRANPLAZA20200104", CompanyId: "PB20200103", name: "GRAN PLAZA", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.561879, -90.463457] })), createdAt: now, updatedAt: now },
      { id: "GRANVIA20200104", CompanyId: "PB20200103", name: "GRAN VIA", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.623963, -90.552514] })), createdAt: now, updatedAt: now },
      { id: "LOSALAMOS20200104", CompanyId: "PB20200103", name: "LOS ALAMOS", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.648993, -90.479559] })), createdAt: now, updatedAt: now },
      { id: "PBPORTALES20200430", CompanyId: "PB20200103", name: "PB PORTALES", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.647857, -90.482149] })), createdAt: now, updatedAt: now },
      { id: "ZONA120200104", CompanyId: "PB20200103", name: "ZONA 1", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.638996, -90.514257] })), createdAt: now, updatedAt: now },
      { id: "ZONA1220200104", CompanyId: "PB20200103", name: "ZONA 12", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.583294, -90.492003] })), createdAt: now, updatedAt: now },
      { id: "ZONA1520200104", CompanyId: "PB20200103", name: "ZONA 15", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.590284, -90.492003] })), createdAt: now, updatedAt: now },
      { id: "ZONA920200104", CompanyId: "PB20200103", name: "ZONA 9", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.605532, -90.51962] })), createdAt: now, updatedAt: now },
      { id: "CCPORTALES20200521", CompanyId: "PE20200407", name: "CC PORTALES", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.647138, -90.481738] })), createdAt: now, updatedAt: now },
      { id: "PASEOLIBERACION20200407", CompanyId: "PE20200407", name: "PASEO LIBERACION", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.596504, -90.52087] })), createdAt: now, updatedAt: now },
      { id: "RUSMALL20200407", CompanyId: "PE20200407", name: "RUS MALL", address: "", location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify({ type: 'Point', coordinates: [14.622543, -90.549897] })), createdAt: now, updatedAt: now },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete({ tableName: 'BranchOffices', schema: 'managers' }, {}, {});
  }
};
