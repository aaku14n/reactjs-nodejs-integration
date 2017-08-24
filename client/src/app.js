import React from "react";
import "./App.css";
import DataPrint from "./dataPrint";
import AddData from "./addData";
// const todos = [];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  // state = { todos: [] };

  componentDidMount() {
    fetch("/users",{headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }})
      .then(res => res.json())
      .then(todos => this.setState({ todos }));
  }

  render() {
    return (
      <html>
        <head>
          // <link href="App.css" rel="stylesheet" />
        </head>
        <body>
          <div className="App">
            <div className="PageHeader">
              <h2>
                Welcome to React {this.props.name}
              </h2>
            </div>
            <div className="PageContent">
              <div className="PageLeft">
                <DataPrint
                  todos={this.state.todos}
                  deletetask={this.deletetask.bind(this)}
                  editData={this.editData.bind(this)}
                />
              </div>
              <div className="PageRight">
                <h1>Add Data</h1>
                <AddData addData={this.addData.bind(this)} />
              </div>
            </div>
            <div className="pageBottom">Thanx</div>
          </div>
        </body>
      </html>
    );
  }

  deletetask(task) {
    this.state.todos.forEach(function(item){
      if(item._id==task)
        item.status=0
    })
    this.setState({ todos: this.state.todos });

    fetch("/dltUser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: task
      })
    })
      .then(function(response) {
        return response.text();
      })
      .then(function(text) {
        // <!DOCTYPE ....
        console.log(text);
      });
  }
  addData(task) {
    task._id = this.state.todos[this.state.todos.length-1]._id + 1;
    this.state.todos.push(task);
    this.setState({ todos: this.state.todos });
    fetch("/addUser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    })
      .then(function(response) {
        return response.text();
      })
      .then(function(text) {
        // <!DOCTYPE ....
        console.log(text);
      });
  }
  editData(task) {
        this.state.todos.forEach(function(item){
      if(item._id==task.id)
        item.title = task.title;
        item.description = task.desc;
    })
    this.setState({ todos: this.state.todos });
      fetch("/updateUser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    })
      .then(function(response) {
        return response.text();
      })
      .then(function(text) {
        // <!DOCTYPE ....
        console.log(text);
      });
  }
}

export default App;
