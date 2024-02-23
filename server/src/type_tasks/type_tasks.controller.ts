import { Controller,Get } from '@nestjs/common';
import { TypeTasksService } from './type_tasks.service';

@Controller('type-tasks')
export class TypeTasksController {

    constructor(private typeTaskServices : TypeTasksService){}

    @Get()
    GetTasks(){
      return this.typeTaskServices.getAllTypeTasks();
    }

}
