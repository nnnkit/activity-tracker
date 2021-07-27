import React from 'react';

class Activity extends React.Component{
    constructor(props){
       super(props);

    }

    render(){
        return <>
        <div className='box mt-4 p-2 columns activity'>
        
              <div className='column has-background-info-light is-3'>
               <h2 className='is-size-4 mt-6 has-text-weight-bold has-text-centered'>Music</h2>
              </div>
              <div className='columns ml-6 mt-2 is-multiline'>
                  <button className='column p-1 day is-1 button'>1</button>
                  <button className='column p-1 day is-1 button'>2</button>
                  <button className='column p-1 day is-1 button'>3</button>
                  <button className='column p-1 day is-1 button'>4</button>
                  <button className='column p-1 day is-1 button'>5</button>
                  <button className='column p-1 day is-1 button'>6</button>
                  <button className='column p-1 day is-1 button'>7</button>
                  <button className='column p-1 day is-1 button'>1</button>
                  <button className='column p-1 day is-1 button'>2</button>
                  <button className='column p-1 day is-1 button'>3</button>
                  <button className='column p-1 day is-1 button'>4</button>
                  <button className='column p-1 day is-1 button'>5</button>
                  <button className='column p-1 day is-1 button'>6</button>
                  <button className='column p-1 day is-1 button'>7</button>
                  <button className='column p-1 day is-1 button'>1</button>
                  <button className='column p-1 day is-1 button'>2</button>
                  <button className='column p-1 day is-1 button'>3</button>
                  <button className='column p-1 day is-1 button'>4</button>
                  <button className='column p-1 day is-1 button'>5</button>
                  <button className='column p-1 day is-1 button'>6</button>
                  <button className='column p-1 day is-1 button'>7</button>
                  <button className='column p-1 day is-1 button'>1</button>
                  <button className='column p-1 day is-1 button'>2</button>
                  <button className='column p-1 day is-1 button'>3</button>
                  <button className='column p-1 day is-1 button'>4</button>
                  <button className='column p-1 day is-1 button'>5</button>
                  <button className='column p-1 day is-1 button'>6</button>
                  <button className='column p-1 day is-1 button'>7</button>
                  
              </div>
              <button class="delete is-medium has-background-danger"></button>
        </div>
        
        </>
    }
}


export default Activity;