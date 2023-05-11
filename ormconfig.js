module.exports = {
    type: 'postgres',
    host: 'host.docker.internal',
    port: 5433,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    autoLoadEntities: true,
    entities: ['dist/entities/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
    synchribuze: true,
    cli: {
        entitiesDir: 'src/entities',
        migrationsDir: 'src/migrations',
    }
  }