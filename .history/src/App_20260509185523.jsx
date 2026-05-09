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
      <img src="/assets/logo.svg" alt="pomodoro" className="app__title" />

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
        <img src="/assets/icon-settings.svg" alt="" />
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
