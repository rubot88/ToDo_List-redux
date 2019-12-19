const reducer = (state, action) => {

    if (state === undefined) {
        return {
            items: [
                { id: 1, label: 'Drink Coffee', complete: true, important: false },
                { id: 2, label: 'Learn React', complete: false, important: true },
                { id: 3, label: 'Make Awesome App', complete: false, important: false }
            ],
            filterButtons: [
                { name: 'All', isActive: true },
                { name: 'Active', isActive: false },
                { name: 'Done', isActive: false }
            ],
            labelValue: '',
            searchValue: ''
        }
    }
    const { items, filterButtons } = state;
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
            const newId = items.length ? items[items.length - 1].id + 1 : 1;
            const newItem = { id: newId, label, complete: false, important: false };
            const newItems = [
                ...items,
                newItem
            ];
            return {
                ...state,
                items: newItems,
                labelValue: ''
            }
        }
        case 'FORM_LABEL_CHANGED': {
            const labelValue = action.payload;
            return {
                ...state,
                labelValue
            };
        }
        case 'SEARCH_VALUE_CHANGED':
            return {
                ...state,
                searchValue: action.payload
            };
        case 'DEFAULT_SEARCH_VALUE':
            return {
                ...state,
                searchValue: ''
            };
        case 'FILTER_VALUE_CHANGED': {
            const newFilterButtons = filterButtons
                .map(({ name }) => name === action.payload ?
                    ({ name, isActive: true }) :
                    ({ name, isActive: false }));
            return {
                ...state,
                filterButtons: newFilterButtons
            };
        }
        default:
            return state;
    }
};

export default reducer;