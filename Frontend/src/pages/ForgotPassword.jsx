import { useState } from 'react';
import { resetPassword } from '../api/api';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleReset = async (e) => {
        e.preventDefault();
        await resetPassword({ email });
        alert("Reset link sent to your email!");
    };

    return (
        <div className="auth-card">
            <h2>Reset Password</h2>
            <form onSubmit={handleReset}>
                <input type="email" placeholder="Enter Email" onChange={e => setEmail(e.target.value)} />
                <button type="submit">Send Reset Link</button>
            </form>
        </div>
    );
}