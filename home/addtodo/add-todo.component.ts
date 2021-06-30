import { IComponentOptions, IController } from 'angular';

class addTodoController implements IController {
  private todo: Todo;

  private onAddTodo: () => (newTodo: Todo) => void;

  public sendDtatForAdd() {
    this.onAddTodo()(this.todo);
  }
}
const addTodoComponet: IComponentOptions = {
  controller: addTodoController,
  template: require('./add-todo.template.html'),
  bindings: {
    onAddTodo: '&'
  }
};

export { addTodoComponet };
