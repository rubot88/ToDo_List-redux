const reducer = (state, action) => {
    if (state === undefined) {
        return {
            items: [
                { id: 1, label: 'Drink Coffee', complete: true, important: false },
                { id: 2, label: 'Learn React', complete: false, important: true },
                { id: 3, label: 'Make Awesome App', complete: false, important: false }
            ],
            labelValue: ''
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
            };
        }
        case 'ITEM_MARKED_IMPORTANT': {
            const newItems = items
                .map(item => item.id === action.payload ?
                    ({ ...item, important: !item.important }) :
                    ({ ...item }));
            return {
                ...state,
                items: newItems
            };
        }

        case 'ITEM_REMOVED_FROM_LIST': {
            const idx = items.findIndex(item => item.id === action.payload);
            const newItems = [
                ...items.slice(0, idx),
                ...items.slice(idx + 1)
            ]

            return {
                ...state,
                items: newItems
            };
        }
        case 'ITEM_ADDED_TO_LIST': {
            const { labelValue: label } = state;
            if (label === '') {
                return {
                    ...state
                }
            }
            const newItem = { id: Date.now(), label, complete: false, important: false };
            const newItems = [
                ...items,
                newItem
            ];
            return {
                items: newItems,
                labelValue: ''
            }
        }
        case 'FORM_LABEL_CHANGED': {
            const labelValue = action.payload.target.value;
            return {
                ...state,
                labelValue
            };
        }
        default:
            return state;
    }
};

export default reducer;