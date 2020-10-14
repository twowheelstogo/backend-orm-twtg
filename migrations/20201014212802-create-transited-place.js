'use strict';
module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createSchema("business",
    {comment: "create business model"});

    await queryInterface.sequelize.query(`CREATE TABLE business."TransitedPlaces"(
      "id" INT,
      "name" varchar(255),
      "description" varchar(255) null,
      "RegionId" INT,
      "CountryId" INT,
      "CityId" INT,
      "TownId" INT null,
      "Point" geometry(Point),
      "Perimeter" geometry(Polygon),
      "createdAt" timestamptz(6),
      "updatedAt" timestamptz(6),
      PRIMARY KEY("id"),
      CONSTRAINT fk_cities_TransitedPlaces
         FOREIGN KEY("CityId", "RegionId", "CountryId") 
       REFERENCES globals."Cities"("id", "RegionId", "CountryId")
   );
   
   comment on column "business"."TransitedPlaces"."id" is 'it is the name that identified a transited place';
   comment on column "business"."TransitedPlaces"."name" is 'Name of the city';
   comment on column "business"."TransitedPlaces"."description" is 'to give details of the transited place';
   comment on column "business"."TransitedPlaces"."RegionId" is 'Reference to region';
   comment on column "business"."TransitedPlaces"."CityId" is 'Reference to city';
   comment on column "business"."TransitedPlaces"."TownId" is 'it is a pointer to town';
   comment on column "business"."TransitedPlaces"."Point" is 'It is a geo point to refer the transited place';
   comment on column "business"."TransitedPlaces"."Perimeter" is 'Is a polygon that limit the area of the transited place';
   comment on column "business"."TransitedPlaces"."createdAt" is 'Date of creation of the register';
   comment on column "business"."TransitedPlaces"."updatedAt" is 'Date of the last modification of the register';
   comment on table "business"."TransitedPlaces" is 'It is a model to get a rate';`);

  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({ tableName: 'TransitedPlaces', schema: 'business' });
    await queryInterface.dropSchema("business");
  }
};