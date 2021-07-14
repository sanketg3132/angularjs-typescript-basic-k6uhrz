import { IComponentOptions, IController } from 'angular';
import { HomeService } from './home.service';

class HomeController implements IController {
  private showTodoList: boolean = true;
  private showEditForm: boolean = false;
  private showAddForm: boolean = false;
  private alertTitle: string;
  private alert: boolean = false;

  private todoList: Todo[] = [];
  private todoObject: Todo;

  constructor(private homeService: HomeService) {}
  $onInit() {
    this.todoList = this.homeService.fetchData();
  }

  public showAddTodo() {
    this.showAddForm = true;
    this.showTodoList = false;
    this.showEditForm = false;
  }

  public showEditTodo(todo: Todo) {
    this.todoObject = todo;
    this.showTodoList = false;
    this.showEditForm = true;
    this.showAddForm = false;
  }

  public onUpdateTodo = editedTodo => {
    this.showEditForm = false;
    this.showEditForm = true;
    this.showAddForm = false;
    this.alertTitle = 'updated';
    this.alert = true;
  };

  public onAddTodo = todo => {
    this.homeService.addTodo(todo);
    this.showAddForm = false;
    this.showTodoList = true;

    this.alertTitle = 'Added';
    this.alert = true;
  };

  public deleteTodo(todo: Todo) {
    var idx = this.todoList.indexOf(todo);
    if (idx >= 0) {
      this.todoList.splice(idx, 1);
    }
    this.alertTitle = 'Deleted';
    this.alert = true;
  }
}

const HomeComponent: IComponentOptions = {
  controller: HomeController,
  template: require('./home.template.html'),
  bindings: {}
};
export { HomeComponent };
