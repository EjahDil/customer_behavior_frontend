import React from 'react'
import ClientSpendingChart from './components/clientspendingchart';
import ClientSpendingFrequencyChart from './components/charts';

const Analytics = () => {
    return (
        <React.Fragment>
            <h1>Analytics here</h1>
            <ClientSpendingChart  clientId={''} />
            <span className='my-3'>1</span>
            <ClientSpendingFrequencyChart />
        </React.Fragment>
    )
}

export default Analytics;