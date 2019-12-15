const onItemComplete = (id) => ({
    type: 'ITEM_MARKED_COMPLETE',
    payload: id
});

const onItemImportant = (id) => ({
    type: 'ITEM_MARKED_IMPORTANT',
    payload: id
})

const onDeleteItem = (id) => ({
    type: 'ITEM_REMOVED_FROM_LIST',
    payload: id
})

export {
    onItemComplete,
    onItemImportant,
    onDeleteItem
};