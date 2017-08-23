import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.scss'
})
export class TodoList {
  @Prop() title: string;

  render() {
    return (
    <p>
      {this.title}
    </p>
    );
  }

}