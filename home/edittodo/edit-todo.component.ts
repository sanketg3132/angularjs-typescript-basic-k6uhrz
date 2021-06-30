import { IComponentOptions, IController } from 'angular';

class editTodoController implements IController {
  private todoObject: Todo;

  private onUpdateTodo: () => (editedtodo: Todo) => void;

  public sendEditedTodo() {
    this.onUpdateTodo()(this.todoObject);
  }
}
const edidtTodoComponet: IComponentOptions = {
  controller: editTodoController,
  template: require('./edit-todo.template.html'),
  bindings: {
    todoObject: '<',
    onUpdateTodo: '&'
  }
};

export { edidtTodoComponet };
