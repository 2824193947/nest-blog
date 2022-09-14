import { developmentConfig } from './config/dev.config';
import { ProductionConfig } from './config/pro.config';
import { config } from 'dotenv';
import { join } from 'path';

config({ path: join(__dirname, '../.env') });
export const ConfigService = {
  provide: 'ConfigService',
  useValue:
    process.env.NODE_ENV === 'development'
      ? developmentConfig
      : ProductionConfig,
};
