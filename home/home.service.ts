import { IHttpPromise, IHttpService, IPromise } from 'angular';

class HomeService {
  
  private todoList:Todo[] = [
    {
      id:1,
      todoName: 'login page',
      description: 'make a well look login page according to your thinging'
    },
    {
      id:2,
      todoName: 'error page',
      description: 'make a well look error page according to your thinging'
    }
  ];


  public fetchData(): IHttpPromise<Todo[]> {
    return;
  }
}
export { HomeService };
