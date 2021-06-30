import { IHttpPromise, IHttpService, IPromise } from 'angular';

class HomeService {
  private todoList: Todo[] = [
    {
      id: 1,
      todoName: 'login page',
      description: 'make a well look login page according to your thinging'
    },
    {
      id: 2,
      todoName: 'error page',
      description: 'make a well look error page according to your thinging'
    }
  ];

  public fetchData(): Todo[] {
    return this.todoList;
  }

  public addTodo(todo: Todo) {
    todo.id = this.todoList[this.todoList.length - 1].id + 1;
    this.todoList.push(todo);
  }
}
export { HomeService };
