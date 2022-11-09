import React, { Component } from "react";
import axios from "axios";
import TableRow from './AdminPanel/TableRow'
import './AdminPanel/Styles.css'
import InfoWrapper from './AdminPanel/InfoWrapper'

export default class App extends React.PureComponent {
  state = {
    userData: [],
    searchQuery: "",
    filterUser: [],
    activeRowId: "",
    activeRowIndex:2,
    activeRowData:''
  };

  getSearchval = (e) => {
    console.log(e.target.value);
    let filterUser = this.state.userData.filter((user) => {
      if (user.firstName.toLowerCase().includes(e.target.value.toLowerCase())) {
        return true;
      }
    });

    this.setState({
      searchQuery: e.target.value,
      filterUser,
    });
  };

  handleSelectedRow = (id) => {
    let selectedRec = this.state.userData.findIndex(user=>user.id ==id)
    console.log(selectedRec)
    console.log(id)
    this.setState({
      activeRowId: id,
      activeRowData:this.state.userData[selectedRec]
    });
  };

  componentDidMount() {
    axios
      .get("https://admin-panel-data-edyoda-sourav.herokuapp.com/admin/data")
      .then((res) => {
        this.setState({
          userData: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        

        <main>
          <div id="table-section">
            <form action="/">
              <input
                type="text"
                placeholder="Enter something"
                name="search-box"
                id="search-box"
                onChange={this.getSearchval}
                value={this.state.searchQuery}
              />
            </form>

            <div id="table-wrapper">
              <div id="table-headers">
                <table>
                  <thead>
                    <tr>
                      <th className="column1">Id</th>
                      <th className="column2">FirstName</th>
                      <th className="column3">LastName</th>
                      <th className="column4">Email</th>
                      <th className="column5">Phone</th>
                    </tr>
                  </thead>
                </table>
              </div>

              <div id="table-data">
                <table>
                  <tbody>
                    {/* {
                      this.state.userData.map((user) => (
                      <TableRow data={user} />
                    ))
                    } */}

                    {console.log(this.state)}

                    {this.state.filterUser.length === 0 &&
                    this.state.searchQuery === ""
                      ? this.state.userData.map((user) => (
                          <TableRow
                            data={user}
                            handleSelectedRow={this.handleSelectedRow}
                            selectedRow = {this.state.activeRowId}
                          />
                        ))
                      : this.state.filterUser.map((user) => (
                          <TableRow
                            data={user}
                            handleSelectedRow={this.handleSelectedRow}
                            selectedRow = {this.state.activeRowId}
                          />
                        ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
{
  this.state.activeRowData && <InfoWrapper activeRowData ={this.state.activeRowData}/>
}
         
        </main>
      </div>
    );
  }
}
