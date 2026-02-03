import { useState } from 'react';
import { generateTrip } from '../api/api';

export default function Home() {
    const [query, setQuery] = useState({ destination: '', days: 3, budget: 'Medium' });
    const [itinerary, setItinerary] = useState(null);
    const [loading, setLoading] = useState(false);

    const handlePlan = async () => {
        setLoading(true);
        const userId = localStorage.getItem('userId');
        try {
            const res = await generateTrip({ ...query, userId });
            setItinerary(res.data.planText);
        } catch (err) { alert("Error generating trip"); }
        setLoading(false);
    };

    return (
        <div className="main-content">
            <h1>AI Trip Planner ✨</h1>
            <div className="form-group">
                <input type="text" placeholder="Destination" onChange={e => setQuery({...query, destination: e.target.value})} />
                <input type="number" placeholder="Days" onChange={e => setQuery({...query, days: e.target.value})} />
                <button onClick={handlePlan} disabled={loading}>{loading ? "AI is Planning..." : "Generate"}</button>
            </div>

            {itinerary && (
                <div className="result-card">
                    <h3>Your Plan for {query.destination}</h3>
                    <p style={{ whiteSpace: 'pre-wrap' }}>{itinerary}</p>
                </div>
            )}
        </div>
    );
}