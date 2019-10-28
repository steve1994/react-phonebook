import React from 'react';

export default class SearchForm extends React.Component {
    render() {
        return (
          <div>
            <div class="form-row">
              <h2>Search</h2>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="name_search">Name</label>
                <input type="text" class="form-control" id="name_search" placeholder="name" />
              </div>
              <div class="form-group col-md-6">
                <label for="phone_search">Phone</label>
                <input type="text" class="form-control" id="phone_search" placeholder="Phone" />
              </div>
            </div>
          </div>
        );
    }
}
