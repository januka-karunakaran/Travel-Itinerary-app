import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signupUser } from '../api/api';

export default function Signup() {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');

        // Validation
        if (!form.name || !form.email || !form.password) {
            setError('All fields are required');
            return;
        }

        if (form.password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        setLoading(true);
        try {
            await signupUser(form);
            alert("Account Created! Please Login.");
            navigate('/');
        } catch (err) {
            console.error('Signup error:', err);
            // For testing without backend, show a message
            if (err.code === 'ERR_NETWORK') {
                setError('Backend not connected. Please ensure the server is running on port 8080.');
            } else {
                setError(err.response?.data?.message || "Signup failed. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-card">
            <h2>Join TripGenie</h2>
            {error && <p style={{ color: 'var(--danger)', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</p>}
            <form onSubmit={handleSignup}>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={e => setForm({...form, password: e.target.value})}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Creating Account...' : 'Sign Up'}
                </button>
            </form>
            <p>Already have an account? <Link to="/">Login</Link></p>
        </div>
    );
}