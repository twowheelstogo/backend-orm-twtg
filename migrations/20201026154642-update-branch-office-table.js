'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`CREATE TABLE managers."BranchOffices"(
      "id" UUID,
      "CompanyId" UUID,
      "name" varchar(255),
      "description" varchar(255) null,
      "address" varchar(255),
      "CountryId" INT,
      "RegionId" INT,
      "CityId" INT,
      "TownId" INT null,
      "point" geometry(Point),
      "perimeter" geometry(Polygon) null,
      "enable" boolean default TRUE,
      "createdAt" timestamptz(6),
      "updatedAt" timestamptz(6),
      "publicKey" UUID,
      "privateKey" varchar,
      "uidFirebase" varchar null,
      "phone" varchar null,
      PRIMARY KEY("id"),
      CONSTRAINT fk_cities_BranchOffices
         FOREIGN KEY("CityId", "RegionId", "CountryId") 
       REFERENCES globals."Cities"("id", "RegionId", "CountryId"),
      CONSTRAINT fk_companies_BranchOffices
       FOREIGN KEY("CompanyId") 
     REFERENCES managers."Companies"("id")
   );
   
   comment on column "managers"."BranchOffices"."id" is 'it is the name that identified a transited place';
   comment on column "managers"."BranchOffices"."CompanyId" is 'Relation of company ID';
   comment on column "managers"."BranchOffices"."name" is 'Name of the  branch office';
   comment on column "managers"."BranchOffices"."description" is 'Description of the branch office';
   comment on column "managers"."BranchOffices"."CountryId" is 'Reference to country';
   comment on column "managers"."BranchOffices"."RegionId" is 'Reference to region';
   comment on column "managers"."BranchOffices"."CityId" is 'Reference to city';
   comment on column "managers"."BranchOffices"."TownId" is 'it is a pointer to town';
   comment on column "managers"."BranchOffices"."point" is 'It is a geo point to refer the branch';
   comment on column "managers"."BranchOffices"."perimeter" is 'Is a polygon that limit the area of the branch';
   comment on column "managers"."BranchOffices"."createdAt" is 'Date of creation of the register';
   comment on column "managers"."BranchOffices"."updatedAt" is 'Date of the last modification of the register';
   comment on column "managers"."BranchOffices"."publicKey" is 'public key unique to identified API';
   comment on column "managers"."BranchOffices"."privateKey" is 'Key was encripted to access the API';
   comment on column "managers"."BranchOffices"."enable" is 'column that check it is enabled';
   comment on column "managers"."BranchOffices"."uidFirebase" is 'Uid token authentication on firebase';
   comment on column "managers"."BranchOffices"."phone" is 'number phone calls this branch';
   comment on column "managers"."BranchOffices"."address" is 'string geo point';
   comment on table "managers"."BranchOffices" is 'It is a model to get branch office of the company';`);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({ tableName: 'BranchOffices', schema: 'managers' });
  }
};