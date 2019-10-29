const phonebooks = (state = [], action) => {
    switch(action.type) {
        case 'LOAD_PHONEBOOK_SUCCESS':
            return action.phonebooks.map((item) => {
                return {name:item.name, phone:item.phone, id:item._id, sent:true};
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
            return action.phonebooks.map((item) => {
                return {name:item.name, phone:item.phone, id:item._id, sent:true};
            })
        case 'POST_PHONEBOOK_FAILURE':
            return state.map((item) => {
                if (item.id_fake === action.id_fake) {
                    item.sent = false;
                }
                return item;
            })
        case 'DELETE_PHONEBOOK':
            return state.filter((item) => item.id != action.id);
        case 'DELETE_PHONEBOOK_SUCCESS':
        case 'DELETE_PHONEBOOK_FAILURE':
        case 'LOAD_PHONEBOOK_FAILURE':
        default:
            return state;
    }
}

export default phonebooks;
