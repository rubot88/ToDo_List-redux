const reducer = (state, action) => {
    if (state === undefined) {
        return {
            items: [
                { id: 1, label: 'Drink Coffee', complete: true, important: false },
                { id: 2, label: 'Learn React', complete: false, important: true },
                { id: 3, label: 'Make Awesome App', complete: false, important: false }
            ]
        }
    }
    const { items } = state;
    switch (action.type) {
        case 'ITEM_MARKED_COMPLETE': {
            const newItems = items
                .map(item => item.id === action.payload ?
                    { ...item, complete: !item.complete } :
                    ({ ...item }))
            return {
                ...state,
                items: newItems
            }
        }
        case 'ITEM_MARKED_IMPORTANT': {
            const newItems = items
                .map(item => item.id === action.payload ?
                    ({ ...item, important: !item.important }) :
                    ({ ...item }));
            return {
                items: newItems
            }
        }

        case 'ITEM_REMOVED_FROM_LIST': {
            const idx = items.findIndex(item => item.id === action.payload);
            const newItems = [
                ...items.slice(0, idx),
                ...items.slice(idx + 1)
            ]

            return {
                items: newItems
            }
        }
        default:
            return state;
    }
};

export default reducer;