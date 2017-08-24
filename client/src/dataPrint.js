import React from "react";
import "./App.css";
const data_item = [];

export default class DataPrint extends React.Component {
  render() {
    return (
      <div>
        <h1>DataFlow of Datasets</h1>
        <nav className="ulStyle">
          {this.props.todos.map(todos => {
            return (
              <div key={todos._id}>
                {this.showData(todos)}
              </div>
            );
          })}
        </nav>
      </div>
    );
  }

  deleteData(dataId) {
    this.props.deletetask(dataId);
  }

  editReset(id, title, desc) {
    let tempTitle = title;
    let tempDesc = desc;
    return (
      <div>
        <input
          type="text"
          id={"Edittitle" + id}
          placeholder={tempTitle}
          className="Edittitle"
        />
        <br />
        <input
          type="text"
          id={"EditDes" + id}
          className="EditDes"
          placeholder={tempDesc}
        />
        <br />
        <button id="editSave" onClick={e => this.editDataList(id)}>
          Edit
        </button>
        <button onClick={e => this.editCancel(id)} id="editReset">
          Cancel
        </button>
      </div>
    );
  }
  editCancel(id) {
    document.getElementById("editList" + id).style.display = "none";
    return true;
  }
  editData(data) {
    data_item.push(data);
    data_item.forEach(function(item) {
      document.getElementById("editList" + item).style.display = "none";
    });
    document.getElementById("editList" + data).style.display = "block";
  }
  editDataList(id) {
    let task = {};
    task.id = id;
    task.title = document.getElementById("Edittitle" + id).value;
    task.desc = document.getElementById("EditDes" + id).value;
    this.props.editData(task);
    document.getElementById("editList" + id).style.display = "none";
  }

  showData(todos) {
    if (todos.status)
      return (
        <div className="cards">
          <a
            title="Edit"
            className="iconright"
            id={todos._id}
            onClick={e => this.editData(todos._id)}
          >
            &#9998;
          </a>
          <a
            title="Delete"
            className="icon"
            onClick={e => this.deleteData(todos._id)}
          >
            &#10008;
          </a>
          <div>
            <b>Title-</b> &nbsp;
            <div id={"title" + todos._id}>{todos.title}</div>
            <br />
          </div>

          <a>
            <b>Description </b>
            <div id={"des" + todos._id}>
              {todos.description}
            </div>
          </a>
          <div className="showw" id={"editList" + todos._id}>
            {this.editReset(todos._id, todos.title, todos.description)}
          </div>
        </div>
      );
  }
}
