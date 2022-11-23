const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "flights",
    {
      YEAR: {},
      MONTH: {},
      DAY: {},
      DAY_OF_WEEK: {},
      AIRLINE: {},
      FLIGHT_NUMBER: {},
      TAIL_NUMBER: {},
      ORIGIN_AIRPORT: {},
      DESTINATION_AIRPORT: {},
      SHEDULED_DEPARTURE: {},
      DEPARTURE_TIME: {},
      DEPARTURE_DELAY: {},
      TAXI_OUT: {},
      WHEELS_OFF: {},
      SCHEDULED_TIME: {},
      ELAPSED_TIME: {},
      AIR_TIME: {},
      DISTANCE: {},
      WHEELS_ON: {},
      TAXI_IN: {},
      SCHEDULED_ARRIVAL: {},
      ARRIVAL_TIME: {},
      ARRIVAL_DELAY: {},
      DIVERTED: {},
      CANCELLED: {},
      CANCELLATION_REASON: {},
      AIR_SYSTEM_DELAY: {},
      SECURITY_DELAY: {},
      AIRLINE_DELAY: {},
      LATE_AIRCRAFT_DELAY: {},
      WEATHER_DELAY: {},
    },
    {createdAt: false, updatedAt: false}
  );
};