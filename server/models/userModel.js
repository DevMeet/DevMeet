const { Pool } = require('pg');

const PG_URI =
  'postgres://iduemidi:xPTWxVwsq13191MPaYPWBwtqyBOBGPK1@rajje.db.elephantsql.com:5432/iduemidi';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};
