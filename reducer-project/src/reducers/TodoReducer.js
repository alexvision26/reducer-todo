
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
    // console.log('state',state,'action',action)

    switch(action.type) {
        case 'ADD_TODO':
            return [...state, { item: action.payload, id:Date.now(), completed: false }]
        case 'MARK_COMPLETE':
            state.map(item => {
                if (item.id === action.payload){
                return item.completed = !item.completed;
                }
            })
            console.log(state)
            return [...state]
            // state.map(task => {
            //     if (task.id === action.id) {
            //         return state;
            //     }
            // })
        default:
            return state;
    }
}