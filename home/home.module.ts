import angular, { IModule } from 'angular';

let homeModule: IModule = angular.module('homeApp', []);

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { edidtTodoComponet } from './edittodo/edit-todo.component';
import { addTodoComponet } from './addtodo/add-todo.component';

homeModule.component('home', HomeComponent);
homeModule.service('homeService', HomeService);
homeModule.component('editTodo', edidtTodoComponet);
homeModule.component('addTodo', addTodoComponet);
export { homeModule };
