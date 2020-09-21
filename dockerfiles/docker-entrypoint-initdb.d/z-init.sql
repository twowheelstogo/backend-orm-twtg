CREATE TABLE distributors (
     did    integer PRIMARY KEY,
     name   varchar(40) NOT NULL CHECK (name <> ''),
     theGeometry Geometry
);