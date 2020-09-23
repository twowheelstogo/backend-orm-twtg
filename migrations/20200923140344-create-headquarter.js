'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createSchema("managers",
    {comment: "models mainly of the business"});
    await queryInterface.sequelize.query(`CREATE TABLE managers."Headquarters"(
      "id" UUID,
       "CountryId" INT,
       "RegionId" INT,
       "CityId" INT,
       "TownId" INT NULL,
       "location" geometry(Point),
       "address" varchar(255),
       "phone" varchar(255),
       "createdAt" timestamptz(6),
       "updatedAt" timestamptz(6),
       PRIMARY KEY("id"),
       CONSTRAINT fk_managers_cities
          FOREIGN KEY("CountryId", "RegionId", "CityId") 
        REFERENCES globals."Cities"("CountryId", "RegionId", "id")
    );
    
    comment on column "managers"."Headquarters"."id" is 'Unique identification of the headquarter';
    comment on column "managers"."Headquarters"."CountryId" is 'Reference of the country';
    comment on column "managers"."Headquarters"."RegionId" is 'Reference to region of the country';
    comment on column "managers"."Headquarters"."CityId" is 'Reference to country';
    comment on column "managers"."Headquarters"."TownId" is 'reference  the town (It is optionally)';
    comment on column "managers"."Headquarters"."location" is 'Latitude and longitude of the headquarter';
    comment on column "managers"."Headquarters"."address" is 'Address Direction';
    comment on column "managers"."Headquarters"."phone" is 'Contact number';
    comment on column "managers"."Headquarters"."createdAt" is 'Date of creation of the register';
    comment on column "managers"."Headquarters"."updatedAt" is 'List of the headquarter';
    
    comment on table "managers"."Headquarters" is 'List of the headquarter';`);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({tableName: 'Headquarters', schema: 'managers' });
    await queryInterface.dropSchema("managers");
  }
};