import * as firebase from 'firebase';
import { app } from '../components/config';

const initialState = {
    events: [
        { "id": 1, "title": "Attraction", "ra_name": "Passler", "date": "4/22/2019", "attending_residents": [] },
        { "id": 2, "title": "Tempest, The", "ra_name": "Roussel", "date": "3/20/2019", "attending_residents": [] },
        { "id": 3, "title": "In the Mirror of Maya Deren (Im Spiegel der Maya Deren)", "ra_name": "Redemile", "date": "10/20/2018", "attending_residents": [] },
        { "id": 4, "title": "Crimetime", "ra_name": "Wilton", "date": "8/22/2018", "attending_residents": [] },
        { "id": 5, "title": "Popular Music (Populärmusik från Vittula)", "ra_name": "Kennagh", "date": "12/14/2018", "attending_residents": [] },
        { "id": 6, "title": "And Everything Is Going Fine", "ra_name": "Christoffersen", "date": "8/5/2019", "attending_residents": [] },
        { "id": 7, "title": "Edges of the Lord", "ra_name": "Lawn", "date": "7/27/2019", "attending_residents": [] },
        { "id": 8, "title": "Who'll Stop the Rain", "ra_name": "Loughhead", "date": "7/26/2019", "attending_residents": [] },
        { "id": 9, "title": "Moon of the Wolf", "ra_name": "Adkin", "date": "3/8/2019", "attending_residents": [] },
        { "id": 10, "title": "Poolhall Junkies", "ra_name": "Crews", "date": "7/14/2019", "attending_residents": [] },
    ]
}

// const listenForChange = state => {
//     this.db.ref('events').on('child_added', snapshot => {
//         let event = {
//             key: snapshot.key,
//             title: snapshot.val().title,
//             ra_name: snapshot.val().ra_name,
//             date: snapshot.val().date,
//             attending_residents: snapshot.val().lockouts,
//         }
//         state.events.push(event);
//         return state;
//     })
// }

const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            firebase.database().ref('events').push({
                ...action.event,
                date: action.event.date.format('HH:mm MM/DD/YY'),
                attending_residents: []
            })
            break;
        case 'ADD_CHECKIN':
            console.log(action);    
            firebase.database().ref('events/'+ action.checkIn.eventId +'/attending_residents').push({
                residentName: action.checkIn.residentName,
                roomNumber: action.checkIn.roomNumber
            })
            break;
        // let events = [...state.events, eventToAdd]
        // return { ...state, events }
        // case 'DELETE_LOG':
        //     logs = state.logs
        //     let filteredLogs = logs.filter((log) => {
        //         return log.id != action.id
        //     })
        //     return { ...state, logs: filteredLogs }
        // case 'EDIT_LOG':
        //     logs = state.logs
        //     filteredLogs = logs.filter((log) => {
        //         return log.id != action.log.id
        //     })
        //     const logToEdit = action.log;
        //     logs = [...filteredLogs, logToEdit]
        //     return { ...state, logs: logs }
        default:
            console.log('that is not a valid type, check the code');
    }
    return state;
}

export default RootReducer;