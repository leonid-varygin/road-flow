import { DataSource } from 'typeorm';

export const config = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Mt032361',
  database: 'RoadCRM',
  // entities: [__dirname + '/**/*.entity{.ts, .js}'],
  synchronize: true,
  // logging: true,
});

// export default config;
