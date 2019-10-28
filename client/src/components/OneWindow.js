import React from 'react';
import AddForm from './AddForm';
import SearchForm from './SearchForm';
import PhonebookList from './PhonebookList';

export default class OneWindow extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {phonebooks:[{name:'Steve',phone:'081222324170'}]}
    }

    render() {
        return (
          <div class="container">
            <AddForm />
            <SearchForm />
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <PhonebookList />
            </table>
          </div>
        );
    }
}
