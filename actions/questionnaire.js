import * as types from "../constants/ActionTypes";



export const fetchQuestions = function(questions){
    return async (dispatch) => {
        dispatch(updateQuestionLoader(true));
        const response = await fetch('/questions');
        const datas = await response.json();
        dispatch(updateQuestionLoader(false));
        dispatch(addQuestions(datas));
        return datas;
    }
}


export const updateQuestionLoader = display => (
        { type: types.UPDATE_QUESTION_LOADER, display: display }
    );

export const addQuestions = questions => (
        { type: types.ADD_QUESTIONS, payload: questions }
    );

export const makeChoice = (id_question, id_answer) => (
        { type: types.MAKE_CHOICE, id_question: id_question, id_answer: id_answer }
    );

export const updateChoice = (id_question, id_answer) => (
        { type: types.UPDATE_CHOICE, id_question: id_question, id_answer: id_answer }
    );

export const deleteChoice = (id_question, id_answer) => (
        { type: types.DELETE_CHOICE, id_question: id_question, id_answer: id_answer }
    );


export const sendChoices = function(choices){
    return async (dispatch) => {
        dispatch(sendChoiceLoader(true));

        var formData  = new FormData();
        formData.append('answers', JSON.stringify(choices));
        const response = await fetch("/results", {
            method: "POST",
            body: formData
        });
        const datas = await response.json();
        dispatch(sendChoiceLoader(false));
        dispatch(updateScore(datas));
        window.location = "/diagnostic/" + datas.public_id;
        return datas;
    }
}

export const updateScore = score => (
    { type: types.UPDATE_SCORE, score: score }
);

export const resetScore = () => (
    { type: types.RESET_SCORE}
);

export const addToScore = (score) => (
    { type: types.ADD_TO_SCORE, score: score}
);

export const updateScoreAndChoice = function(points, weight, id_question, id_answer){
    return (dispatch) => {
        if(points > 0)
            dispatch(addToScore(points * weight));
        dispatch(updateChoice(id_question, id_answer));
    }
}

export const sendChoiceLoader = display => (
    { type: types.SEND_CHOICES_LOADER, display: display }
);

