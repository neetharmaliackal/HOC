import React from 'react';
import  UpdatedComponent from './UpdatedComponent'

const Hover = (props)  => {
        return (
            <h2 onMouseOver={props.increment}>
                {props.count}</h2>
        );
}
export default  UpdatedComponent(Hover);
//   ------------------------------------------------------------------

// import React from 'react';

// class Hover extends React.Component {
//         constructor() {
//                 super()
//                 this.state = {
//                     count: 0
//                 }
//             }
//         increment = () => {
//             this.setState(prevState => {
//                 return {count: prevState.count + 1}
//             })
//         }
//         render(){
//                 const {count} = this.state
//         return (        
//             <h2 onMouseOver={this.increment}>
//                 {count}</h2>
//         );
// }}

// export default Hover;