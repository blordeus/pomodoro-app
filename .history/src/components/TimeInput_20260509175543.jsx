import React, { useState } from 'react';

const TimeInput = ({ label, value, onChange, min = 1, max = 60 }) => {
  const increment = () => onChange(Math.min(max, value + 1));
  const decrement = () => onChange(Math.max(min, value - 1));

  return (
    <div className="time-input">
      <label className="time-input__label" htmlFor={`time-${label}`}>
        {label}
      </label>
      <div className="time-input__control">
        <span className="time-input__value" id={`time-${label}`} aria-live="polite">
          {value}
        </span>
        <div className="time-input__arrows" aria-hidden="true">
          <button
            className="time-input__arrow"
            onClick={increment}
            aria-label={`Increase ${label}`}
            tabIndex={0}
          >
            <svg width="14" height="7" viewBox="0 0 14 7" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 6l6-5 6 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="time-input__arrow"
            onClick={decrement}
            aria-label={`Decrease ${label}`}
            tabIndex={0}
          >
            <svg width="14" height="7" viewBox="0 0 14 7" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1l6 5 6-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeInput;
