'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`CREATE TABLE payments.""(
      "id" INT,
       "branchOfficeId" varchar(50),
       "circleId" INT,
       "timestamp" INT,
       "polygon" GEOMETRY,
       "price" INT,
       "createdAt" timestamptz(6),
       "updatedAt" timestamptz(6),
       PRIMARY KEY("id"),
       CONSTRAINT fk_circles_branchOffices
          FOREIGN KEY("branchOfficeId") 
        REFERENCES managers."BranchOffices"("id"),
        CONSTRAINT fk_branchOffices_circles
          FOREIGN KEY("circleId") 
        REFERENCES payments."Circles"("id")
    );
    comment on column "payments"."BranchOfficeCircles"."id" is 'id';
    comment on column "managers"."BranchOfficeCircles"."branchOfficeId" is 'branchOfficeId';
    comment on column "payments"."BranchOfficeCircles"."circleId" is 'circleId';
    comment on column "payments"."BranchOfficeCircles"."timestamp" is 'timestamp';
    comment on column "payments"."BranchOfficeCircles"."polygon" is 'polygon';
    comment on column "payments"."BranchOfficeCircles"."price" is 'price';
    comment on column "payments"."BranchOfficeCircles"."createdAt" is 'createdAt';
    comment on column "payments"."BranchOfficeCircles"."updatedAt" is 'updatedAt';`);
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable({ tableName: 'BranchOfficeCircles', schema: 'payments' });
    }
    };