import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


/**
 * Component to visualize tickets with charts
 * @returns charts of tickets
 */
const TicketCharts = () => {

    const options = {
        legend: {
            display: false
        }
    }

    const statusData ={
        labels: ['Open', 'Working', 'Closed'],
        datasets: [
          {
            label: 'Number of tickets',
            data: [1, 2, 1],
            backgroundColor: [
                'rgba(165, 18, 18, 0.6)',
                'rgba(18, 165, 91, 0.6)',
                'rgba(222, 222, 22, 0.3)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
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
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
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
              'rgba(165, 18, 18, 0.6)',
              'rgba(18, 165, 91, 0.6)',
              'rgba(222, 222, 22, 0.3)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
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
                <Doughnut data={statusData} options={{
                    
                }}/>
            </div>
        </>
    )
}

export default TicketCharts