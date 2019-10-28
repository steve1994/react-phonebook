import React from 'react';
import PhonebookItem from './PhonebookItem'

export default class PhonebookList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let listPhonebook = this.props.datas.map((item,index) => {
            return (<PhonebookItem id={index} name={item.name} phone={item.phone} />)
        });
        return (
            <tbody>
              {listPhonebook}
            </tbody>
        );
    }
}
