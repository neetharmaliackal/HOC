import React from 'react';
import UpdatedComponent from './UpdatedComponent';

const Click = (props) => {

        return (
        <button onClick={props.increment}>
            {props.count}</button>
        );
}

export default UpdatedComponent(Click);
// ------------------------------------------------------------------------------------
// import React from 'react';

// class Click  extends React.Component {
//         constructor() {
//             super()
//             this.state = {
//                 count: 0
//             }
//         }
//     increment = () => {
//         this.setState(prevState => {
//             return {count: prevState.count + 1}
//         })
//     }

//     render() {
//         const {count} = this.state
//         return (
//         <button onClick={this.increment}>
//             {count}</button>
//         );
// }
// }

// export default Click;