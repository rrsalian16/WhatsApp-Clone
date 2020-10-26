import ACTIONS from '../actions-names';

const { FIREBASE_ACTIONS }=ACTIONS;

export default (state={},action)=>{
    switch (action.type) {
        case FIREBASE_ACTIONS.SEARCHED_USERS:
           return {
               ...state,
               ...action.data
           }
        case FIREBASE_ACTIONS.MESSAGES:
          return {
            ...state,
            ...action.data
          }
        case FIREBASE_ACTIONS.GET_USER:
            return{
                ...state,
                ...state.users,
                ...action.data
            }
        case FIREBASE_ACTIONS.CHAT_INDEX:{
            return{
                ...state,
                ...action.data
            }
        }
    
        default:
           return state;
    }
}