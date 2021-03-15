import {React,Component}  from 'react'
import Click from './components/Click'
import Hover from './components/Hover'
// import NewComponent from './components/UpdatedComponent'

class App extends Component {
	render() {
		return (
			<div className = "App">
			<Click />
			<Hover />
			{/* <NewComponent/> */}
			</div>
			)
		}
	}
	export default App	