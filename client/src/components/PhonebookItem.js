import React from 'react';

export default class PhonebookItem extends React.Component {
    render() {
        return (
            <tr>
              <td scope="row">{this.props.id}</td>
              <td>{this.props.name}</td>
              <td>{this.props.phone}</td>
              <td>
                <a class="btn btn-success">Update</a>&nbsp;
                <a class="btn btn-danger">Delete</a>
              </td>
            </tr>
        );
    }
}
