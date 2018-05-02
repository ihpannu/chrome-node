import React, { Component } from "react";
import axios from "axios";
import "./index.css";
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }
  componentDidMount() {
    this.fetchProjects();
    this.fetchPeople();
  }

  fetchProjects = () => {
    const urlProjects = "/api/projects";
    axios.get(urlProjects).then(res => console.log(res));
  };

  fetchPeople = () => {
    const urlPeople = "/api/people";
    axios
      .get(urlPeople)
      .then(res => {
        // this.setState({
        //   data: res.data
        // });
        // res.data.map(person => console.log(person.id));
        this.setState({
          data: res.data.map(person => person.id)
        });
      })
      .catch(err => console.error(err.message));
  };
  render() {
    return (
      <div>
        <div id="extension">
          <div className="container">
            <div>
              <h1>{this.state.data[0]}</h1>
            </div>
            <div className="forecasted">
              <h2>Forecasted Weekly Utilization</h2>
              <div className="projects">
                <div className="project project-one">
                  <h3>Some Project 1</h3>
                  <li className="list-one">
                    <span className="square">
                      <i className="fa fa-square" />
                    </span>
                    <span className="hours">24</span>
                    <span className="hour-info">hrs So Far</span>
                  </li>
                  <li className="list-two">
                    <span className="square">
                      <i className="fa fa-square" />
                    </span>
                    <span className="hours">24</span>
                    <span className="hour-info">hrs forecasted</span>
                  </li>
                </div>
                <div className="project project-two">
                  <h3>Enter Cyber</h3>
                  <li className="list-one">
                    <span className="square">
                      <i className="fa fa-square" />
                    </span>
                    <span className="hours">2 </span>
                    <span className="hour-info">hrs So Far</span>
                  </li>
                  <li className="list-two">
                    <span className="square">
                      <i className="fa fa-square" />
                    </span>
                    <span className="hours">3 </span>
                    <span className="hour-info">hrs forecasted</span>
                  </li>
                </div>
                <div className="project project-three">
                  <h3>Project Three</h3>
                  <li className="list-one">
                    <span className="square">
                      <i className="fa fa-square" />
                    </span>
                    <span className="hours">2</span>
                    <span className="hour-info">hrs So Far</span>
                  </li>
                  <li className="list-two">
                    <span className="square">
                      <i className="fa fa-square" />
                    </span>
                    <span className="hours">5</span>
                    <span className="hour-info">hrs forecasted</span>
                  </li>
                </div>
                <div className="project project-four">
                  <h3>Chrome Extension</h3>
                  <li className="list-one">
                    <span className="square">
                      <i className="fa fa-square" />
                    </span>
                    <span className="hours">24</span>
                    <span className="hour-info">hrs So Far</span>
                  </li>
                  <li className="list-two">
                    <span className="square">
                      <i className="fa fa-square" />
                    </span>
                    <span className="hours">32</span>
                    <span className="hour-info">hrs forecasted</span>
                  </li>
                </div>
              </div>
            </div>
            <div className="not-forecasted">
              <h2>Not Forecasted Weekly Utilization</h2>
              <div className="projects">
                <div className="project project-one">
                  <h3>Some Project 1</h3>
                  <li className="list-one">
                    <span className="square">
                      <i className="fa fa-square" />
                    </span>
                    <span className="hours">24</span>
                    <span className="hour-info">hrs So Far</span>
                  </li>
                </div>
                <div className="project project-two">
                  <h3>Enter Cyber</h3>
                  <li className="list-one">
                    <span className="square">
                      <i className="fa fa-square" />
                    </span>
                    <span className="hours">2 </span>
                    <span className="hour-info">hrs So Far</span>
                  </li>
                </div>
                <div className="project project-three">
                  <h3>Project Three</h3>
                  <li className="list-one">
                    <span className="square">
                      <i className="fa fa-square" />
                    </span>
                    <span className="hours">2</span>
                    <span className="hour-info">hrs So Far</span>
                  </li>
                </div>
                <div className="project project-four">
                  <h3>Chrome Extension</h3>
                  <li className="list-one">
                    <span className="square">
                      <i className="fa fa-square" />
                    </span>
                    <span className="hours">24</span>
                    <span className="hour-info">hrs So Far</span>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
