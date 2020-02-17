
export const initialState = [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      },
      {
          item: 'Master ReactJS',
          completed: false,
          id: 2390472389
      }
    ]


export const todoReducer = (state, action) => {
    console.log(state, action)

    switch(action.type) {
        case 'ADD_TODO':
            return [...state, { item: action.payload, id:Date.now(), completed: false }]
        case 'MARK_COMPLETE':
            return {
                completed: action.payload
            }
        default:
            return state;
    }
}