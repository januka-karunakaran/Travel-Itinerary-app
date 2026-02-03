import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../api/api';

export default function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await loginUser(form);
            localStorage.setItem('userId', res.data.id);
            navigate('/home');
        } catch (err) { alert("Invalid Credentials"); }
    };

    return (
        <div className="auth-card">
            <h2>Login to TripGenie</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} required />
                <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} required />
                <button type="submit">Login</button>
            </form>
            <Link to="/forgot-password">Forgot Password?</Link>
            <p>New here? <Link to="/signup">Create Account</Link></p>
        </div>
    );
}