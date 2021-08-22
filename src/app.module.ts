import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TaskModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '164.52.203.125',
      port: 8987,
      username: 'javelinuser',
      password: 'javelinpassword',
      database: 'javelindb',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule { }