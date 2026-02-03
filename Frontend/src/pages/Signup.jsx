import { useState } from 'react';
import { signupUser } from '../api/api';

export default function Signup() {
    const [form, setForm] = useState({ name: '', email: '', password: '' });

    const handleSignup = async (e) => {
        e.preventDefault();
        await signupUser(form);
        alert("Account Created! Please Login.");
    };

    return (
        <div className="auth-card">
            <h2>Join TripGenie</h2>
            <form onSubmit={handleSignup}>
                <input type="text" placeholder="Full Name" onChange={e => setForm({...form, name: e.target.value})} />
                <input type="email" placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
                <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}