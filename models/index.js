// import models
const Traveller = require('./traveller');
const Location = require('./location');
const Trips = require('./trips');

// Products belongsTo Category
Trips.belongsTo(Traveller, {
  foreignKey: 'traveller_id',
})

// Categories have many Products
Traveller.hasMany(Trips, {
  foreignKey: 'traveller_id',
  onDelete: 'CASCADE',
})

Trips.belongsTo(Location, {
    foreignKey: 'location_id',
  })
  
  // Categories have many Products
  Location.hasMany(Trips, {
    foreignKey: 'location_id',
    onDelete: 'CASCADE',
  })

// Products belongToMany Tags (through ProductTag)
Traveller.belongsToMany(Location, {through: Trips});

// Tags belongToMany Products (through ProductTag)
Location.belongsToMany(Traveller, {through: Trips});

module.exports = {
  Traveller,
  Location,
  Trips,
};