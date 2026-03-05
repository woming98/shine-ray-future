import { Exercise } from '../types';

export const ATOMIC_WORLD_EXERCISES: Exercise[] = [
  {
    id: 'aw-001',
    type: 'multiple_choice',
    question: 'The equivalent wavelength of a photon of energy 10 eV is',
    options: ['213 nm', '124 nm', '25.6 nm', '19.7 nm'],
    answer: '124 nm',
    explanation:
      'Use E = hf = hc/lambda. Converting 10 eV to joules gives E = 10 x 1.6 x 10^-19 J. Then lambda = hc/E = (6.63 x 10^-34 x 3.0 x 10^8) / (1.6 x 10^-18) about 1.24 x 10^-7 m = 124 nm.',
    difficulty: 1,
    points: 10,
    hints: [
      'Use E = hc/lambda.',
      'Convert electron volts to joules first.',
      'Convert metres to nanometres at the end.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-002',
    type: 'multiple_choice',
    question:
      'In an experiment on the photoelectric effect, a beam of monochromatic light is directed onto a metal plate to liberate electrons. The velocity of the fastest photoelectrons emitted is',
    options: [
      'directly proportional to the frequency of the incident light.',
      'directly proportional to the intensity of the incident light.',
      'independent of the nature of metal.',
      'independent of the intensity of the incident light.',
    ],
    answer: 'independent of the intensity of the incident light.',
    explanation:
      'The maximum kinetic energy, and therefore the speed of the fastest photoelectrons, depends on photon energy and the work function of the metal. Intensity changes the number of photons and hence the number of emitted electrons, but not the energy per photon. So the fastest photoelectron speed is independent of light intensity.',
    difficulty: 2,
    points: 15,
    hints: [
      'Intensity changes photon number, not photon energy.',
      'Maximum speed is tied to maximum kinetic energy.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-003',
    type: 'multiple_choice',
    question:
      'The work function W of five metals are tabulated below.\n\nMetal: Caesium, Barium, Calcium, Magnesium, Beryllium\nW / 10^-19 J: 3.4, 4.0, 4.6, 5.9, 8.0\n\nWhen monochromatic light of wavelength 400 nm is incident on each of the metals, how many of them would exhibit photoelectric emission ?',
    options: ['1', '2', '3', '4'],
    answer: '3',
    explanation:
      'Photon energy is E = hc/lambda = (6.63 x 10^-34 x 3.0 x 10^8) / (400 x 10^-9) about 4.97 x 10^-19 J. Photoelectric emission occurs only if the photon energy exceeds the work function. This is true for Caesium, Barium and Calcium, but not for Magnesium or Beryllium. Therefore 3 metals emit photoelectrons.',
    difficulty: 2,
    points: 15,
    hints: [
      'Calculate the photon energy from the wavelength.',
      'Compare the result with each work function.',
      'Count only those with W less than the photon energy.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-004',
    type: 'multiple_choice',
    question:
      'Photons with energy 7 eV are incident on the cathode of a photocell. The maximum kinetic energy of the photoelectrons emitted is 4 eV. When photons of energy 4 eV are incident on the cathode, the stopping potential will be',
    options: ['0 V', '1 V', '2 V', '3 V'],
    answer: '1 V',
    explanation:
      'Use the photoelectric equation E = W + Kmax. From 7 eV = W + 4 eV, the work function is W = 3 eV. With 4 eV photons, Kmax = 4 eV - 3 eV = 1 eV. Since stopping potential in volts equals the maximum kinetic energy in eV, the stopping potential is 1 V.',
    difficulty: 2,
    points: 15,
    hints: [
      'First find the work function from the 7 eV case.',
      'Then apply E = W + Kmax again.',
      '1 eV corresponds to a stopping potential of 1 V.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-005',
    type: 'multiple_choice',
    question:
      'In studying the photoelectric effect, a certain metal is illuminated by ultraviolet radiation of different frequency f and the maximum kinetic energy K of the photoelectrons emitted is measured. What would happen to the graph if ultraviolet radiation of higher intensity is shone on the same metal?',
    options: [
      'slope smaller, horizontal-axis intercept unchanged',
      'slope larger, horizontal-axis intercept unchanged',
      'slope unchanged, horizontal-axis intercept unchanged',
      'slope unchanged, horizontal-axis intercept smaller',
    ],
    answer: 'slope unchanged, horizontal-axis intercept unchanged',
    explanation:
      'For the photoelectric effect, the relation is Kmax = hf - phi. The slope of the Kmax-f graph is h, which is a universal constant, so it does not change. The horizontal-axis intercept is the threshold frequency, which depends on the metal only. Changing the light intensity changes the number of emitted electrons, not the maximum kinetic energy relation. Therefore both remain unchanged.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use Kmax = hf - phi.',
      'Intensity changes electron number, not photon energy.',
      'The metal is unchanged.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-006',
    type: 'multiple_choice',
    question:
      'In an experiment with a photocell, readings were taken of the stopping potential Vs for a series of frequencies f of the incident light, and the results plotted as a graph of Vs against f. If the emitting electrode is now changed to one of a different metal, which also gives photoelectrons, the new graph\n\n(1) cuts the Vs axis at the same point\n(2) cuts the f axis at the same point\n(3) has the same slope',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      'Using eVs = hf - phi gives Vs = (h/e)f - phi/e. The slope is h/e, so it is the same for different metals. The intercepts depend on the work function phi, which changes from one metal to another. Therefore only statement (3) is correct.',
    difficulty: 2,
    points: 15,
    hints: [
      'Write the equation in straight-line form.',
      'Changing the metal changes the work function.',
      'The slope depends only on constants.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-007',
    type: 'multiple_choice',
    question:
      'For the photoelectric effect, which of the following is the correct relationship between the energy E of a photon, the work function W of the surface which it strikes, and the maximum kinetic energy K of the emitted photoelectrons ?',
    options: ['E = W + K', 'E = W - K', 'E = K - W', 'K = 2(W + E)'],
    answer: 'E = W + K',
    explanation:
      'Einstein’s photoelectric equation states that the photon energy is used partly to overcome the work function and the remainder becomes the maximum kinetic energy of the emitted electron. Therefore E = W + K.',
    difficulty: 1,
    points: 10,
    hints: [
      'Photon energy is split into two parts.',
      'One part frees the electron, one part becomes kinetic energy.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-008',
    type: 'multiple_choice',
    question:
      'Which of the following graphs best represents the variation of the maximum velocity v of the photoelectrons emitted from a target with the frequency f of the incident light?',
    options: ['A', 'B', 'C', 'D'],
    answer: 'C',
    explanation:
      'From hf = phi + (1/2)mv^2, we get v = sqrt((2h/m)f - (2phi/m)). So v varies as the square root of a linear function of f. The graph starts at the threshold frequency and then rises with a square-root shape. That corresponds to option C.',
    difficulty: 2,
    points: 15,
    hints: [
      'Start from Einstein’s photoelectric equation.',
      'Rearrange for v.',
      'The graph should begin only after threshold frequency.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-009',
    type: 'multiple_choice',
    question:
      'Red light shines on the photoelectric cell C as shown. If the reading of the microammeter is zero, this may be explained by the fact that\n\n(1) the e.m.f. of the battery is too small.\n(2) the intensity of the light is too low.\n(3) electrode X is made of a material with too great a work function.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(3) only',
    explanation:
      'If no electrons are emitted, the current is zero regardless of the battery e.m.f. Light intensity affects the number of photons, but if each photon still has insufficient energy, increasing intensity does not solve the problem. The correct explanation is that the work function is too large, so the red light photon energy is below the threshold.',
    difficulty: 2,
    points: 15,
    hints: [
      'No photocurrent means no emitted photoelectrons.',
      'Intensity changes number of photons, not energy per photon.',
      'Compare photon energy with work function.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-010',
    type: 'multiple_choice',
    question:
      'When a beam of light of intensity I and frequency f is shone on the surface of a metal connected to earth, 200 electrons are ejected from the surface per second. If a light beam of intensity 2I and frequency 2f is used, the number of electrons ejected from the metal per second will be',
    options: ['50', '100', '200', '400'],
    answer: '200',
    explanation:
      'The emission rate is proportional to the number of incident photons per second. Since photon energy is proportional to f, for the same beam area the photon rate is proportional to intensity divided by frequency. Doubling the intensity and doubling the frequency keeps I/f unchanged, so the emission rate remains the same. Therefore the number stays 200 per second.',
    difficulty: 2,
    points: 15,
    hints: [
      'Electron count follows photon count.',
      'Photon rate is proportional to intensity divided by photon energy.',
      'Doubling both intensity and frequency leaves the ratio unchanged.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-011',
    type: 'multiple_choice',
    question:
      'The figure above shows the currents observed in a photocell circuit as a function of the p.d. between the plates of the photocell when light beams I, II, III and IV were each directed in turn at the cathode. Which of the beams has the highest frequency?',
    options: ['I', 'II', 'III', 'IV'],
    answer: 'II',
    explanation:
      'Higher light frequency means higher photon energy, so the emitted photoelectrons can have greater maximum kinetic energy. That gives the greatest stopping potential in magnitude on the current-voltage graph. The beam with the greatest stopping potential is beam II, so it has the highest frequency.',
    difficulty: 2,
    points: 15,
    hints: [
      'Highest frequency gives highest maximum photoelectron energy.',
      'Highest maximum energy corresponds to the largest stopping potential.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-012',
    type: 'multiple_choice',
    question:
      'Light falls on the photo-sensitive metal surface of a photocell. A battery and a sensitive meter are connected to the photocell as shown. Which of the following statements is correct ?',
    options: [
      'No current is observed in the meter until after a considerable time, when the metal surface has heated up.',
      'The maximum energy of the electrons emitted is proportional to the intensity of light.',
      'The maximum kinetic energy of the electrons emitted is independent of the particular metal used.',
      'No current is observed in the meter unless the frequency of light is above a minimum value.',
    ],
    answer: 'No current is observed in the meter unless the frequency of light is above a minimum value.',
    explanation:
      'Photoelectrons are emitted without time delay once the photon energy is high enough. The key condition is that the light frequency must exceed the threshold frequency of the metal. Below that threshold, no photoelectrons are emitted, so no current is observed.',
    difficulty: 2,
    points: 15,
    hints: [
      'Photoelectric emission is immediate.',
      'There is a threshold frequency for each metal.',
      'Intensity alone cannot overcome an insufficient photon energy.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-013',
    type: 'multiple_choice',
    question:
      'When light of wavelength 4.0 x 10^-7 m is incident on the surface of a metal, the kinetic energy of the electrons emitted has a maximum value of 3.0 x 10^-19 J. What is the longest wavelength of light which would cause electrons to be emitted from the metal?',
    options: ['6.6 x 10^-7 m', '1.0 x 10^-6 m', '2.5 x 10^-6 m', '9.8 x 10^-3 m'],
    answer: '1.0 x 10^-6 m',
    explanation:
      'Use the photoelectric relation hc/lambda = hc/lambda0 + Kmax, where lambda0 is the threshold wavelength. Substituting the given wavelength and kinetic energy gives a threshold wavelength of about 1.0 x 10^-6 m, so that is the longest wavelength that can still produce emission.',
    difficulty: 3,
    points: 20,
    hints: [
      'Use the threshold condition Kmax = 0 for the longest wavelength.',
      'Start from Einstein’s photoelectric equation.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-014',
    type: 'multiple_choice',
    question:
      'The photoelectric effect occurs when monochromatic light falls upon a metal surface in a photocell. What happens when the light intensity increases ?',
    options: [
      'More electrons are emitted with unchanged speed.',
      'More electrons are emitted with increased speed.',
      'The same number of electrons is emitted with increased speed.',
      'More photons are emitted from the surface.',
    ],
    answer: 'More electrons are emitted with unchanged speed.',
    explanation:
      'Increasing intensity at fixed wavelength increases the number of incident photons per second, so more photoelectrons are emitted. Since the frequency is unchanged, the photon energy is unchanged, so the maximum kinetic energy and hence the maximum speed of the emitted photoelectrons stay the same.',
    difficulty: 2,
    points: 15,
    hints: [
      'Keep the frequency fixed.',
      'Intensity changes photon number, not photon energy.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-015',
    type: 'multiple_choice',
    question:
      'A beam of monochromatic light falls on a metal surface. If the frequency of the light is doubled but the intensity remains unchanged, which of the following statements is/are correct ?\n\n(1) The photon energy is doubled.\n(2) The number of photons falling on the surface per second is halved.\n(3) The maximum kinetic energy of photoelectrons ejected is doubled.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) & (2) only',
    explanation:
      'Photon energy is E = hf, so doubling the frequency doubles the photon energy. For the same intensity, the power delivered is unchanged, so if each photon carries twice the energy, the number of photons per second must halve. However, Kmax = hf - phi, so doubling f does not in general make the maximum kinetic energy exactly double.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use E = hf.',
      'For fixed intensity, power is fixed.',
      'Kmax is not directly proportional to frequency because of the work function term.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-016',
    type: 'multiple_choice',
    question:
      'In an experiment on the photoelectric effect, a beam of monochromatic light is directed onto a metal plate to liberate electrons. Which of the following statements is true ?',
    options: [
      'The velocity of the fastest electrons is directly proportional to the frequency of the incident light.',
      'The velocity of the fastest electrons is directly proportional to the intensity of the incident light.',
      'The kinetic energy of the fastest electrons is directly proportional to the frequency of the incident light.',
      'The velocity of the fastest electrons is independent of the intensity of the incident light.',
    ],
    answer: 'The velocity of the fastest electrons is independent of the intensity of the incident light.',
    explanation:
      'At fixed frequency, intensity only changes the number of photons and therefore the number of emitted electrons. It does not change the energy per photon, so it does not change the maximum kinetic energy or the speed of the fastest photoelectrons.',
    difficulty: 2,
    points: 15,
    hints: [
      'Maximum speed depends on maximum kinetic energy.',
      'Intensity does not change photon energy.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-017',
    type: 'multiple_choice',
    question:
      'The work function of a metal is the least energy required to',
    options: [
      'release one mole of electrons from the surface of the metal.',
      'bring one mole of electrons from the interior of the metal to the surface.',
      'release one electron from the surface of the metal.',
      'bring one electron from the interior of the metal to the surface.',
    ],
    answer: 'release one electron from the surface of the metal.',
    explanation:
      'The work function is defined as the minimum energy needed to remove a single electron from the surface of a metal.',
    difficulty: 1,
    points: 10,
    hints: [
      'It is defined per electron, not per mole.',
      'The electron must leave the metal surface.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-018',
    type: 'multiple_choice',
    question:
      'When light of frequency f1 is shone on to a metal surface, the maximum energy of the electrons emitted is E1. If the same surface is illuminated with light of frequency f2, the maximum energy of the electrons emitted is E2. The Planck constant is given by',
    options: [
      '(f2E1 - f1E2) / (f1f2)',
      '(E1 + E2) / (f1 + f2)',
      '(E1 - E2) / (f1 + f2)',
      '(E1 - E2) / (f1 - f2)',
    ],
    answer: '(E1 - E2) / (f1 - f2)',
    explanation:
      'Using Einstein’s photoelectric equation for the same metal: hf1 = phi + E1 and hf2 = phi + E2. Subtracting gives h(f1 - f2) = E1 - E2, so h = (E1 - E2) / (f1 - f2).',
    difficulty: 2,
    points: 15,
    hints: [
      'Write the photoelectric equation twice.',
      'Eliminate the work function by subtraction.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-019',
    type: 'multiple_choice',
    question:
      'A metal surface is illuminated with monochromatic light so that it emits photoelectrons. The maximum kinetic energy of the emitted photoelectrons depends on\n\n(1) the distance of the metal surface from the light source.\n(2) the work function of the metal surface.\n(3) the wavelength of the incident monochromatic light.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(2) & (3) only',
    explanation:
      'The maximum kinetic energy is given by Kmax = hc/lambda - W. It depends on the work function W of the metal and on the wavelength lambda of the incident light. The distance from the source may affect intensity, but not the photon energy itself in this ideal treatment.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use Kmax = hc/lambda - W.',
      'Distance affects intensity, not photon energy.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-020',
    type: 'multiple_choice',
    question:
      'A d.c. source is applied to a photocell as shown. Monochromatic radiation is incident on cathode C so that photoelectrons are emitted from the cathode surface. The maximum kinetic energy of the photoelectrons reaching anode A can be increased by using\n\n(1) a d.c. source of higher voltage.\n(2) monochromatic radiation of longer wavelength.\n(3) the same monochromatic radiation but of higher intensity.',
    options: ['(1) only', '(3) only', '(1) & (2) only', '(2) & (3) only'],
    answer: '(1) only',
    explanation:
      'A higher accelerating voltage increases the electrical energy gained by the photoelectrons on their way to the anode, so the maximum kinetic energy at the anode increases. A longer wavelength means lower photon energy and therefore reduces Kmax at emission. Higher intensity at the same wavelength increases electron number, not the energy per electron.',
    difficulty: 2,
    points: 15,
    hints: [
      'Separate the emission stage from the later acceleration stage.',
      'Longer wavelength means lower photon energy.',
      'Intensity changes count, not energy per photon.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-021',
    type: 'multiple_choice',
    question:
      'The graph shows the variation in maximum kinetic energy K of photoelectrons with the frequency f of the incident radiation on a metallic surface. If radiation of twice the intensity is used, which of the following graphs (dotted line) shows the variation of K with f ?',
    options: ['A', 'B', 'C', 'D'],
    answer: 'A',
    explanation:
      'The maximum kinetic energy follows Kmax = hf - phi, so it depends on frequency and work function, not on light intensity. Doubling the intensity changes the number of emitted photoelectrons but does not change the K-f relation. Therefore the dotted line should be unchanged, corresponding to option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Use Kmax = hf - phi.',
      'Intensity does not change the maximum kinetic energy.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-022',
    type: 'multiple_choice',
    question:
      'In a series of photoelectric emission experiments on a certain metal surface, relationships between the following physical quantities were investigated.\n\nf = frequency of incident light\nI = intensity of incident light\ni = photoelectric current\nK = maximum kinetic energy of photoelectrons\n\nTwo of these quantities, when plotted on a graph of y against x, would give a straight line through the origin. Which of the following correctly identifies x and y ?',
    options: ['x = f, y = K', 'x = f, y = i', 'x = I, y = K', 'x = I, y = i'],
    answer: 'x = I, y = i',
    explanation:
      'For frequencies above the threshold, the photoelectric current is proportional to the number of emitted electrons per second. That depends on the number of incident photons per second and therefore on the light intensity. So i is directly proportional to I, giving a straight line through the origin.',
    difficulty: 2,
    points: 15,
    hints: [
      'Photoelectric current measures emission rate.',
      'At fixed frequency above threshold, stronger light means more photons per second.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-023',
    type: 'multiple_choice',
    question:
      'A certain photocell emits electrons when illuminated with yellow light. This photocell will probably NOT emit electrons when illuminated with',
    options: ['blue light', 'green light', 'red light', 'ultra-violet radiation'],
    answer: 'red light',
    explanation:
      'If yellow light can eject electrons, then the threshold frequency is at or below yellow light. Red light has a lower frequency than yellow light, so its photons have less energy and may fall below the threshold. Blue and ultraviolet light have higher frequencies than yellow light and are therefore more likely to cause emission.',
    difficulty: 1,
    points: 10,
    hints: [
      'Lower frequency means lower photon energy.',
      'Compare colours relative to yellow.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-024',
    type: 'multiple_choice',
    question:
      'A beam of red light falls on one electrode of a photocell and electrons are emitted. The red beam is then replaced by a blue one that has the same intensity. Which of the following physical quantities would decrease as a result of this change ?',
    options: [
      'The maximum kinetic energy of the photoelectrons emitted',
      'The energy of each photon striking the electrode',
      'The number of photons striking the electrode per second',
      'The magnitude of the potential difference across the photocell required to reduce the photo-electric current to zero',
    ],
    answer: 'The number of photons striking the electrode per second',
    explanation:
      'Blue light has a higher frequency than red light, so each blue photon carries more energy. If the intensity stays the same, the power is unchanged, so the number of photons per second must decrease. That is the quantity that becomes smaller.',
    difficulty: 2,
    points: 15,
    hints: [
      'Same intensity means same power delivered.',
      'Higher frequency means larger energy per photon.',
      'Photon rate must therefore fall.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-025',
    type: 'multiple_choice',
    question:
      'In an experiment on the photoelectric effect, a student measured the potential Vs required to prevent photoemission when a metal was illuminated with radiations of varying wavelength lambda. His observations led him to plot a straight-line graph with negative y-intercept. The correct labels for the axes are',
    options: ['x = 1/lambda, y = Vs', 'x = Vs, y = lambda', 'x = lambda, y = Vs', 'x = Vs, y = 1/lambda'],
    answer: 'x = 1/lambda, y = Vs',
    explanation:
      'Starting from eVs = hf - phi and using f = c/lambda, we get Vs = (hc/e)(1/lambda) - phi/e. This is a straight-line relation between Vs and 1/lambda, with a negative y-intercept. So x is 1/lambda and y is Vs.',
    difficulty: 2,
    points: 15,
    hints: [
      'Replace f with c/lambda.',
      'Write the equation in y = mx + c form.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-026',
    type: 'multiple_choice',
    question:
      'A beam of blue light falls on the cathode of a photocell so that electrons are emitted. The blue beam is then replaced by a yellow one with the same intensity and electrons are also emitted. What would happen to each of the following physical quantities when the blue beam is replaced by the yellow beam?\n\nK: the maximum kinetic energy of the electrons emitted\nI: the magnitude of the photoelectric current',
    options: [
      'K increase, I remain unchanged',
      'K decrease, I remain unchanged',
      'K decrease, I increase',
      'K decrease, I decrease',
    ],
    answer: 'K decrease, I increase',
    explanation:
      'Yellow light has a lower frequency than blue light, so each photon has less energy and the maximum kinetic energy decreases. With the same intensity, the beam power is unchanged, so lower photon energy means more photons per second. That can produce more emitted electrons per second, so the photoelectric current increases.',
    difficulty: 3,
    points: 20,
    hints: [
      'Lower frequency means lower photon energy.',
      'For fixed intensity, fewer joules per photon means more photons per second.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-027',
    type: 'multiple_choice',
    question:
      'In a photoelectric emission experiment using light of a certain wavelength, the potential difference V required to stop any electrons from reaching the anode is measured for different light intensity I. Which graph shows how V depends on I ?',
    options: ['A', 'B', 'C', 'D'],
    answer: 'A',
    explanation:
      'The stopping potential is related to the maximum kinetic energy by eV = Kmax. For fixed wavelength, the photon energy is fixed, so Kmax is fixed. Therefore the stopping potential does not depend on intensity and remains constant as I changes. The correct graph is the horizontal line, option A.',
    difficulty: 2,
    points: 15,
    hints: [
      'Stopping potential is tied to maximum kinetic energy.',
      'At fixed wavelength, the photon energy is fixed.',
      'Intensity does not affect Kmax.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-028',
    type: 'multiple_choice',
    question:
      'The work function W of five metals are tabulated below.\n\nMetal: Caesium, Barium, Calcium, Magnesium, Beryllium\nW / 10^-19 J: 3.4, 4.0, 4.6, 5.9, 8.0\n\nIf monochromatic light of wavelength 400 nm is incident on each of the metals, how many of them would exhibit photoelectric effect ?',
    options: ['1', '2', '3', '4'],
    answer: '3',
    explanation:
      'The photon energy for 400 nm light is E = hc/lambda about 4.97 x 10^-19 J. Photoelectric emission occurs only when E exceeds the work function. This is true for Caesium, Barium and Calcium only, so 3 metals show the effect.',
    difficulty: 2,
    points: 15,
    hints: [
      'Calculate the photon energy for 400 nm.',
      'Compare it with each work function.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-029',
    type: 'multiple_choice',
    question:
      'The human eye is most sensitive to green light of wavelength 520 nm. Our eyes can detect light of minimum intensity 2.0 x 10^-13 W m^-2. Estimate the minimum number of photons entering an eye in one second in order to cause sensation, assuming that the average diameter of the pupil is 5 mm.',
    options: ['10000', '1000', '100', '10'],
    answer: '10',
    explanation:
      'The energy of one photon is E = hc/lambda = (6.63 x 10^-34 x 3.0 x 10^8) / (520 x 10^-9) about 3.8 x 10^-19 J. The pupil area is A = pi(d/2)^2 = pi(2.5 x 10^-3)^2 about 2.0 x 10^-5 m^2. So the minimum power entering the eye is P = IA about (2.0 x 10^-13)(2.0 x 10^-5) about 4 x 10^-18 W. Since P = (N/t)E, the photon rate is about (4 x 10^-18)/(3.8 x 10^-19) about 10 per second.',
    difficulty: 3,
    points: 20,
    hints: [
      'Find the energy per photon first.',
      'Use the pupil area from its diameter.',
      'Then use power = photon rate x energy per photon.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-030',
    type: 'multiple_choice',
    question:
      'Monochromatic light is incident on a photo-emissive cell connected to a variable d.c. supply as shown. The galvanometer shows no deflection. Which of the following can be a possible reason ?\n\n(1) The temperature of the photo-emissive cell is too low.\n(2) The wavelength of the incident light is too long.\n(3) The d.c. voltage applied has been reduced to zero.',
    options: ['(1) only', '(2) only', '(1) & (3) only', '(2) & (3) only'],
    answer: '(2) only',
    explanation:
      'If the wavelength is too long, the frequency is too low and may be below the threshold frequency, so no photoelectrons are emitted and the galvanometer shows no current. The temperature of the cell is not the determining factor for photoelectric emission. If photoelectrons are emitted, a current can still exist even when the applied voltage is zero.',
    difficulty: 2,
    points: 15,
    hints: [
      'A longer wavelength means a lower frequency.',
      'Check the threshold condition for emission.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-031',
    type: 'multiple_choice',
    question:
      'In photoelectric emission experiments, when monochromatic light of wavelength lambda is incident on metals X and Y, the maximum kinetic energy of the photoelectrons emitted are 1.0 eV and 0.5 eV respectively. If the incident light is replaced by that of wavelength lambda / 2, the maximum kinetic energy of the photoelectrons emitted from metal X becomes 3.0 eV. What is the maximum kinetic energy of the photoelectrons emitted from metal Y ?',
    options: ['1.0 eV', '1.5 eV', '2.0 eV', '2.5 eV'],
    answer: '2.5 eV',
    explanation:
      'For wavelength lambda, metal X gives 1.0 eV and metal Y gives 0.5 eV, so the work function of Y is 0.5 eV larger than that of X. When the wavelength is halved, the photon energy increases. For metal X, the maximum kinetic energy rises from 1.0 eV to 3.0 eV, so it increases by 2.0 eV. The same photon-energy increase applies to metal Y, so its maximum kinetic energy rises from 0.5 eV to 2.5 eV.',
    difficulty: 3,
    points: 20,
    hints: [
      'Compare the two metals at the same wavelength first.',
      'Halving wavelength changes the photon energy by the same amount for both metals.',
    ],
    sectionId: 'atomic-world',
  },
  {
    id: 'aw-032',
    type: 'multiple_choice',
    question:
      'When a metal surface is illuminated by light of wavelength 400 nm, the emission of photoelectrons can be stopped by a potential of 0.9 V. Find the work function of the metal.',
    options: ['0.9 eV', '2.2 eV', '2.9 eV', '3.1 eV'],
    answer: '2.2 eV',
    explanation:
      'The photon energy for 400 nm light is E = hc/lambda about 4.97 x 10^-19 J, which is about 3.1 eV. The stopping potential of 0.9 V means the maximum kinetic energy is 0.9 eV. Using E = W + Kmax gives W = 3.1 - 0.9 = 2.2 eV.',
    difficulty: 2,
    points: 15,
    hints: [
      'Convert the photon energy from wavelength into eV.',
      'Use Kmax = eVs, so 0.9 V corresponds to 0.9 eV.',
      'Then apply the photoelectric equation.',
    ],
    sectionId: 'atomic-world',
  },
];
