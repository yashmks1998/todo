import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
public id:number,
public description:string,
public done:boolean,
public targetDate:Date

) { 
  
}
}
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
todos=[
new Todo(1,'Learn to Dance',false,new Date()),
new Todo(2,'Learn to COde',false,new Date()),
new Todo(3,'Became expert in angular',false,new Date()),
new Todo(4,'Visit Austria',false,new Date())

  // {id:1,description:'Learn to Dance'},
  // {id:2,description:'Became expert in angular'},
  // {id:3,description:'Visit Austria'},
  // {id:4,description:'Code'}
]
  // todo={
  //   id:1,
  //   description:'Learn to Dance'
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
