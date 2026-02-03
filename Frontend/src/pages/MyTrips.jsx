import { useEffect, useState } from 'react';
import { fetchUserTrips } from '../api/api';

export default function MyTrips() {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        fetchUserTrips(userId).then(res => setTrips(res.data));
    }, []);

    return (
        <div className="history-page">
            <h2>Your Trip History</h2>
            <div className="grid">
                {trips.map(trip => (
                    <div key={trip.id} className="trip-summary">
                        <h3>{trip.destination}</h3>
                        <p>{trip.days} Days • {trip.budget}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}