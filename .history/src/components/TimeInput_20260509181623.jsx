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
          <div className="time-input__arrows">
  <button className="time-input__arrow" onClick={increment} aria-label={`Increase ${label}`}>
    <img src="/assets/icon-arrow-up.svg" alt="" />
  </button>
  <button className="time-input__arrow" onClick={decrement} aria-label={`Decrease ${label}`}>
    <img src="/assets/icon-arrow-down.svg" alt="" />
  </button>
</div>
        </div>
      </div>
    </div>
  );
};

export default TimeInput;
