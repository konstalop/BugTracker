import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * Component to visualize tickets with charts
 * @returns charts of tickets
 */
const TicketCharts = () => {
    const statusData ={
        labels: ['Open', 'Working', 'Closed'],
        datasets: [
          {
            label: 'Number of tickets',
            data: [1, 2, 1],
            backgroundColor: [
                'rgba(18, 165, 91, 0.8)', 
                'rgba(222, 222, 22, 0.45)', 
                'rgba(165, 18, 18, 0.8)'
            ],
          },
        ],
    }

    const priorityData = {
        labels: ['Low', 'Medium', 'High', 'Critical'],
        datasets: [
          {
            label: 'Number of tickets',
            data: [1, 2, 1, 1],
            backgroundColor: [
                'rgba(18, 165, 91, 0.8)',
                'rgba(222, 222, 22, 0.45)',
                'rgba(235, 137, 40, 0.7)',
                'rgba(165, 18, 18, 0.8)'
            ],
          },
        ],
    }

    const typeData = {
        labels: ['Issue', 'Feature', 'Suggestion'],
        datasets: [
          {
            label: 'Number of tickets',
            data: [1, 2, 1],
            backgroundColor: [
                'rgba(165, 18, 18, 0.8)',
                'rgba(18, 165, 91, 0.8)',
                'rgba(222, 222, 22, 0.45)',
            ],
          },
        ],
      };

    return (
        <>
            <div className='type-chart'>
                <h4>Type Of Ticket</h4>
                <Doughnut data={typeData}/>
            </div>
            <div className='priority-chart'>
                <h4>Priority Of Ticket</h4>
                <Doughnut data={priorityData}/>
            </div>
            <div className='status-chart'>
                <h4>Status Of Ticket</h4>
                <Doughnut data={statusData}/>
            </div>
        </>
    )
}

export default TicketCharts