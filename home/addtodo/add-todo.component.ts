import { IComponentOptions, IController } from 'angular';

class addTodoController implements IController {}
const addTodoComponet: IComponentOptions = {
  controller: addTodoController,
  template: require('./edit-todo.template.html'),
  bindings: {}
};

export { addTodoComponet };
