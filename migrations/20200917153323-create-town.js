'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`CREATE TABLE globals."Towns"(
       "id" INT,
       "RegionId" INT,
       "CountryId" INT,
       "CityId" INT,
       "name" varchar(255),
       "gmt" smallint,
       "zoomMap" smallint DEFAULT 17,
       "zipCode" varchar(255) null,
       "locationRef" geometry(Point),
       "createdAt" timestamptz(6),
       "updatedAt" timestamptz(6),
       PRIMARY KEY("id","RegionId", "CountryId", "CityId"),
       CONSTRAINT fk_cities_towns
          FOREIGN KEY("CityId", "RegionId", "CountryId") 
        REFERENCES globals."Cities"("id", "RegionId", "CountryId")
    );
    
    comment on column "globals"."Towns"."id" is 'It is a row id';
    comment on column "globals"."Towns"."name" is 'Name of the city';
    comment on column "globals"."Towns"."RegionId" is 'Reference to region of the country';
    comment on column "globals"."Towns"."CountryId" is 'Reference to country';
    comment on column "globals"."Towns"."CityId" is 'Reference to city';
    comment on column "globals"."Towns"."gmt" is 'Greenwich mean time of the town';
    comment on column "globals"."Towns"."zipCode" is 'Unique code (optional) for the mail in the town';
    comment on column "globals"."Towns"."locationRef" is 'Point map reference of the town';
    comment on column "globals"."Towns"."createdAt" is 'Date of creation of the register';
    comment on column "globals"."Towns"."updatedAt" is 'Date of the last modification of the register';
    comment on column "globals"."Towns"."zoomMap" is 'it is zoom levet to visualizate the town';
    
    comment on table "globals"."Towns" is 'It is a table to show the main town of the city';`);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({tableName:'Towns',schema: 'globals'});
  }
};