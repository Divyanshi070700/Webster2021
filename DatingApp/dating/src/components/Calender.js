import React from "react";
import "antd/dist/antd.css";
import { Card, Radio, Table, Input, Tooltip, Button, Select, Popconfirm, message } from "antd";
import Icon from '@ant-design/icons';
// import { appointments } from '../appointments';
import "../styles/Calender.css";
import MyNavbar from "./Navbar";
import { CheckCircleOutlined,InfoOutlined,CancelOutlined,CalendarTodaySharp,SearchSharp, ScheduleTwoTone, SearchTwoTone, } from "@material-ui/icons";
import axios from "axios";

const Option = Select.Option;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAll:[],
      allDates: [],
      weekdays: [],
      weekends: [],
      selected: null,
      daySearch: [],
      dayType: '0',
      num: '',
      daysOfTheWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      isLoading:true
    };
  }
  componentDidMount(){
        
    let myPlans=[];
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/mySchedule/",
      
      headers: { "Content-Type": "application/json" ,
      Authorization: "Token "+localStorage.getItem('token')},
    })   
    .then(res => {
      //let tempDate = new Date(new Date().getTime() + (0 * 24 * 60 * 60 * 1000));
      
      
         for(let i=0;i<res.data.length;i++)
         {
           console.log(i);
           myPlans.push({
            completed: res.data[i].finished,
            id: i+1,
            date: res.data[i].date,
            createdAt: res.data[i].time,
            dateTime:res.data[i].dateTime,
            //day: res.data[i].date.getDay(),
            day:res.data[i].day,
            dayOfWeek: this.state.daysOfTheWeek[res.data[i].day],
            //dayOfWeek: this.state.daysOfTheWeek[res.data[i].dateTime.getDay()],
            Partner: res.data[i].sentTo
            
           });
           console.log(res.data[i].day);
         }
         //console.log("hey");
         this.setState({ totalAll: myPlans });
       if(myPlans.length == res.data.length) { 
         console.log(myPlans[0].dayOfWeek);
        
         this.setState({isLoading: false});
        //setUsers(users)
       }
      }
       )
  }
  onDayTypeChange = (e) => {
    this.setState({
      dayType: e.target.value
    });
  }
  dayOfWeekChange = (e) => {
    this.setState({
      daySearch: e
    })
  }
  clearSearch = () => {
    this.setState({
      daySearch: []
    })
  }
  onDelete = (x) => {
    this.setState({
      selected: x
    }, () => {
      this.removeTask(this.state.selected.id)
    })
  }
  removeTask = (id) => {
    let arr = this.state.allDates.filter((x) => {
      return x.id !== id
    })
    let weekdays = arr.filter((x) => {
      return x.day > 0 && x.day < 5
    })
    let weekends = arr.filter((x) => {
      return x.day > 5 || x.day === 0
    })
    this.setState({
      allDates: arr,
      weekdays,
      weekends
    })
  }
  onEdit = (x) => {
    this.setState({
      selected: x
    }, () => {
      console.log(this.state.selected)
    })
  }
  changeTodo = (x) => {
    this.setState({
      selected: x
    }, () => {
      this.findTodo(this.state.selected.id)
    })
  }
  findTodo = (id) => {
    let arr = this.state.allDates.map((x) => {
      if (x.id === id) {
        x.completed = !x.completed
        return x
      } else {
        return x
      }
    })
    let weekdays = arr.filter((x) => {
      return x.day > 0 && x.day < 5
    })
    let weekends = arr.filter((x) => {
      return x.day > 5 || x.day === 0
    })
    this.setState({
      allDates: arr,
      weekdays,
      weekends
    })
  }
  getAllDates = (x) => {
    let num = parseInt(x)
    let allDates = [];
    let weekdays = [];
    let weekends = [];
    let total=this.state.totalAll
    for (var i = 0; i < total.length; i++) {
      let thisTask=total[i]
      let tempDate = new Date(new Date().getTime() + (num * 24 * 60 * 60 * 1000));
      //console.log(thisTask);
      console.log(tempDate)
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const firstDate = tempDate.getDate();
console.log(firstDate)
let sdate=new Date(thisTask.dateTime)
const secondDate = sdate.getDate();
console.log(secondDate)

const diffDays = firstDate-secondDate;
console.log(diffDays+" "+num)
      if(diffDays <= num){
        console.log("found 1");
        allDates.push(thisTask)
        thisTask.day > 5 || thisTask.day === 0 ? weekends.push(thisTask) : weekdays.push(thisTask);
      }

      // let thisTask = {}
      // let tempDate = new Date(new Date().getTime() + (i * 24 * 60 * 60 * 1000));
      // thisTask['completed'] = false;
      // thisTask['id'] = i
      // thisTask['day'] = tempDate.getDay();
      // thisTask['dayOfWeek'] = this.state.daysOfTheWeek[tempDate.getDay()];
      // thisTask['date'] = this.formatDate(tempDate)
      // allDates.push(thisTask)
      //   thisTask.day > 5 || thisTask.day === 0 ? weekends.push(thisTask) : weekdays.push(thisTask);

    }
    this.setState({
      allDates,
      weekends,
      weekdays
    })
  };
  formatDate = (x) => {
    let dd = String(x.getDate())
    let mm = String(x.getMonth() + 1) //January is 0!
    let yyyy = x.getFullYear();
    let date = dd + '/' + mm + '/' + yyyy;
    return date
  };

  changeNum = (e) => {
    this.setState({
      num: e.target.value
    }, () => {
      if (this.state.num !== '' || this.state.num !== 0) {
        this.getAllDates(this.state.num)
      }
    })
  }

  render() {

    let datasource;
    let filteredDatasource;
    if (this.state.dayType === '0') {
      datasource = this.state.allDates
    } else if (this.state.dayType === '1') {
      datasource = this.state.weekdays
    } else {
      datasource = this.state.weekends
    }
    if (this.state.daySearch.length > 0) {
      filteredDatasource = datasource.filter((x) => {
        return this.state.daySearch.includes(x.dayOfWeek)
      })
    }
    const columns = [
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
        render: (text) => {
          return (<a href="javascript:">{text}</a>)
        }
      }, {
        title: "Day of Week",
        dataIndex: "dayOfWeek",
        key: "dayOfWeek",
        render: (text) =>{return (<a href="javascript:">{text}</a>)}
      }, {

        title: "Partner",
        dataIndex: "Partner",
        key: "Partner",
         render: (text) => {return(<a href="javascript:">{text}</a>)}

      },

      {
        title: "Venue",
        dataIndex: "Venue",
        key: "Venue",
        // width: "20%",

        // render: text => <p>{text}</p>

      },

      {
        title: "Time",
        dataIndex: "createdAt",
        key: "createdAt"
      },

      // {
      //   title: "Updated At",
      //   dataIndex: "updatedAt",
      //   key: "updatedAt"
      // },

      {
        title: "Cancel",
        key: "action",
        render: record => (
          <div>
            <Popconfirm title="Are you sure you want to cancel this date?"
              onConfirm={() => { this.onDelete(record) }} okText="Yes" cancelText="No"
            >
              <CancelOutlined style={{color:"red"}} />
              {/* < Button type="danger"
                shape="circle"
                icon="delete"
                size='large'
                style={{ marginRight: 5 }} /> */}
            </Popconfirm>
            {/* < Button type="primary" shape="circle"
              icon="edit"
              size='small'
              style={{ marginRight: 5 }} onClick={() => { this.onEdit(record) }}
            /> */}
          </div >
        )
      },
      {

        title: "Completed",
        key: "completed",
        render: record => ( record.completed===true ?
          
           <Popconfirm title="?" onConfirm={() => { this.changeTodo(record) }} okText="Yes" cancelText="No">
            <CheckCircleOutlined style={{color:"green"}} />
          </Popconfirm>
          :
           <Popconfirm title="Date Complete?" onConfirm={() => { this.changeTodo(record) }} okText="Yes" cancelText="No">
            {/* <Icon type="check-circle" style={{ color: '#D3D3D3' }} /> */}
            <CheckCircleOutlined style={{color:"red"}} />
          </Popconfirm>
          
        
        )
      }
    ];
    if(!this.state.isLoading){
    return (
     
      <div>
        <MyNavbar />
        <Card>
          <Input onChange={this.changeNum.bind(this)}
            value={this.state.num}
            style={{ width: 200 }}
            prefix={<CalendarTodaySharp/>}
            suffix={
              <Tooltip title="Number of days includes today and days after.">
                <InfoOutlined  style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
            placeholder="Enter Number of Days" />
          <br /><br />
          <RadioGroup
            onChange={this.onDayTypeChange.bind(this)}
            value={this.state.dayType}
          >
            <RadioButton value="0">{this.state.allDates.length > 0 ? 'All' + ` (${this.state.allDates.length})` : 'All'} </RadioButton>
            <RadioButton value="1">{this.state.weekdays.length > 0 ? 'Weekdays' + ` (${this.state.weekdays.length})` : 'Weekdays'} </RadioButton>
            <RadioButton value="2">{this.state.weekends.length > 0 ? 'Weekends' + ` (${this.state.weekends.length})` : 'Weekends'}</RadioButton>
          </RadioGroup>

          <br /><br />

          <div style={{ position: 'relative', width: 405, display: 'inline-block' }}>
            <SearchTwoTone style={{ position: 'absolute', zIndex: 100, fontSize: 30, top: 6, right: 5 }}/>
            {/* <Icon type="search" style={{ position: 'absolute', zIndex: 100, fontSize: 20, top: 6, right: 5 }} /> */}
            <Select
              mode="multiple"
              style={{ width: '405px', marginLeft: 5 }}
              value={this.state.daySearch}
              placeholder="Please select days of the week..."
              onChange={this.dayOfWeekChange.bind(this)}
            >
              {this.state.daysOfTheWeek.map((x) => {
                return <Option key={x}>{x}</Option>;
              })}
            </Select>
          </div>
          {this.state.daySearch.length > 0
            ? <Button style={{ display: 'inline-block', marginLeft: 10 }} onClick={this.clearSearch}>Clear Search</Button>
            : null
          }
          <br />
          <br />
          <Table className="tablecontent" columns={columns}
            dataSource={this.state.daySearch.length > 0 ? filteredDatasource : datasource}
            size="small"
            pagination={false}
            title={() => { return <h3><ScheduleTwoTone style={{ fontSize: 30 }} /> Your Schedule </h3> }}
            rowKey={record => record.id}
          />
        </Card>
      </div>
    );
        }
        else
        return(
          <h3>Loading...</h3>
        );
  };

}

export default Schedule;




// import * as React from 'react';
// import Paper from '@material-ui/core/Paper';
// import { ViewState } from '@devexpress/dx-react-scheduler';
// import {
//   Scheduler,
//   WeekView,
//   Appointments,
// } from '@devexpress/dx-react-scheduler-material-ui';
// import { appointments } from '../appointments';

// const currentDate = '2018-06-27';

// const Appointment = ({
//   children, style, ...restProps
// }) => (
//   <Appointments.Appointment
//     {...restProps}
//     style={{
//       ...style,
//       backgroundColor: '#FFC107',
//       borderRadius: '8px',
//     }}
//   >
//     {children}
//   </Appointments.Appointment>
// );

// export default () => (
//   <Paper>
//     <Scheduler
//       data={appointments}
//       height={660}
//     >
//       <ViewState
//         currentDate={currentDate}
//       />
//       <WeekView
//         startDayHour={9}
//         endDayHour={19}
//       />
//       <Appointments
//         appointmentComponent={Appointment}
//       />
//     </Scheduler>
//   </Paper>
// );
