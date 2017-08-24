import React from "react";
import "./App.css";

export default class AddData extends React.Component {
  render() {
    return (
      <div>
        Welcome<br />
        <input type="text" name="title" className="titleInput" id="title" />
        <br />
        <textarea name="description" className="descriInput" id="desc" />
        <br />
        <button
          type="button"
          value="Save"
          className="saveBtn"
          onClick={e => this.saveDataList()}
        >
          Save
        </button>
        <button
          type="reset"
          value="Reset"
          className="saveBtn"
          onClick={e => this.resetDataList()}
        >
          Reset
        </button>
      </div>
    );
  }
  saveDataList() {
    let title = document.getElementById("title").value;
    let des = document.getElementById("desc").value;
    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
    if (title === "" || des === "") {
      return true;
    }
    let task = {};
    task.title = title;
    task.description = des;
    task.status = 1;
    this.props.addData(task);
    return true;
  }
  resetDataList() {
    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
  }
}
