const onItemComplete = (id) => ({
    type: 'ITEM_MARKED_COMPLETE',
    payload: id
});

const onItemImportant = (id) => ({
    type: 'ITEM_MARKED_IMPORTANT',
    payload: id
});

const onDeleteItem = (id) => ({
    type: 'ITEM_REMOVED_FROM_LIST',
    payload: id
});

const onItemAdded = (event) => ({
    type: 'ITEM_ADDED_TO_LIST',
    payload: event
});

const onLabelChange = (event) => ({
    type: 'FORM_LABEL_CHANGED',
    payload: event.target.value
});

const onSearchValueChange = (event) => ({
    type: 'SEARCH_VALUE_CHANGED',
    payload: event.target.value
});

const onSearchBlur = () => ({ type: 'DEFAULT_SEARCH_VALUE' })

export {
    onItemComplete,
    onItemImportant,
    onDeleteItem,
    onItemAdded,
    onLabelChange,
    onSearchValueChange,
    onSearchBlur
};