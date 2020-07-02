import React from 'react';

import Header from './components/header.js';
import LoginForm from './components/login-form.js';
import Footer from './components/footer.js';

function LoginPage() {
    return (
        <div>
            <header>
                <Header />
            </header>

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