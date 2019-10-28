import React from 'react';
import PhonebookItem from './PhonebookItem'
import {connect} from 'react-redux'
import {loadPhonebook} from '../actions'

class PhonebookList extends React.Component {

    componentDidMount() {
        this.props.loadPhonebook();
    }

    render() {
        let listPhonebook = this.props.phonebooks.map((item,index) => {
            return (<PhonebookItem id={index+1} origin_id={item.id} name={item.name} phone={item.phone} />)
        });
        return (
            <tbody>
              {listPhonebook}
            </tbody>
        );
    }
}

const mapStateToProps = (state) => ({
    phonebooks: state.phonebooks
})

const mapDispatchToProps = (dispatch) => ({
    loadPhonebook: () => dispatch(loadPhonebook())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhonebookList)
