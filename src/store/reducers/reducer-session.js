import ACTIONS from '../actions-names';

const { SESSION_ACTIONS } = ACTIONS;

export default (state = {}, action) => {
    switch (action.type) {
        case SESSION_ACTIONS.START:
            return {
                ...state,
                ...action.data
            }
        case SESSION_ACTIONS.CLEAR:

            return {};
        case SESSION_ACTIONS.UPDATE:
            return {
                ...state,
                ...action.data
            }

        default:
            return state;
    }
}