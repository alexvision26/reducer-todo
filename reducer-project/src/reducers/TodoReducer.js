
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
    console.log(action)

    switch(action.type) {
        case 'ADD_TODO':
            return [...state, { item: action.payload, id:Date.now(), completed: false }]
        
        default:
            return state;
    }
}