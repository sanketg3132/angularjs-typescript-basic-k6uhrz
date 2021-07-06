import { IComponentOptions, IController } from 'angular';
import { HomeService } from './home.service';

class HomeController implements IController {
  private tableShow: boolean = true;
  private editShow: boolean = false;
  private addShow: boolean = false;
  private alertTitle: string;
  private alert: boolean = false;

  private todoList: Todo[] = [];
  private todoObject: Todo;

  constructor(private homeService: HomeService) {}
  $onInit() {
    this.todoList = this.homeService.fetchData();
  }

  public showAddTodo() {
    this.addShow = true;
    this.tableShow = false;
    this.editShow = false;
  }

  public showEditTodo(todo: Todo) {
    this.todoObject = todo;
    this.tableShow = false;
    this.editShow = true;
    this.addShow = false;
  }

  public onUpdateTodo = editedTodo => {
    this.editShow = false;
    this.tableShow = true;
    this.addShow = false;
    this.alertTitle = 'updated';
    this.alert = true;
  };

  public onAddTodo = todo => {
    this.homeService.addTodo(todo);
    this.addShow = false;
    this.tableShow = true;

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
