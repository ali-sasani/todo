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
    // @observable filterKey = false
    lastID = 0

    @action
    addTodo(title, type, time){
        //let a=new TodoModel(this, title, false, this.lastID++, type, time)
        
            
        
        this.todos.push(new TodoModel(this, title, false, this.lastID++, type, time))
        // this.visibleTodos = this.todos
        // if(this.category===type && this.todos===[]){
        //     this.visibleTodos.push(new TodoModel(this, title, false, this.lastID++, type, time))
        // }
        if(this.todos.length===1)
        {
            this.setAll()
        }
    }

    @action
    setFilterKey(){
        // this.filterKey = filterkey
        this.visibleTodos = this.todos.filter(item => item.completed !== true)
    }
    @action
    setAll(){
        // this.filterKey = filterkey
        this.visibleTodos = this.todos
        //this.category=""
    }
    // @action
    // setShopping(){
    //     // this.filterKey = filterkey
    //     this.visibleTodos = this.todos.filter(item => item.type === 'shopping')
    // }
    // @action
    // setCleaning(){
    //     // this.filterKey = filterkey
    //     this.visibleTodos = this.todos.filter(item => item.type === 'cleaning')
    // }
    @action
    setCategFilter(categ){
        // this.filterKey = filterkey
        this.visibleTodos = this.todos.filter(item => item.type === categ)
        this.category= categ
    }

    @action
    setDelete(id){
        // this.filterKey = filterkey
        
        this.todos = this.todos.filter(item => item.id !== id)
        this.visibleTodos = this.visibleTodos.filter(item => item.id !== id)
        
    }

}

const store = new TodoStore()
export default store 