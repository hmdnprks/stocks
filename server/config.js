require('dotenv').config();
const config = {
  databaseOptions: {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME,
    ssl: true,
  },
  apiHostOptions: {
    host: 'https://www.alphavantage.co/',
    key: process.env.API_KEY,
    admin_secret: process.env.ADMIN_SECRET,
    timeSeriesFunction: 'TIME_SERIES_INTRADAY',
    interval: '5min'
  },
  graphqlURL: process.env.GRAPHQL_URL
};

const getConfig = (key) => {
  return config[key];
};

module.exports = getConfig;