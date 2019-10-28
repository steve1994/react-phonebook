import React from 'react';

export default class AddForm extends React.Component {
    render() {
        return (
          <div>
            <div class="form-group row">
              <div class="form-group col-md-5">
                <button class="btn btn-primary" id="add">+ add</button>
              </div>
            </div>
            <form id="add_form" method="post">
              <div class="form-group row">
                <div class="form-group col-md-5">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" id="name" placeholder="Name" />
                </div>
                <div class="form-group col-md-5">
                  <label for="phone">Phone</label>
                  <input type="text" class="form-control" id="phone" placeholder="Phone" />
                </div>
                <div class="form-group col-md-1">
                  <button type="submit" class="btn btn-success">save</button>
                </div>
                <div class="form-group col-md-1">
                  <button type="submit" class="btn btn-warning">cancel</button>
                </div>
              </div>
            </form>
          </div>
        );
    }
}
