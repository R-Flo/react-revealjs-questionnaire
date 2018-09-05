import * as types from "../constants/ActionTypes";

const initialState = {
    questionLoader: false,
    questions: [],
    choices: [],
    sendChoiceLoader : false,
    score: 0,
};

const questionnaireReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.ADD_QUESTIONS:
            return {
                ...state,
                questions: action.payload
            };
        case types.UPDATE_QUESTION_LOADER:
            return{
                ...state,
                questionLoader: action.display
            }
        case types.MAKE_CHOICE:
            return {
                ...state,
                choices:[
                    ...state.choices,
                    {
                        id_question: action.id_question,
                        id_answer: action.id_answer
                    }
                ]
            }

        case types.DELETE_CHOICE:
            return  {
                ...state,
                choices: state.choices.filter( choice => choice.id_question !== action.id_question )
            }

        case types.UPDATE_CHOICE:
            const filteredChoices = (state.choices.filter(choice => choice.id_question !== action.id_question));
            return {
                ...state,
                choices: [
                    ...filteredChoices,
                    {
                        id_question: action.id_question,
                        id_answer: action.id_answer
                    }
                ]
            }
        case types.SEND_CHOICES_LOADER:
            return{
                ...state,
                sendChoiceLoader: action.display
            }
        case types.UPDATE_SCORE:
            return{
                ...state,
                score: state.score + action.score
            }
        case types.RESET_SCORE:
            return{
                ...state,
                score: 0
            }
        case types.ADD_TO_SCORE:
            return{
                ...state,
                score: state.score + action.score
            }

        default:
            return state;
    }
};
export default questionnaireReducer;
