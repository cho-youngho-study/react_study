import React, { Component } from "react";
import "./App.css";
import Customer from "./component/Customer";

class App extends Component {
  state = {
    customers: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/customer");
    const body = await response.json();
    return body;
  };

  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>이미지</th>
              <th>이름</th>
              <th>생년월일</th>
              <th>성별</th>
              <th>직업</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers
              ? this.state.customers.map(c => {
                  return (
                    <Customer
                      key={c.id}
                      id={c.id}
                      image={c.image}
                      name={c.name}
                      birthday={c.birthday}
                      gender={c.gender}
                      job={c.job}
                    />
                  );
                })
              : ""}
          </tbody>
        </table>
      </>
    );
  }
}

export default App;
