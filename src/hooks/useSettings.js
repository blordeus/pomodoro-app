import { useState, useEffect } from 'react';

const STORAGE_KEY = 'pomodoro-settings';

const DEFAULT_SETTINGS = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  font: 'kumbh',   // kumbh | roboto | mono
  color: 'red',    // red | cyan | purple
};

export const useSettings = () => {
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...DEFAULT_SETTINGS, ...JSON.parse(saved) } : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  });

  // Apply font + color to :root whenever settings change
  useEffect(() => {
    const root = document.documentElement;

    const fontMap = {
      kumbh: "'Kumbh Sans', sans-serif",
      roboto: "'Roboto Slab', serif",
      mono: "'Space Mono', monospace",
    };

    const colorMap = {
      red: '#F87070',
      cyan: '#70F3F8',
      purple: '#D881F8',
    };

    root.style.setProperty('--accent', colorMap[settings.color]);
    root.style.setProperty('--font-app', fontMap[settings.font]);
  }, [settings.font, settings.color]);

  const applySettings = (newSettings) => {
    const merged = { ...settings, ...newSettings };
    setSettings(merged);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    } catch {
      // storage unavailable, silently continue
    }
  };

  return { settings, applySettings };
};
