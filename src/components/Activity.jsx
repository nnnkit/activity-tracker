import React from 'react';


class Activity extends React.Component{
    constructor(props){
       super(props);

    }
   
    render(){
        return <>
        <div className='box mt-4 p-2 columns activity'>
        
              <div className='column has-background-info-light is-3'>
               <h2 className='is-size-4 mt-6 has-text-weight-bold has-text-centered'>{this.props.details.name}</h2>
              </div>
              <div className='columns ml-6 mt-2 is-multiline'>
                 {this.props.details.days.map(day=>{
                     return <button onClick={()=>{this.props.handleToggle(day.id, this.props.details.name)}} className={day.isDone?'column p-1 day is-1 button has-background-primary':'column p-1 day is-1 button'}>{day.id}</button>
                 })}
                  
                  
              </div>
              <button name='delete' onClick={(e)=>{this.props.handleDelete(e, this.props.index)}} className="delete is-medium has-background-danger"></button>
        </div>
        
        </>
    }
}


export default Activity;