import React, { useState } from 'react';
import { SandboxTokenState } from '../../types/portfolio';
import { Sliders, Eye, RefreshCw, CheckCircle2, AlertTriangle, Activity } from 'lucide-react';
import { Badge } from '../common/Badge';

export const DesignTokenSandbox: React.FC = () => {
  const [tokens, setTokens] = useState<SandboxTokenState>({
    density: 'balanced',
    radius: 'subtle',
    contrastMode: 'aa',
    gridVisible: false,
  });

  const [simulatedInfusionRate, setSimulatedInfusionRate] = useState<number>(4.2);
  const [infusionActive, setInfusionActive] = useState<boolean>(true);

  // Derived styling maps based on design tokens
  const densityStyles = {
    compact: {
      padding: 'p-3',
      gap: 'gap-2',
      textSize: 'text-xs',
      buttonHeight: 'h-8 px-3 text-xs',
      metricSize: 'text-xl',
      touchTarget: '32px min-target (High density tabular view)',
    },
    balanced: {
      padding: 'p-5',
      gap: 'gap-4',
      textSize: 'text-sm',
      buttonHeight: 'h-10 px-4 text-sm',
      metricSize: 'text-2xl',
      touchTarget: '44px standard pointer target (Desktop / Web)',
    },
    relaxed: {
      padding: 'p-6 sm:p-7',
      gap: 'gap-5',
      textSize: 'text-base',
      buttonHeight: 'h-12 px-5 text-base',
      metricSize: 'text-3xl',
      touchTarget: '56px touch & glove friendly (Hospital Bedside)',
    },
  }[tokens.density];

  const radiusStyles = {
    sharp: 'rounded-none',
    subtle: 'rounded',
    rounded: 'rounded-xl',
  }[tokens.radius];

  const contrastStyles = {
    aa: {
      cardBg: 'bg-canvas-card border-stroke text-ink',
      subtleBox: 'bg-canvas-subtle border-stroke text-ink-secondary',
      accentBadge: 'bg-studio-rust/10 text-studio-rust border-studio-rust/30',
      activeStatus: 'text-studio-sage',
      labelColor: 'text-ink-tertiary',
      valueColor: 'text-ink',
    },
    aaa: {
      cardBg: 'bg-white border-2 border-ink text-black',
      subtleBox: 'bg-gray-100 border-2 border-ink text-black font-semibold',
      accentBadge: 'bg-black text-white border-2 border-black font-bold',
      activeStatus: 'text-black font-bold',
      labelColor: 'text-black',
      valueColor: 'text-black font-extrabold',
    },
    'high-contrast': {
      cardBg: 'bg-[#0f1115] border-2 border-[#ffdb58] text-[#ffdb58]',
      subtleBox: 'bg-[#1a1d24] border border-[#ffdb58] text-white',
      accentBadge: 'bg-[#ffdb58] text-black font-bold border border-[#ffdb58]',
      activeStatus: 'text-[#48e592] font-mono font-bold',
      labelColor: 'text-[#9ea7b4]',
      valueColor: 'text-[#ffdb58]',
    },
  }[tokens.contrastMode];

  return (
    <section id="sandbox" className="py-20 border-b border-stroke bg-canvas">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="accent">Interactive Systems Lab</Badge>
            <span className="text-xs font-mono text-ink-tertiary">Real-time Token Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink mb-4">
            Adaptive Ergonomics in Action
          </h2>
          <p className="text-base text-ink-secondary leading-relaxed">
            Test how design tokens govern ergonomics. Toggle physical density (touch vs mouse), border-radius semantics, and contrast profiles to see the clinical infusion interface recalibrate instantly.
          </p>
        </div>

        {/* Sandbox Grid: Left Controls, Right Live Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 bg-canvas-card border border-stroke rounded-lg p-6 space-y-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-stroke">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-studio-rust" />
                <span className="text-sm font-semibold text-ink">Design Token Controls</span>
              </div>
              <button
                onClick={() => setTokens({ density: 'balanced', radius: 'subtle', contrastMode: 'aa', gridVisible: false })}
                className="text-xs font-mono text-ink-tertiary hover:text-ink flex items-center gap-1"
                title="Reset to defaults"
              >
                <RefreshCw className="w-3 h-3" />
                Reset
              </button>
            </div>

            {/* Density Selector */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-ink-tertiary mb-2">
                Layout Density (Physical Context)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['compact', 'balanced', 'relaxed'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setTokens({ ...tokens, density: mode })}
                    className={`py-2 px-3 text-xs font-mono rounded border transition-all ${
                      tokens.density === mode
                        ? 'bg-ink text-canvas border-ink font-semibold'
                        : 'bg-canvas-subtle text-ink-secondary border-stroke hover:border-stroke-strong'
                    }`}
                  >
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </button>
                ))}
              </div>
              <p className="mt-1.5 text-xs text-ink-tertiary">
                Target: {densityStyles.touchTarget}
              </p>
            </div>

            {/* Radius Tokens */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-ink-tertiary mb-2">
                Border Radius Paradigm
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['sharp', 'subtle', 'rounded'] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => setTokens({ ...tokens, radius: r })}
                    className={`py-2 px-3 text-xs font-mono rounded border transition-all ${
                      tokens.radius === r
                        ? 'bg-ink text-canvas border-ink font-semibold'
                        : 'bg-canvas-subtle text-ink-secondary border-stroke hover:border-stroke-strong'
                    }`}
                  >
                    {r === 'sharp' ? '0px (Industrial)' : r === 'subtle' ? '4px (Precision)' : '12px (Soft)'}
                  </button>
                ))}
              </div>
            </div>

            {/* Contrast / Accessibility Profile */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-ink-tertiary mb-2">
                Accessibility Profile
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setTokens({ ...tokens, contrastMode: 'aa' })}
                  className={`py-2 px-2.5 text-xs font-mono rounded border transition-all ${
                    tokens.contrastMode === 'aa'
                      ? 'bg-ink text-canvas border-ink font-semibold'
                      : 'bg-canvas-subtle text-ink-secondary border-stroke hover:border-stroke-strong'
                  }`}
                >
                  Standard AA
                </button>
                <button
                  onClick={() => setTokens({ ...tokens, contrastMode: 'aaa' })}
                  className={`py-2 px-2.5 text-xs font-mono rounded border transition-all ${
                    tokens.contrastMode === 'aaa'
                      ? 'bg-ink text-canvas border-ink font-semibold'
                      : 'bg-canvas-subtle text-ink-secondary border-stroke hover:border-stroke-strong'
                  }`}
                >
                  Strict AAA
                </button>
                <button
                  onClick={() => setTokens({ ...tokens, contrastMode: 'high-contrast' })}
                  className={`py-2 px-2.5 text-xs font-mono rounded border transition-all ${
                    tokens.contrastMode === 'high-contrast'
                      ? 'bg-ink text-canvas border-ink font-semibold'
                      : 'bg-canvas-subtle text-ink-secondary border-stroke hover:border-stroke-strong'
                  }`}
                >
                  OLED Field
                </button>
              </div>
            </div>

            {/* Grid Overlay Toggle */}
            <div className="pt-2 flex items-center justify-between border-t border-stroke">
              <span className="text-xs font-mono text-ink-secondary flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                Inspect 8pt Layout Boundaries
              </span>
              <button
                onClick={() => setTokens({ ...tokens, gridVisible: !tokens.gridVisible })}
                className={`w-10 h-5 rounded-full p-0.5 transition-colors ${
                  tokens.gridVisible ? 'bg-studio-rust' : 'bg-stroke-strong'
                }`}
                aria-label="Toggle layout grid"
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    tokens.gridVisible ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Generated Token Readout */}
            <div className="pt-2">
              <span className="block text-xs font-mono text-ink-tertiary mb-1">
                Active Token Signature:
              </span>
              <pre className="text-[11px] font-mono bg-canvas-subtle p-2.5 rounded border border-stroke text-ink-secondary overflow-x-auto">
{JSON.stringify({
  density: tokens.density,
  targetMin: tokens.density === 'relaxed' ? '56px' : tokens.density === 'balanced' ? '44px' : '32px',
  radius: tokens.radius === 'sharp' ? '0px' : tokens.radius === 'subtle' ? '4px' : '12px',
  contrastStandard: tokens.contrastMode.toUpperCase(),
}, null, 2)}
              </pre>
            </div>
          </div>

          {/* Live Preview Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-ink-tertiary uppercase tracking-wider">
                Component Under Test: Bedside ICU Infusion Node
              </span>
              <span className="text-xs font-mono text-studio-rust">
                Live State: {infusionActive ? 'PUMPING' : 'HELD'}
              </span>
            </div>

            {/* The Live Interactive Component */}
            <div 
              className={`relative border transition-all ${contrastStyles.cardBg} ${radiusStyles} ${densityStyles.padding} ${
                tokens.gridVisible ? 'outline-dashed outline-2 outline-studio-rust/50' : ''
              }`}
            >
              {/* Optional Redline Grid overlay */}
              {tokens.gridVisible && (
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#C0532E_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
              )}

              {/* Component Header */}
              <div className="flex items-start justify-between pb-4 border-b border-stroke mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-studio-rust animate-pulse" />
                    <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                      Bed 04 • Dopamine HCL
                    </span>
                  </div>
                  <h3 className={`font-semibold tracking-tight mt-1 ${contrastStyles.valueColor}`}>
                    Pediatric Weight-Dosed Infusion
                  </h3>
                </div>

                <span className={`text-xs px-2 py-0.5 font-mono ${radiusStyles} ${contrastStyles.accentBadge}`}>
                  Dual Verified
                </span>
              </div>

              {/* Main Dosage Gauge */}
              <div className={`grid grid-cols-2 ${densityStyles.gap} mb-5`}>
                <div className={`border p-3 ${radiusStyles} ${contrastStyles.subtleBox}`}>
                  <span className={`block text-xs font-mono ${contrastStyles.labelColor}`}>
                    Infusion Rate
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className={`font-mono font-bold tracking-tight ${densityStyles.metricSize} ${contrastStyles.valueColor}`}>
                      {simulatedInfusionRate.toFixed(1)}
                    </span>
                    <span className="text-xs font-mono text-ink-tertiary">mcg/kg/min</span>
                  </div>
                </div>

                <div className={`border p-3 ${radiusStyles} ${contrastStyles.subtleBox}`}>
                  <span className={`block text-xs font-mono ${contrastStyles.labelColor}`}>
                    Concentration Limit
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className={`font-mono font-bold tracking-tight ${densityStyles.metricSize} ${contrastStyles.valueColor}`}>
                      1.60
                    </span>
                    <span className="text-xs font-mono text-ink-tertiary">mg/mL (Max 3.20)</span>
                  </div>
                </div>
              </div>

              {/* Interactive Rate Adjuster (Demonstrating Thumb Tap Ergonomics) */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className={contrastStyles.labelColor}>Dial Adjustment (±0.1 Steps)</span>
                  <span className={contrastStyles.valueColor}>Patient Weight: 14.2 kg</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSimulatedInfusionRate((prev) => Math.max(1.0, +(prev - 0.1).toFixed(1)))}
                    className={`flex-1 border font-mono font-semibold flex items-center justify-center transition-colors ${radiusStyles} ${densityStyles.buttonHeight} ${
                      tokens.contrastMode === 'high-contrast'
                        ? 'border-[#ffdb58] text-[#ffdb58] hover:bg-[#ffdb58] hover:text-black'
                        : 'border-stroke bg-canvas hover:bg-canvas-subtle text-ink'
                    }`}
                  >
                    - 0.1 mcg
                  </button>

                  <button
                    onClick={() => setSimulatedInfusionRate((prev) => Math.min(10.0, +(prev + 0.1).toFixed(1)))}
                    className={`flex-1 border font-mono font-semibold flex items-center justify-center transition-colors ${radiusStyles} ${densityStyles.buttonHeight} ${
                      tokens.contrastMode === 'high-contrast'
                        ? 'border-[#ffdb58] text-[#ffdb58] hover:bg-[#ffdb58] hover:text-black'
                        : 'border-stroke bg-canvas hover:bg-canvas-subtle text-ink'
                    }`}
                  >
                    + 0.1 mcg
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-3 border-t border-stroke">
                <button
                  onClick={() => setInfusionActive(!infusionActive)}
                  className={`flex-1 font-mono font-medium flex items-center justify-center gap-2 transition-all ${radiusStyles} ${densityStyles.buttonHeight} ${
                    infusionActive
                      ? 'bg-ink text-canvas hover:bg-ink-secondary'
                      : 'bg-studio-rust text-canvas hover:bg-studio-rust/90'
                  }`}
                >
                  {infusionActive ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Hold Infusion</span>
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-4 h-4 text-amber-300" />
                      <span>Resume Infusion</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Ergonomic rationale callout */}
            <div className="p-4 bg-canvas-subtle rounded border border-stroke text-xs text-ink-secondary flex items-start gap-3">
              <span className="font-mono text-studio-rust font-bold">INSIGHT:</span>
              <p>
                In relaxed mode, hit-targets expand to 56px, accommodating nitrile surgical gloves. In strict AAA mode, soft grays are banished in favor of high-luminance ratio borders to ensure nurse readouts don't wash out under 1200-lux emergency room lights.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
