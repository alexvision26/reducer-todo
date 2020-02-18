
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
            console.log(state, action)
            return [...state, { item: action.payload, id:Date.now(), completed: false }]

        case 'MARK_COMPLETE':
            state.map(item => {
                if (item.id === action.payload){
                return item.completed = !item.completed;
                }
            })
            return [...state]

        case 'CLEAR_COMPLETE':
            // console.log(state[1].completed)
            const newArr = state.filter(item => {
               return item.completed !== true
            })
            console.log('new', newArr)
            console.log(state)
            return [...newArr]
        
        default:
            return state;
    }
}