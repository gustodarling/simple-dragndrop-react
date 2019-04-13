import React, {Component} from 'react'
import Draggable from 'react-draggable'

export const TodoList = (props) => {
  let tasks = props.tasks
  let cls = "list "
  if (props.header == 'To Do') {
    cls += 'todo'
  } else if (props.header == 'In Progress') {
    cls += 'progress'
  } else {
    cls += 'done'
  }
  let renderCards = props.tasks.map((task) => {
    return <li key={task.id} draggable={true}
    onDragStart={(e)=>{props.dragStart(task, e)}}
    onDrag={(e)=>{ props.drag(task, e)}}
    >
    {task.name}
    </li>
  })
  return <div className={cls} onDrop={(e)=>props.drop(e)} onDragOver={(e)=>{ props.dragover(e)}}>
    <div className="header-count-container">
      <h4>{props.header}</h4>
      <div className="count">
        <b>{tasks.length}</b>
        <span>Projects</span>
      </div>
    </div>
      <ul>{renderCards}</ul>
  </div>
}