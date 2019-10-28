import React from 'react';
import {connect} from 'react-redux'
import {deletePhonebook} from '../actions'

class PhonebookItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
              <td scope="row">{this.props.id}</td>
              <td>{this.props.name}</td>
              <td>{this.props.phone}</td>
              <td>
                <a class="btn btn-success">Update</a>&nbsp;
                <a class="btn btn-danger" onClick={this.props.deletePhonebook}>Delete</a>
              </td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    deletePhonebook: () => dispatch(deletePhonebook(ownProps.origin_id))
})

export default connect(
    null,
    mapDispatchToProps
) (PhonebookItem)
