import {action , observable} from 'mobx'
import TodoModel from './TodoModel'
class TodoStore{
    @observable todos = []
    @observable category="" 
    @observable categories = [
        'shopping',
        'cleaning'
    ]
    @observable visibleTodos = this.todos
    lastID = 0

    @action
    addTodo(title, type, time){
        
            
        
        this.todos.push(new TodoModel(this, title, false, this.lastID++, type, time))
        if(this.todos.length===1)
        {
            this.setAll()
        }
    }

    @action
    setFilterKey(){
        this.visibleTodos = this.todos.filter(item => item.completed !== true)
    }
    @action
    setAll(){
        this.visibleTodos = this.todos
    }
    @action
    setCategFilter(categ){
        this.visibleTodos = this.todos.filter(item => item.type === categ)
        this.category= categ
    }

    @action
    setDelete(id){        
        this.todos = this.todos.filter(item => item.id !== id)
        this.visibleTodos = this.visibleTodos.filter(item => item.id !== id)
        
    }

}

const store = new TodoStore()
export default store 