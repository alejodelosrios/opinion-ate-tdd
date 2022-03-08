import React, {useEffect} from 'react';

export const RestaurantList = ({loadRestaurants}) => {
    useEffect(() => {
        loadRestaurants();
    }, [loadRestaurants]);
    return (
        <div>
            <h1>Restaurant List</h1>
        </div>
    );
};
