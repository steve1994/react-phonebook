import React from 'react';
import {connect} from 'react-redux'
import {deletePhonebook,resendPhonebook} from '../actions'

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
                {this.props.sent
                    ?   <div><a class="btn btn-success">Update</a>&nbsp;
                        <a class="btn btn-danger" onClick={this.props.deletePhonebook}>Delete</a></div>
                    :   <div><a class="btn btn-danger" onClick={this.props.resendPhonebook}>Resend</a></div> }
              </td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    deletePhonebook: () => dispatch(deletePhonebook(ownProps.origin_id)),
    resendPhonebook: () => dispatch(resendPhonebook(ownProps.id_fake,ownProps.name,ownProps.phone))
})

export default connect(
    null,
    mapDispatchToProps
) (PhonebookItem)
