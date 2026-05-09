import CircularProgress from './CircularProgress';

const ACTION_LABELS = {
  idle: 'START',
  running: 'PAUSE',
  paused: 'RESUME',
  complete: 'RESTART',
};

const TimerDisplay = ({ formattedTime, progress, status, onStart, onPause, onRestart }) => {
  const actionLabel = ACTION_LABELS[status];

  const handleAction = () => {
    if (status === 'idle' || status === 'paused') onStart();
    else if (status === 'running') onPause();
    else if (status === 'complete') onRestart();
  };

  return (
    <div className="timer-wrapper">
      {/* Outer decorative circle with layered shadow effect */}
      <div className="timer-outer">
        <div className="timer-inner">
          {/* SVG progress ring sits behind the content */}
          <div className="timer-ring">
            <CircularProgress progress={progress} />
          </div>
          {/* Time + action button */}
          <button
            className="timer-face"
            onClick={handleAction}
            aria-label={`${actionLabel} timer, time remaining ${formattedTime}`}
          >
            <span className="timer-time">{formattedTime}</span>
            <span className="timer-action">{actionLabel}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimerDisplay;
