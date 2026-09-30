// GLSL for the NexusCanvas point cloud + wireframe core.

export const pointsVertex = /* glsl */ `
uniform float uTime;
uniform float uAngle;
uniform float uScatter;
uniform float uMix;
uniform float uProgress;
uniform float uSize;
uniform float uPixelRatio;

attribute vec3 aWeave;
attribute vec3 aDesign;
attribute vec3 aSew;
attribute vec3 aFinish;
attribute float aSeed;
attribute float aSignal;
attribute float aSeam;

varying float vSignal;
varying float vGlow;

vec3 rotY(vec3 p, float a) {
  float c = cos(a);
  float s = sin(a);
  return vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z);
}

void main() {
  // hero: swirling vortex (inner rings orbit faster) that scatters outward
  float r = length(position.xz);
  vec3 vortex = rotY(position, uAngle * (0.55 + 1.3 / (0.5 + r)));
  vortex.y += sin(uTime * 0.6 + aSeed * 6.2831) * 0.05;
  vortex *= 1.0 + uScatter * (2.2 + aSeed * 4.0);

  // process: Spin (chaotic cloud) → Weave → Design → Sew → Finish
  float p = clamp(uProgress, 0.0, 4.0);
  vec3 turb = vec3(
    sin(uTime * 0.9 + aSeed * 41.0 + position.y * 3.0),
    cos(uTime * 0.7 + aSeed * 29.0 + position.x * 2.0),
    sin(uTime * 0.8 + aSeed * 17.0 + position.z * 2.5)
  );
  vec3 spin = rotY(position * 0.62, uTime * 0.35) + turb * 0.32;
  vec3 m;
  if (p < 1.0)      m = mix(spin,    aWeave,  smoothstep(0.0, 1.0, p));
  else if (p < 2.0) m = mix(aWeave,  aDesign, smoothstep(0.0, 1.0, p - 1.0));
  else if (p < 3.0) m = mix(aDesign, aSew,    smoothstep(0.0, 1.0, p - 2.0));
  else              m = mix(aSew,    aFinish, smoothstep(0.0, 1.0, p - 3.0));

  vec3 pos = mix(vortex, m, uMix);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;

  // Sew: marching dashed highlight on seam points
  float sewW = uMix * clamp(1.0 - abs(p - 3.0), 0.0, 1.0);
  float dash = step(0.0, aSeam) * step(0.45, fract(aSeam * 18.0 - uTime * 0.6));
  float finishW = uMix * smoothstep(3.0, 4.0, p);

  vSignal = max(aSignal * (1.0 - finishW), sewW * dash);
  vGlow = 1.0 + finishW * 0.9 + sewW * dash * 0.8;

  gl_PointSize = uSize * uPixelRatio * (0.55 + aSeed * 0.9) * vGlow * (3.0 / -mv.z);
}
`

export const pointsFragment = /* glsl */ `
uniform vec3 uThread;
uniform vec3 uBleach;
uniform float uAlpha;
varying float vSignal;
varying float vGlow;

void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.0, d);
  vec3 col = mix(uThread, uBleach, vSignal) * vGlow;
  gl_FragColor = vec4(col, a * a * uAlpha);
}
`

export const coreVertex = /* glsl */ `
uniform float uTime;
varying float vShade;
void main() {
  vec3 n = normalize(position);
  float wobble = sin(n.x * 4.0 + uTime) * sin(n.y * 5.0 + uTime * 1.3) * sin(n.z * 3.0 + uTime * 0.7);
  vec3 pos = position + n * wobble * 0.18;
  vShade = 0.55 + wobble * 1.2;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`

export const coreFragment = /* glsl */ `
uniform vec3 uColor;
uniform float uAlpha;
varying float vShade;
void main() {
  gl_FragColor = vec4(uColor * vShade, 0.55 * uAlpha);
}
`
