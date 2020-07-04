import React from 'react';

import LoginForm from './login-form.js';
import Footer from './footer.js';

function LoginPage() {
    return (
        <div>
            <main>
                <LoginForm />
            </main>

            <footer>
                <Footer />
            </footer>

        </div>
    );
}

export default LoginPage;