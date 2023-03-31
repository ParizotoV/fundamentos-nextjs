import { Module } from '@nestjs/common';
import { databaseProviders } from '../database.providers';

@Module({
  // Pode ser injetavel
  providers: [...databaseProviders],
  // Os outros modulos pode ser usados
  exports: [...databaseProviders],
})
export class DatabaseModule {}
