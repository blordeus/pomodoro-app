import React, { useState } from 'react';
import TimeInput from './TimeInput';

const FONTS = [
  { key: 'kumbh', label: 'Aa', style: { fontFamily: "'Kumbh Sans', sans-serif" } },
  { key: 'roboto', label: 'Aa', style: { fontFamily: "'Roboto Slab', serif" } },
  { key: 'mono', label: 'Aa', style: { fontFamily: "'Space Mono', monospace" } },
];

const COLORS = [
  { key: 'red', hex: '#F87070' },
  { key: 'cyan', hex: '#70F3F8' },
  { key: 'purple', hex: '#D881F8' },
];

const SettingsModal = ({ settings, onApply, onClose }) => {
  const [draft, setDraft] = useState({ ...settings });

  const update = (key, value) => setDraft((prev) => ({ ...prev, [key]: value }));

  const handleApply = () => {
    onApply(draft);
    onClose();
  };

  // Close on backdrop click
  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdrop} role="dialog" aria-modal="true" aria-labelledby="settings-title">
      <div className="modal">
        <div className="modal__header">
          <h2 className="modal__title" id="settings-title">Settings</h2>
          <button className="modal__close" onClick={onClose} aria-label="Close settings">
            <img src="/assets/icon-close.svg" alt="" />
          </button>
        </div>
        

        <div className="modal__body">
          {/* Time inputs */}
          <section className="modal__section">
            <h3 className="modal__section-title">Time (Minutes)</h3>
            <div className="modal__time-inputs">
              <TimeInput
                label="pomodoro"
                value={draft.pomodoro}
                onChange={(v) => update('pomodoro', v)}
              />
              <TimeInput
                label="short break"
                value={draft.shortBreak}
                onChange={(v) => update('shortBreak', v)}
              />
              <TimeInput
                label="long break"
                value={draft.longBreak}
                onChange={(v) => update('longBreak', v)}
              />
            </div>
          </section>

          <div className="modal__divider" />

          {/* Font picker */}
          <section className="modal__section modal__section--row">
            <h3 className="modal__section-title">Font</h3>
            <div className="modal__options">
              {FONTS.map(({ key, label, style }) => (
                <button
                  key={key}
                  className={`font-btn${draft.font === key ? ' font-btn--active' : ''}`}
                  style={style}
                  onClick={() => update('font', key)}
                  aria-label={`Font ${key}`}
                  aria-pressed={draft.font === key}
                >
                  {label}
                </button>
              ))}
            </div>
          </section>

          <div className="modal__divider" />

          {/* Color picker */}
          <section className="modal__section modal__section--row">
            <h3 className="modal__section-title">Color</h3>
            <div className="modal__options">
              {COLORS.map(({ key, hex }) => (
                <button
                  key={key}
                  className={`color-btn${draft.color === key ? ' color-btn--active' : ''}`}
                  style={{ backgroundColor: hex }}
                  onClick={() => update('color', key)}
                  aria-label={`Color ${key}`}
                  aria-pressed={draft.color === key}
                />
              ))}
            </div>
          </section>
        </div>

        <div className="modal__footer">
          <button className="apply-btn" onClick={handleApply}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
