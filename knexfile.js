// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/cookbook.sqlite3'
    },
    useNullAsDefault: true, // needed for sqlite
    debug: true
  }

};
