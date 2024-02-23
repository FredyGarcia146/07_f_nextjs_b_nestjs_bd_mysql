import { Module } from '@nestjs/common';
import { TypeTasksController } from './type_tasks.controller';
import { TypeTasksService } from './type_tasks.service';
import { TypeOrmModule} from '@nestjs/typeorm'
import { Type_task } from './type_task.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Type_task])],
  controllers: [TypeTasksController],
  providers: [TypeTasksService]
})
export class TypeTasksModule {}
