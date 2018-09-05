import { createSelector } from 'reselect'

const getChoices = state => state.choices;

export const formatChoicesToExport = createSelector(
    [getChoices],
    choices => (choices.map((choice) => choice.id_answer))
)
