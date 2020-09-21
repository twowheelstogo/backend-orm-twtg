const { expect } = require('chai');

const db = require("./mockups/db.mockup");
const countriesMockup = require("./mockups/country.mockup");

describe('check country model', () => {
  before(() =>{
    db.authenticate();
  })

  it("Check properties name", async ()=>{
    let properties = ["id", "name", "code", "locationRef"];
    let country = await db["Country"].build(countriesMockup); 
    properties.forEach((prop)=>{
      expect(country._changed.has(prop)).to.be.true;
    });
  });
});