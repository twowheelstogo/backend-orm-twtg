'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`CREATE TABLE globals."Cities"(
      "id" INT,
       "RegionId" INT,
       "CountryId" INT,
       "name" varchar(255),
       "gmt" smallint,
       "zoomMap" smallint DEFAULT 12,
       "zipCode" varchar(255),
       "locationRef" geometry(Point),
       "createdAt" timestamptz(6),
       "updatedAt" timestamptz(6),
       PRIMARY KEY("id","RegionId", "CountryId"),
       CONSTRAINT fk_regions_cities
          FOREIGN KEY("RegionId", "CountryId") 
        REFERENCES globals."Regions"("id", "CountryId")
    );
    
    comment on column "globals"."Cities"."id" is 'It is a row id';
    comment on column "globals"."Cities"."name" is 'Name of the city';
    comment on column "globals"."Cities"."RegionId" is 'Reference to region of the country';
    comment on column "globals"."Cities"."CountryId" is 'Reference to country';
    comment on column "globals"."Cities"."gmt" is 'Greenwich mean time of the city';
    comment on column "globals"."Cities"."zipCode" is 'Unique code for the mail in the city';
    comment on column "globals"."Cities"."locationRef" is 'Point map reference of the city';
    comment on column "globals"."Cities"."createdAt" is 'Date of creation of the register';
    comment on column "globals"."Cities"."updatedAt" is 'Date of the last modification of the register';
    comment on column "globals"."Cities"."zoomMap" is 'it is zoom levet to visualizate the city';
    
    comment on table "globals"."Cities" is 'It is a table to show the main cities of the country region';`);
  },
  down: async (queryInterface, Sequelize) => 
  {
    await queryInterface.dropTable({tableName:'Cities',schema: 'globals'});
  }
};