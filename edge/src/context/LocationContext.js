import createDataContext from './createDataContext';
import { getDistance } from 'geolib';

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'mark_current_location':
            return { ...state, currentLocation: action.payload }
        case 'mark_tapped_location':
            return { ...state, markedlocation: action.payload }
        default:
            return state;
    }
};

const markLocation = dispatch => (location) => {
    dispatch({ type: 'mark_current_location', payload: location });
};

const tappedLocation = dispatch => (location) => {
    dispatch({ type: 'mark_tapped_location', payload: location });
};

const calcDistance = () => (currentLoc, tappedLoc) => {
    var dis = getDistance(
        currentLoc,
        tappedLoc,
    );
    alert(
        `Distance: ${dis / 1000} KM`
    );
};

export const { Context, Provider } = createDataContext(
    locationReducer,
    { markLocation, tappedLocation, calcDistance },
    { markedlocation: null, currentLocation: null }
);
