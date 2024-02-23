import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Task } from 'src/tasks/task.entity';

@Entity({ name: 'type_task' })
export class Type_task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Task, (task) => task.type_task_id_R)
  task_R: Task[];

}
