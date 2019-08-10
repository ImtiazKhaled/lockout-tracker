
const initialState = {
    logs: [
        { "id": 1, "happyMemory": "convallis tortor risus dapibus augue vel accumsan tellus nisi eu", "date": "19.05.2017", "caloriesLost": 2472, "caloriesGained": 6120 },
        { "id": 2, "happyMemory": "nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue", "date": "25.07.2018", "caloriesLost": 3776, "caloriesGained": 3605 },
        { "id": 3, "happyMemory": "curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar", "date": "12.08.2018", "caloriesLost": 1557, "caloriesGained": 7373 },
        { "id": 4, "happyMemory": "eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum", "date": "18.09.2016", "caloriesLost": 2769, "caloriesGained": 7625 },
        { "id": 6, "happyMemory": "eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in", "date": "29.01.2018", "caloriesLost": 1636, "caloriesGained": 6924 },
        { "id": 7, "happyMemory": "dapibus duis at velit eu est congue elementum in hac habitasse platea", "date": "01.09.2018", "caloriesLost": 6937, "caloriesGained": 5525 },
        { "id": 8, "happyMemory": "mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed", "date": "14.07.2017", "caloriesLost": 6022, "caloriesGained": 4562 },
        { "id": 9, "happyMemory": "quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis", "date": "12.05.2017", "caloriesLost": 503, "caloriesGained": 678 },
        { "id": 10, "happyMemory": "ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in", "date": "26.08.2016", "caloriesLost": 7758, "caloriesGained": 5000 },
        // { "id": 11, "happyMemory": "fermentum do nec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh", "date": "31.08.2017", "caloriesLost": 5613, "caloriesGained": 4715 },
    ]
}

const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            const logToAdd = action.log;
            let logs = [...state.logs, logToAdd]
            return { ...state, logs }
        case 'DELETE_LOG':
            logs = state.logs
            let filteredLogs = logs.filter((log) => {
                return log.id != action.id
            })
            return { ...state, logs: filteredLogs }
        case 'EDIT_LOG':
            logs = state.logs
            filteredLogs = logs.filter((log) => {
                return log.id != action.log.id
            })
            const logToEdit = action.log;
            logs = [...filteredLogs, logToEdit]
            return { ...state, logs: logs }
        default:
            console.log('that is not a valid type, check the code');
    }
    return state;
}

export default RootReducer;