import React from 'react'
import {Container} from 'react-bootstrap'
import Summary from './Summary';
import HighestCasesRegion from './HighestCasesRegion';

function Dashboard() {
    return (
        <Container className="mb-5">
            <Summary></Summary>
            <HighestCasesRegion></HighestCasesRegion>
        </Container>
    )
}

export default Dashboard
