const phonebooks = (state = [], action) => {
    switch(action.type) {
        case 'LOAD_PHONEBOOK_SUCCESS':
            return action.phonebooks.map((item,index) => {
                return {name:item.name, index:index+1, phone:item.phone, id:item._id, sent:true};
            })
        case 'POST_PHONEBOOK':
            return [
                ...state,
                {
                    name: action.name,
                    phone: action.phone,
                    id_fake: action.id_fake,
                    sent: true
                }
            ]
        case 'POST_PHONEBOOK_SUCCESS':
            return action.phonebooks.map((item,index) => {
                return {name:item.name, index:index+1, phone:item.phone, id:item._id, sent:true};
            })
        case 'POST_PHONEBOOK_FAILURE':
            return state.map((item) => {
                if (item.id_fake === action.id_fake) {
                    item.sent = false;
                }
                return item;
            })
        case 'EDIT_PHONEBOOK':
            return state.map((item) => {
                if (item.id === action.id) {
                    item.name = action.name;
                    item.phone = action.phone;
                }
                return item;
            })
        case 'EDIT_PHONEBOOK_SUCCESS':
            return action.phonebooks.map((item,index) => {
                return {name:item.name, index:index+1, phone:item.phone, id:item._id, sent:true};
            })
        case 'DELETE_PHONEBOOK':
            return state.filter((item) => item.id !== action.id);
        case 'DELETE_PHONEBOOK_FAILURE':
            state.splice(action.props.id-1,0,{name:action.props.name,index:action.props.id-1,phone:action.props.phone,id:action.props.origin_id,sent:true});
            return [...state];
        case 'SEARCH_PHONEBOOK':
            return state.filter((item) => {
                let conditionName = action.name ? (item.name === action.name) : true;
                let conditionPhone = action.phone ? (item.phone === action.phone) : true;
                return (conditionName && conditionPhone);
            })
        case 'SEARCH_PHONEBOOK_SUCCESS':
            return action.phonebooks.map((item) => {
                return {name:item.name, phone:item.phone, id:item._id, sent:true};
            })
        case 'DELETE_PHONEBOOK_SUCCESS':
        case 'EDIT_PHONEBOOK_FAILURE':
        case 'LOAD_PHONEBOOK_FAILURE':
        default:
            return state;
    }
}

export default phonebooks;
