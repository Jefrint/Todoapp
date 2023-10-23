import React,{Component} from 'react';
 import "./todo.css"
export class todoapp extends Component{
state={
    data:"",
    items:[]
}
handlechange=(event)=>{
    this.setState({
       data:event.target.value
    })
    }
storeitem=(event)=>{
    event.preventDefault();
    const {data}=this.state;
    this.setState({
    items:[...this.state.items,data],
    data:""
})}
deleteItem=(key)=>{
    const allitem=this.state.items;
    allitem.splice(key,1)

this.setState({
items:allitem
})
}
    render() {
        
        return (
             <div className='todo-container'>
                <form className='input-section'  >
                <h1>TODO APP</h1>
                <input type="text" placeholder='ENTER WORKS...' onChange={this.handlechange} value={this.state.data}/> 
              <button onClick={this.storeitem}>submit</button>
                </form>
                 <ul>
                    {this.state.items.map((data,index)=>(
                        <li key={index}>{data} <i class="fa-solid fa-trash" onClick={()=>this.deleteItem(index)}></i></li>
                    )

                    )}
                  
                 </ul>

             </div>
        );
    }
}
export default todoapp;
