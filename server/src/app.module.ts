import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// News Imports 

import { TypeOrmModule} from '@nestjs/typeorm'
import { TypeTasksModule } from './type_tasks/type_tasks.module';
import { TasksModule } from './tasks/tasks.module';

import { ConfigModule} from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'password',
      database:'crud_mysql_dev',
      entities:[__dirname + '/**/*.entity{.ts,.js}'],
      synchronize:false
    }),
    TasksModule,
    TypeTasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
