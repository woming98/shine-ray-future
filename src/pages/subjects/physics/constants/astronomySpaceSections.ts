export interface AstronomySpaceSection {
  id: string;
  name: string;
  nameCN: string;
  description: string;
}

export const ASTRONOMY_SPACE_SECTIONS: AstronomySpaceSection[] = [
  {
    id: 'astronomy-space-science',
    name: 'Astronomy and Space Science',
    nameCN: '天文与太空科学',
    description: 'Galaxies, stars, planets, and astronomical distance scales',
  },
];
