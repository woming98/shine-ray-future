# Astronomy and Space Science Notes (from Question Bank)

Scope: `astronomy-space-science`  
Question count: **13**

---

## 1) Core Facts and Units

- `1 AU = 1.50 x 10^11 m`
- `1 ly = 9.46 x 10^15 m`
- Speed of light: `c = 3.0 x 10^8 m/s`
- Light travel: `t = d/c`

Common conversion:

- `1 light minute = 60 light second = 60c m`

---

## 2) Core Formula Set

- Distance conversion:
  - `d(m) = d(AU) x 1.50 x 10^11`
  - `d(m) = d(ly) x 9.46 x 10^15`
- Light-time conversion:
  - `t(s) = d/c`
  - `t(min) = d/(60c)`
- Max/min separation on coplanar circular orbits:
  - `d_max = r1 + r2`
  - `d_min = |r1 - r2|`
- Disc-galaxy volume estimate:
  - `V = pi r^2 h`
- Average spacing estimate:
  - `N s^3 ~ V` so `s ~ (V/N)^(1/3)`

---

## 3) High-Frequency Question Types

## 3.1 Distance Ordering and Unit Comparison

Typical:

- Compare AU-scale vs ly-scale objects
- Convert mixed units before ranking

Frequent mistake:

- Ranking directly without unit conversion

---

## 3.2 Planet-Earth Distance Range

Typical:

- Given orbital radii, judge possible/impossible Earth-planet distance

Key method:

1. Compute `d_min = |r_earth - r_planet|`
2. Compute `d_max = r_earth + r_planet`
3. Valid distance must lie in `[d_min, d_max]`

Frequent mistake:

- Forgetting geometry limits, picking out-of-range values

---

## 3.3 Light Travel Time Problems

Typical:

- Convert AU distance to light minutes
- Scale from known Earth-Sun light time

Fast method:

- If 1 AU takes 8 min 20 s, then 30 AU takes 30 times that

Frequent mistake:

- Mixing light-minute with ordinary minute

---

## 3.4 Galaxy Scale Estimation

Typical:

- Estimate average stellar separation from galaxy size and star count
- Convert galaxy span from ly to km

Frequent mistake:

- Wrong power-of-ten handling in ly to m or km conversion

---

## 3.5 Celestial Classification and Hierarchy

Typical:

- Galaxy shape recognition (spiral/elliptical/irregular)
- Hierarchy ordering: star cluster, galaxy, galaxy cluster/supercluster
- Which body orbits Sun vs planet

Frequent mistake:

- Confusing moon orbit (mainly around planet) with direct Sun-orbit classification in MC context

---

## 3.6 Observational Sky Logic

Typical:

- Why stars appear to rise in east and set in west
- Venus visibility timing (not visible at midnight)

Core idea:

- Earth rotates west-to-east daily, so sky appears east-to-west

---

## 4) Quick Concept Checklist

- Milky Way is a spiral galaxy.
- Solar System is not at the Milky Way center.
- A galaxy contains stars, star clusters, nebulae.
- Cluster of galaxies is larger than a single galaxy.
- Venus is very bright but has no moon and is not seen at midnight.

---

## 5) Fast Solving Templates

## Template A: Mixed Distance Conversion

1. Convert all distances to the same unit (`m`, `AU`, or `ly`).
2. Compare magnitudes.
3. Convert back to asked unit if needed.

## Template B: Max/Min Two-Orbit Separation

1. Write both orbital radii.
2. Compute `d_min` and `d_max`.
3. Check whether option lies in interval.

## Template C: Light-Time

1. Compute distance in meters.
2. Use `t = d/c`.
3. Convert to seconds/minutes as required.

## Template D: Galaxy Average Spacing

1. Estimate galaxy volume (`V = pi r^2 h`).
2. Use `s ~ (V/N)^(1/3)`.
3. Keep order-of-magnitude sanity check.

---

## 6) Exam-Day Reminders

- Always normalize units first.
- Separate "real motion" and "apparent sky motion".
- For range questions, find boundaries before evaluating options.
- Keep significant figures reasonable in estimation questions.

