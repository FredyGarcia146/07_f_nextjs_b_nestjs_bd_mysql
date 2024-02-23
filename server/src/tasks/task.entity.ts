import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  RelationId
} from 'typeorm';
import { Type_task } from 'src/type_tasks/type_task.entity';
import { userInfo } from 'os';

@Entity({ name: 'task' })
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  
  @Column()
  type_task_id:number
  

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  done: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  
  @ManyToOne(() => Type_task, (type_task) => type_task.task_R)
  @JoinColumn({ name: 'type_task_id'})
  type_task_id_R: Type_task;

  /*
  @ManyToOne(() => Type_task, (type_task) => type_task.task_R)
  @JoinColumn(
    {name:'type_task_id', referencedColumnName:'id'}
  )
  type_task_R: Type_task;
  */

}
