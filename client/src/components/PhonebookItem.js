import React from 'react';
import {connect} from 'react-redux'
import {deletePhonebook,resendPhonebook, editPhonebook} from '../actions'

class PhonebookItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {editable:false,nameEdited:'',phoneEdited:''};
        this.changeName = this.changeName.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.editPhonebookSave = this.editPhonebookSave.bind(this);
    }

    componentDidMount() {
        this.setState({nameEdited:this.props.name,phoneEdited:this.props.phone})
    }

    changeName(e) {
        this.setState({nameEdited:e.target.value});
    }

    changePhone(e) {
        this.setState({phoneEdited:e.target.value});
    }

    editPhonebookSave(e) {
        this.props.editPhonebook(this.state.nameEdited,this.state.phoneEdited);
        this.setState({editable:false});
    }

    render() {
        return (
            <tr>
              <td scope="row">{this.props.id}</td>
              <td>
                  {this.state.editable
                    ? <input type="text" value={this.state.nameEdited} onChange={this.changeName} placeholder="Name" />
                    : this.props.name}
              </td>
              <td>
                  {this.state.editable
                    ? <input type="text" value={this.state.phoneEdited} onChange={this.changePhone} placeholder="Phone" />
                    : this.props.phone}
              </td>
              <td>
                  {this.state.editable
                    ?   <button class="btn btn-primary" onClick={this.editPhonebookSave}>Save</button>
                    :   (this.props.sent
                          ?   <div><a class="btn btn-success" onClick={()=>this.setState({editable:true})}>Update</a>&nbsp;
                              <a class="btn btn-danger" onClick={this.props.deletePhonebook}>Delete</a></div>
                          :   <div><a class="btn btn-danger" onClick={this.props.resendPhonebook}>Resend</a></div>) }
              </td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    deletePhonebook: () => dispatch(deletePhonebook(ownProps.origin_id)),
    resendPhonebook: () => dispatch(resendPhonebook(ownProps.id_fake,ownProps.name,ownProps.phone)),
    editPhonebook: (name,phone) => dispatch(editPhonebook(ownProps.origin_id,name,phone))
})

export default connect(
    null,
    mapDispatchToProps
) (PhonebookItem)
