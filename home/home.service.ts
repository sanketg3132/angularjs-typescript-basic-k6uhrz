import { IHttpPromise, IHttpService, IPromise } from 'angular';

class HomeService {
  private todoList: Todo[] = [
    {
      todoName: 'login page',
      description: 'make a well look login page according to your thinging'
    },
    {
      todoName: 'error page',
      description: 'make a well look error page according to your thinging'
    }
  ];

  public fetchData(): Todo[] {
    return this.todoList;
  }

  public addTodo(todo: Todo) {
    this.todoList.push(todo);
  }
}
export { HomeService };
