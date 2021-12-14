import React from 'react'
import Dashboard from './Dashboard';
import './DashHome.css';
// export default function DashHome() {
//     return (
//         <div className="app" style={{ backgroundImage: `url(${background})` ,height: '400%' } }>
//             <Dashboard/>
//         </div>
//     )
// }

class DashHome extends React.Component {
    state = {
      collapsed: false,
    };
  
    toggleCollapsed = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };
    // style={{ backgroundImage: `url(${background})` , backgroundSize:`cover`} }
    render() {
      return (
        <div className="app">
            <Dashboard/>
        </div>
      );
    }
  }
  
  
export default DashHome;