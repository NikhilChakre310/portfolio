// Theme definitions mapped across the 6 narrative chapters
export const CHAPTER_THEMES = [
  {
    id: 'hero',
    name: 'Genesis',
    label: '01 / Genesis',
    accentPrimary: '#6366f1', // Electric Indigo
    accentSecondary: '#8b5cf6', // Violet
    accentGlow: 'rgba(99, 102, 241, 0.4)',
    ambientTint: 'rgba(99, 102, 241, 0.06)',
    // 3D Morphing Object parameters
    object: {
      shape: 'sphere',
      deformFactor: 0.28,
      noiseSpeed: 0.6,
      wireframeOpacity: 0.22,
      particleSpread: 0.1,
      coreScale: 1.4,
      rotationSpeedY: 0.005,
      cameraZ: 4.8,
      offsetX: 0,
      offsetY: 0,
      colorA: '#6366f1',
      colorB: '#38bdf8',
    },
  },
  {
    id: 'about',
    name: 'Philosophy',
    label: '02 / Story',
    accentPrimary: '#06b6d4', // Cyber Cyan
    accentSecondary: '#6366f1', // Indigo
    accentGlow: 'rgba(6, 182, 212, 0.35)',
    ambientTint: 'rgba(6, 182, 212, 0.05)',
    object: {
      shape: 'prism',
      deformFactor: 0.55,
      noiseSpeed: 0.9,
      wireframeOpacity: 0.4,
      particleSpread: 0.35,
      coreScale: 1.55,
      rotationSpeedY: 0.008,
      cameraZ: 4.6,
      offsetX: 1.2, // Shifts right so content reads clearly on the left
      offsetY: 0.1,
      colorA: '#06b6d4',
      colorB: '#6366f1',
    },
  },
  {
    id: 'skills',
    name: 'Mastery',
    label: '03 / Mastery',
    accentPrimary: '#3b82f6', // Sapphire Blue
    accentSecondary: '#06b6d4', // Cyan
    accentGlow: 'rgba(59, 130, 246, 0.35)',
    ambientTint: 'rgba(59, 130, 246, 0.05)',
    object: {
      shape: 'constellation',
      deformFactor: 0.85,
      noiseSpeed: 1.2,
      wireframeOpacity: 0.35,
      particleSpread: 1.3, // Orbiting constellation vertices
      coreScale: 1.25,
      rotationSpeedY: 0.012,
      cameraZ: 5.2,
      offsetX: -0.8,
      offsetY: 0,
      colorA: '#3b82f6',
      colorB: '#06b6d4',
    },
  },
  {
    id: 'projects',
    name: 'Artifacts',
    label: '04 / Artifacts',
    accentPrimary: '#6366f1', // Royal Indigo
    accentSecondary: '#38bdf8', // Sky Blue
    accentGlow: 'rgba(99, 102, 241, 0.4)',
    ambientTint: 'rgba(99, 102, 241, 0.06)',
    object: {
      shape: 'portal',
      deformFactor: 1.15,
      noiseSpeed: 1.4,
      wireframeOpacity: 0.45,
      particleSpread: 0.9,
      coreScale: 1.6,
      rotationSpeedY: 0.014,
      cameraZ: 4.9,
      offsetX: 0.9,
      offsetY: -0.2,
      colorA: '#6366f1',
      colorB: '#38bdf8',
    },
  },
  {
    id: 'experience',
    name: 'Trajectory',
    label: '05 / Journey',
    accentPrimary: '#8b5cf6', // Cosmic Violet
    accentSecondary: '#6366f1', // Deep Indigo
    accentGlow: 'rgba(139, 92, 246, 0.35)',
    ambientTint: 'rgba(139, 92, 246, 0.05)',
    object: {
      shape: 'helix',
      deformFactor: 0.7,
      noiseSpeed: 0.8,
      wireframeOpacity: 0.38,
      particleSpread: 0.5,
      coreScale: 1.35,
      rotationSpeedY: 0.009,
      cameraZ: 4.7,
      offsetX: -1.1,
      offsetY: 0.1,
      colorA: '#8b5cf6',
      colorB: '#3b82f6',
    },
  },
  {
    id: 'contact',
    name: 'Convergence',
    label: '06 / Contact',
    accentPrimary: '#38bdf8', // Radiant Sky
    accentSecondary: '#6366f1', // Indigo
    accentGlow: 'rgba(56, 189, 248, 0.35)',
    ambientTint: 'rgba(56, 189, 248, 0.05)',
    object: {
      shape: 'ring',
      deformFactor: 0.15, // Calm minimal gem
      noiseSpeed: 0.3,
      wireframeOpacity: 0.3,
      particleSpread: 0.15,
      coreScale: 1.3,
      rotationSpeedY: 0.003,
      cameraZ: 4.5,
      offsetX: 0,
      offsetY: 0,
      colorA: '#38bdf8',
      colorB: '#6366f1',
    },
  },
];
