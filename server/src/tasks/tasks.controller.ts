import {
  Controller,
  Body,
  Get,
  Post,
  Delete,
  Put,
  Patch,
  Param,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { request } from 'http';

@Controller('tasks')
export class TasksController {
  constructor(private tasksServices: TasksService) {}

  @Get()
  GetTasks() {
    return this.tasksServices.getAllTasks();
  }

  @Get(':id/get')
  GetTask(@Param('id') id: number) {
    return this.tasksServices.getOneTasks(id);
  }

  @Post('add')
  CreateTask(@Body() newTask: CreateTaskDto) {
    return this.tasksServices.createTask(newTask);
  }

  @Delete(':id/delete')
  DeleteTask(@Param('id') id: number) {
    return this.tasksServices.deleteTask(id);
  }

  @Patch(':id/toggleDone')
  UpdateToggleTask(@Param('id') id: number) {
    return this.tasksServices.updateToggleTask(id);
  }

  @Put(':id/edit')
  UpdateTask(@Param('id') id: number, @Body() newTask: CreateTaskDto) {
    return this.tasksServices.updateTask(id, newTask);
  }
}
