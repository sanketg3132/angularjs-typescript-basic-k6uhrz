import { IComponentOptions, IController } from 'angular';

class editTodoController implements IController {}
const edidtTodoComponet: IComponentOptions = {
  controller: editTodoController,
  template: require('./edit-todo.template.html'),
  bindings: {}
};

export{edidtTodoComponet}
