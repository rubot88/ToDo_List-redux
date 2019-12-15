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
    payload: event
});

export {
    onItemComplete,
    onItemImportant,
    onDeleteItem,
    onItemAdded,
    onLabelChange
};