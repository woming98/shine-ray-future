import { Exercise } from '../types';

export const ASTRONOMY_SPACE_EXERCISES: Exercise[] = [
  {
    id: 'astro-001',
    type: 'multiple_choice',
    question:
      'Which of the following is NOT contained in the astronomical object shown in the figure?',
    options: ['Cluster of galaxies', 'Nebula', 'Star', 'Star cluster'],
    answer: 'Cluster of galaxies',
    explanation:
      'The object shown is a spiral galaxy. A galaxy can contain stars, star clusters and nebulae, but a cluster of galaxies is a larger structure that contains many whole galaxies. Therefore a cluster of galaxies is not contained inside the single galaxy shown.',
    difficulty: 1,
    points: 10,
    hints: [
      'Identify the object first: it is a spiral galaxy.',
      'A galaxy contains stars and nebulae.',
      'A cluster of galaxies is larger than one galaxy.',
    ],
    sectionId: 'astronomy-space-science',
    imagePaths: ['/physics/exercises/astronomy-space-science/astro-001-question.png'],
  },
  {
    id: 'astro-002',
    type: 'multiple_choice',
    question:
      'Arrange the following celestial bodies in ascending order of distance from the Earth:\n\n(1) Sun\n(2) Sirius, which is 8.6 ly from Earth\n(3) Uranus, which is 19 AU from Earth',
    options: ['(1) (2) (3)', '(1) (3) (2)', '(3) (1) (2)', '(3) (2) (1)'],
    answer: '(1) (3) (2)',
    explanation:
      'The Sun is 1 AU from Earth by definition. Uranus is 19 AU from Earth, which is farther than the Sun but still far less than a star. Sirius is 8.6 light years away, which is vastly larger than 19 AU. Therefore the ascending order is Sun, Uranus, Sirius.',
    difficulty: 1,
    points: 10,
    hints: [
      '1 ly is much larger than 1 AU.',
      'The Sun is 1 AU from Earth.',
      'Compare 1 AU, 19 AU, and 8.6 ly.',
    ],
    sectionId: 'astronomy-space-science',
  },
  {
    id: 'astro-003',
    type: 'multiple_choice',
    question:
      'Mercury is 0.39 AU from the Sun. Which of the following is NOT a possible distance between Mercury and the Earth? Assume that the orbits of Mercury and the Earth are circular and co-planar.',
    options: ['1.20 AU', '1.00 AU', '0.78 AU', '0.50 AU'],
    answer: '0.50 AU',
    explanation:
      'Earth is 1 AU from the Sun and Mercury is 0.39 AU from the Sun. The smallest possible separation is when they are on the same side of the Sun: 1.00 - 0.39 = 0.61 AU. The greatest possible separation is when they are on opposite sides: 1.00 + 0.39 = 1.39 AU. So only distances between 0.61 AU and 1.39 AU are possible. Therefore 0.50 AU is impossible.',
    difficulty: 2,
    points: 15,
    hints: [
      'Find the minimum separation by subtraction.',
      'Find the maximum separation by addition.',
      'Check whether the option lies inside that range.',
    ],
    sectionId: 'astronomy-space-science',
  },
  {
    id: 'astro-004',
    type: 'multiple_choice',
    question:
      'Given that a typical galaxy in the form of a circular disc is of diameter 10^5 ly and thickness 10^3 ly containing about 10^11 stars, estimate the average separation between two neighbouring stars within the galaxy assuming that the stars are uniformly distributed.',
    options: ['4.3 ly', '6.8 ly', '8.9 ly', '43 ly'],
    answer: '4.3 ly',
    explanation:
      'Treat the galaxy as a disc. Its radius is 5 x 10^4 ly, so the volume is pi r^2 t = pi x (5 x 10^4)^2 x 10^3 about 7.854 x 10^12 ly^3. If 10^11 stars are uniformly distributed and the average spacing is s, then each star occupies about s^3. So 10^11 s^3 = 7.854 x 10^12, giving s about 4.3 ly.',
    difficulty: 2,
    points: 15,
    hints: [
      'Approximate the galaxy as a cylindrical disc.',
      'Find the average volume per star.',
      'Take the cube root to estimate the spacing.',
    ],
    sectionId: 'astronomy-space-science',
  },
  {
    id: 'astro-005',
    type: 'multiple_choice',
    question:
      'An asteroid is at 3.84 AU from the Sun. What is the maximum possible distance between the asteroid and the Earth, expressed in light minutes?',
    options: ['24 light minute', '32 light minute', '40 light minute', '48 light minute'],
    answer: '40 light minute',
    explanation:
      'Earth is 1 AU from the Sun. The maximum separation occurs when Earth and the asteroid are on opposite sides of the Sun, so the distance is 3.84 + 1.00 = 4.84 AU. Converting: 4.84 AU = 4.84 x 1.50 x 10^11 m = 7.26 x 10^11 m. Dividing by 3 x 10^8 m s^-1 gives about 2420 s, which is about 40.3 minutes. So the best estimate is 40 light minutes.',
    difficulty: 2,
    points: 15,
    hints: [
      'Maximum separation means opposite sides of the Sun.',
      'Use 1 AU = 1.50 x 10^11 m.',
      'Convert seconds of light travel into minutes.',
    ],
    sectionId: 'astronomy-space-science',
  },
  {
    id: 'astro-006',
    type: 'multiple_choice',
    question:
      'The Milky Way Galaxy extends over 75000 ly. Calculate the distance in km that spans over.',
    options: ['1.1 x 10^13 m', '1.1 x 10^16 m', '7.1 x 10^17 km', '7.1 x 10^20 km'],
    answer: '7.1 x 10^17 km',
    explanation:
      'Using 1 ly = 9.46 x 10^15 m, the distance is 75000 x 9.46 x 10^15 m = about 7.1 x 10^20 m. Converting metres to kilometres gives 7.1 x 10^17 km.',
    difficulty: 1,
    points: 10,
    hints: [
      'Use 1 ly = 9.46 x 10^15 m.',
      'Convert metres to kilometres at the end.',
    ],
    sectionId: 'astronomy-space-science',
  },
  {
    id: 'astro-007',
    type: 'multiple_choice',
    question:
      'Which of the following celestial bodies is NOT revolving around the Sun ?',
    options: ['Dwarf planet', 'Moon', 'Comet', 'Meteoroid'],
    answer: 'Moon',
    explanation:
      'Dwarf planets, comets and meteoroids all orbit the Sun. A moon is a natural satellite of a planet, so it primarily revolves around a planet rather than directly around the Sun in this classification.',
    difficulty: 1,
    points: 10,
    hints: [
      'A moon is a satellite.',
      'Satellites orbit planets, not classified as directly orbiting the Sun here.',
    ],
    sectionId: 'astronomy-space-science',
  },
  {
    id: 'astro-008',
    type: 'multiple_choice',
    question:
      'Which of the following statements concerning the Milky Way is/are correct ?\n\n(1) The Milky Way is a spiral galaxy.\n(2) The Solar system is at the centre of the Milky Way.\n(3) The Milky Way contains supercluster of galaxies.',
    options: ['(1) only', '(1) & (2) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(1) only',
    explanation:
      'The Milky Way is a spiral galaxy. The Solar System is not at the centre; it lies in a spiral arm away from the centre. A supercluster of galaxies is larger than a single galaxy, so the Milky Way does not contain a supercluster. Instead, the Milky Way belongs to larger structures such as the Local Group and then a supercluster.',
    difficulty: 1,
    points: 10,
    hints: [
      'The Milky Way is one galaxy, not a collection of galaxies.',
      'The Solar System is not at the galactic centre.',
    ],
    sectionId: 'astronomy-space-science',
  },
  {
    id: 'astro-009',
    type: 'multiple_choice',
    question:
      'If light takes 8 minutes 20 seconds to reach the Earth, what is the time taken for light to reach Neptune from the Sun, given that Neptune is at 30 AU away from the Sun ?',
    options: ['150 minutes', '200 minutes', '250 minutes', '300 minutes'],
    answer: '250 minutes',
    explanation:
      'The Earth is 1 AU from the Sun by definition, and light takes 8 minutes 20 seconds to travel 1 AU. Neptune is 30 AU from the Sun, so the travel time is 30 times larger. 8 minutes 20 seconds is 500 s, and 500 x 30 = 15000 s = 250 minutes.',
    difficulty: 1,
    points: 10,
    hints: [
      'Use direct proportionality between distance and light-travel time.',
      'Convert 8 minutes 20 seconds into seconds first if needed.',
    ],
    sectionId: 'astronomy-space-science',
  },
  {
    id: 'astro-010',
    type: 'multiple_choice',
    question:
      'Which of the following shapes of galaxies is not found in the universe ?',
    options: ['spiral galaxy', 'elliptical galaxy', 'irregular galaxy', 'cubic galaxy'],
    answer: 'cubic galaxy',
    explanation:
      'Observed galaxy classifications include spiral, elliptical and irregular galaxies. A cubic galaxy is not a real observed galaxy class.',
    difficulty: 1,
    points: 10,
    hints: [
      'Recall the standard galaxy classes.',
      'Only one option is not a real astronomical classification.',
    ],
    sectionId: 'astronomy-space-science',
  },
  {
    id: 'astro-011',
    type: 'multiple_choice',
    question:
      'Which of the following concerning Venus are correct ?\n\n(1) Venus has its own moon.\n(2) Venus cannot be seen at the mid-night.\n(3) Venus is the brightest planet that can be seen from the Earth.',
    options: ['(1) & (2) only', '(1) & (3) only', '(2) & (3) only', '(1), (2) & (3)'],
    answer: '(2) & (3) only',
    explanation:
      'Venus has no natural moon. Because Venus is an inner planet, it stays relatively close to the Sun in the sky and cannot be seen at midnight. It is also the brightest planet visible from Earth.',
    difficulty: 1,
    points: 10,
    hints: [
      'Venus is an inner planet.',
      'Inner planets stay near the Sun in the sky.',
      'Venus has no natural satellite.',
    ],
    sectionId: 'astronomy-space-science',
  },
  {
    id: 'astro-012',
    type: 'multiple_choice',
    question:
      'Arrange the following celestial objects according to their sizes in descending order.\n\n(1) galaxy\n(2) star cluster\n(3) supercluster',
    options: ['(1), (2), (3)', '(2), (1), (3)', '(3), (1), (2)', '(3), (2), (1)'],
    answer: '(3), (1), (2)',
    explanation:
      'A supercluster is the largest structure among the three and contains many galaxies. A galaxy is larger than a star cluster and can contain many star clusters. Therefore the descending order is supercluster, galaxy, star cluster.',
    difficulty: 1,
    points: 10,
    hints: [
      'Think in terms of containment.',
      'A larger structure can contain the smaller one.',
    ],
    sectionId: 'astronomy-space-science',
  },
  {
    id: 'astro-013',
    type: 'multiple_choice',
    question:
      'Which of the following statements can be used to explain why stars in the sky rise in the east and set in the west ?',
    options: [
      'The Earth rotates from west to east with a period of a day.',
      'The Earth rotates from east to west with a period of a day.',
      'The Earth rotates from west to east with a period of a year.',
      'The Earth rotates from east to west with a period of a year.',
    ],
    answer: 'The Earth rotates from west to east with a period of a day.',
    explanation:
      'The Earth rotates once every day from west to east. Because of this eastward rotation, the sky appears to move in the opposite direction, so stars appear to rise in the east and set in the west.',
    difficulty: 1,
    points: 10,
    hints: [
      'Apparent motion of the sky is opposite to Earth’s rotation.',
      'This is caused by daily rotation, not yearly revolution.',
    ],
    sectionId: 'astronomy-space-science',
  },
];
