import React, { useState } from 'react';
import { useTimer } from './hooks/useTimer';
import { useSettings } from './hooks/useSettings';
import ModeSelector from './components/ModeSelector';
import TimerDisplay from './components/TimerDisplay';
import SettingsModal from './components/SettingsModal';

const App = () => {
  const { settings, applySettings } = useSettings();
  const { mode, status, formattedTime, progress, start, pause, restart, switchMode } = useTimer(settings);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="app">
      <h1 className="app__title">pomodoro</h1>

      <ModeSelector mode={mode} onSwitch={switchMode} />

      <TimerDisplay
        formattedTime={formattedTime}
        progress={progress}
        status={status}
        onStart={start}
        onPause={pause}
        onRestart={restart}
      />

      <button
        className="settings-trigger"
        onClick={() => setShowSettings(true)}
        aria-label="Open settings"
      >
        <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M14 9.8a4.2 4.2 0 100 8.4 4.2 4.2 0 000-8.4zM11.8 14a2.2 2.2 0 114.4 0 2.2 2.2 0 01-4.4 0z"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M11.28 2a1 1 0 00-.97.757L9.6 5.09a9.14 9.14 0 00-1.49.863L5.75 5.2a1 1 0 00-1.163.44l-2.72 4.71a1 1 0 00.22 1.247l1.87 1.57a9.225 9.225 0 000 1.664l-1.87 1.57a1 1 0 00-.22 1.247l2.72 4.71a1 1 0 001.163.44l2.36-.753c.469.332.965.625 1.49.863l.71 2.333A1 1 0 0011.28 26h5.44a1 1 0 00.97-.757l.71-2.333a9.14 9.14 0 001.49-.863l2.36.753a1 1 0 001.163-.44l2.72-4.71a1 1 0 00-.22-1.247l-1.87-1.57a9.22 9.22 0 000-1.664l1.87-1.57a1 1 0 00.22-1.247l-2.72-4.71A1 1 0 0022.25 5.2l-2.36.753a9.14 9.14 0 00-1.49-.863l-.71-2.333A1 1 0 0016.72 2h-5.44zm.793 2h3.854l.636 2.088a1 1 0 00.643.664 7.14 7.14 0 012.122 1.228 1 1 0 00.928.163l2.115-.675 1.927 3.338-1.674 1.406a1 1 0 00-.35.926c.053.352.08.71.08 1.062s-.027.71-.08 1.062a1 1 0 00.35.926l1.674 1.406-1.927 3.338-2.115-.675a1 1 0 00-.928.163 7.14 7.14 0 01-2.122 1.228 1 1 0 00-.643.664L15.927 24h-3.854l-.636-2.088a1 1 0 00-.643-.664 7.14 7.14 0 01-2.122-1.228 1 1 0 00-.928-.163l-2.115.675-1.927-3.338 1.674-1.406a1 1 0 00.35-.926A7.27 7.27 0 016.646 14c0-.352.027-.71.08-1.062a1 1 0 00-.35-.926L4.702 10.606l1.927-3.338 2.115.675a1 1 0 00.928-.163A7.14 7.14 0 0111.794 6.57a1 1 0 00.643-.664L13.073 4z"/>
        </svg>
      </button>

      {showSettings && (
        <SettingsModal
          settings={settings}
          onApply={applySettings}
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  );
};

export default App;
