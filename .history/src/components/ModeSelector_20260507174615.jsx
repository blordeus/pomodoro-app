const LABELS = {
  pomodoro: 'pomodoro',
  shortBreak: 'short break',
  longBreak: 'long break',
};

const ModeSelector = ({ mode, onSwitch }) => {
  return (
    <nav className="mode-selector" aria-label="Timer mode">
      {Object.entries(LABELS).map(([key, label]) => (
        <button
          key={key}
          className={`mode-btn${mode === key ? ' mode-btn--active' : ''}`}
          onClick={() => onSwitch(key)}
          aria-pressed={mode === key}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};

export default ModeSelector;
