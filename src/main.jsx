import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <CounterApp value={0} />
    </React.StrictMode>
);