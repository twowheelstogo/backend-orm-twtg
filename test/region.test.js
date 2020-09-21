const { expect } = require('chai');

const db = require("./mockups/db.mockup");
const regionsMockup = require("./mockups/region.mockup");

describe('check region model', () => {
  before(() =>{
    db.authenticate();
  })

  it("Check properties name", async ()=>{
    let properties = ["id", "name", "zoomMap", "locationRef", "CountryId"];
    let region = await db["Region"].build(regionsMockup); 
    properties.forEach((prop)=>{
      expect(region._changed.has(prop)).to.be.true;
    });
  });
});