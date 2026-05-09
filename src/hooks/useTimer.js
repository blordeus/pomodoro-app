import { useState, useEffect, useRef, useCallback } from 'react';

const MODES = {
  pomodoro: 'pomodoro',
  shortBreak: 'shortBreak',
  longBreak: 'longBreak',
};

export const useTimer = (settings) => {
  const [mode, setMode] = useState(MODES.pomodoro);
  const [status, setStatus] = useState('idle'); // idle | running | paused | complete
  const [timeLeft, setTimeLeft] = useState(settings.pomodoro * 60);
  const intervalRef = useRef(null);

  const totalTime = settings[mode] * 60;

  // Reset timer when mode or settings change
  useEffect(() => {
    clearInterval(intervalRef.current);
    setStatus('idle');
    setTimeLeft(settings[mode] * 60);
  }, [mode, settings]);

  useEffect(() => {
    if (status === 'running') {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setStatus('complete');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [status]);

  const start = useCallback(() => setStatus('running'), []);
  const pause = useCallback(() => setStatus('paused'), []);
  const restart = useCallback(() => {
    setStatus('idle');
    setTimeLeft(settings[mode] * 60);
  }, [mode, settings]);

  const switchMode = useCallback((newMode) => {
    setMode(newMode);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const progress = timeLeft / totalTime; // 1 = full, 0 = empty

  return {
    mode,
    status,
    timeLeft,
    totalTime,
    formattedTime,
    progress,
    start,
    pause,
    restart,
    switchMode,
    MODES,
  };
};
