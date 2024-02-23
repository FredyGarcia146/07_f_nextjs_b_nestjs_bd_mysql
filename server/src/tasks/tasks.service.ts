import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRespository: Repository<Task>,
  ) {}

  createTask(task: CreateTaskDto) {
    const newTask = this.taskRespository.create(task);
    //console.log(newTask)

    if (newTask.done) {
      newTask.done = 1;
    } else {
      newTask.done = 0;
    }

    //console.log(newTask)
    return this.taskRespository.save(newTask);
  }

  getAllTasks() {
    return this.taskRespository.find();
  }

  getOneTasks(id: number) {
    const newTask = this.taskRespository.findOneBy({ id: id });
    //console.log(newTask)
    return newTask;
  }

  deleteTask(id: number) {
    return this.taskRespository.delete(id);
  }

  async updateToggleTask(id: number) {
    const newDone = await this.taskRespository.findOne({
      select: { done: true },
      where: { id: id },
    });

    //console.log(id);
    //console.log(newDone);

    if (newDone.done === 0) {
      newDone.done = 1;
    } else {
      newDone.done = 0;
    }

    return this.taskRespository.update(id, newDone);
  }

  updateTask(id: number, task: CreateTaskDto) {
    const newTask = this.taskRespository.create(task);

    //console.log(newTask);

    if (newTask.done) {
      newTask.done = 1;
    } else {
      newTask.done = 0;
    }

    //console.log(newTask)
    return this.taskRespository.update(id, newTask);
  }
}
