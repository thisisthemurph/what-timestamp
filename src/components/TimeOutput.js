import React from 'react';
import './TimeOutput.scss';

const TimeOutput = ({ name, dates }) => {
  return (
    <section>
      <h2>{name}</h2>

      {
        dates.map((date) => {
          return (
            <p key={name + date.title}>
              <strong>{date.title}:</strong> {date.value}
            </p>
          )
        })
      }
    </section>
  )
}

export default TimeOutput;
