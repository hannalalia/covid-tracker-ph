import React from 'react'
import {Container} from 'react-bootstrap'
import Summary from './Summary';
import HighestCasesRegion from './HighestCasesRegion';
import Timeline from './Timeline';

function Dashboard() {
    return (
        <Container className="mb-5">
            <Summary></Summary>
            <HighestCasesRegion></HighestCasesRegion>
            <Timeline></Timeline>
        </Container>
    )
}

export default Dashboard
