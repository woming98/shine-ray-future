# Radiation and Nuclear Notes (from Question Bank)

Scope: `radiation-radioactivity`, `atomic-model`, `nuclear-energy`.

---

## 1) Chapter Counts

- `radiation-radioactivity`: 84
- `atomic-model`: 46
- `nuclear-energy`: 45

Total: **175**

---

## 2) Core Formula Sheet

## 2.1 Decay and Half-life

- `N = N0 (1/2)^(t/T_half)`
- `N = N0 e^(-lambda t)`
- `A = A0 (1/2)^(t/T_half) = A0 e^(-lambda t)`
- `lambda = ln2 / T_half`
- `A = lambda N`

## 2.2 Count-Rate Processing

- `corrected count = measured count - background count`

## 2.3 Nuclear Equation Rules

- Mass number `A` conserved
- Atomic number `Z` conserved
- Alpha: `A -> A-4`, `Z -> Z-2`
- Beta-minus: `A unchanged`, `Z -> Z+1`
- Gamma: `A unchanged`, `Z unchanged`

## 2.4 Mass-Energy

- `E = Delta m c^2`
- `1 u = 931 MeV`

## 2.5 Two-body Decay Energy Split

- Momentum magnitudes equal in opposite directions
- `KE = p^2/(2m)` for non-relativistic comparison
- `KE_alpha / KE_daughter = m_daughter / m_alpha`

---

## 3) High-Frequency Question Types

## 3.1 Radiation and Radioactivity (84)

Common:

- Half-life from table/graph/count data
- Background subtraction before decay analysis
- Alpha/beta/gamma identification by:
  - electric/magnetic deflection
  - penetrating power
  - ionizing power
- Safety and applications (tracer, sterilization, thickness gauge)

Frequent mistakes:

- Using raw count instead of corrected count
- Treating half-life decay as linear
- Mixing penetration order and ionization order

Quick memory:

- Ionization: `alpha > beta > gamma`
- Penetration: `gamma > beta > alpha`
- Deflection: alpha (+) small; beta (-) large; gamma none

---

## 3.2 Atomic Model (46)

Common:

- Isotope logic (same `Z`, different `A`)
- Particle counting (`proton`, `neutron`, `electron`)
- Decay chain bookkeeping across multiple steps
- Nuclear symbol interpretation

Frequent mistakes:

- Confusing mass number with proton number
- Forgetting beta-minus changes `Z` by +1
- Mixing isotope definition with ion definition

Quick checks:

- `neutron number = A - Z`
- Isotopes: same `Z` only

---

## 3.3 Nuclear Energy (45)

Common:

- Identify reaction type: decay/fission/fusion/bombardment
- Balance full nuclear equation (`A`, `Z`)
- Chain reaction condition in fission
- Mass defect to released energy
- Power/lifetime estimate (Sun/star type questions)

Frequent mistakes:

- Calling any two-product reaction "fission"
- Ignoring produced neutrons in chain-reaction reasoning
- Unit mismatch in energy conversion (`u`, `MeV`, `J`)

Quick memory:

- Fission: heavy nucleus splits + neutrons
- Fusion: light nuclei combine
- Chain reaction requires emitted neutrons to trigger more fissions

---

## 4) Fast Solving Templates

## Template A: Half-life from Count Data

1. Subtract background for each time point.
2. Compare corrected count ratio.
3. Convert ratio to number of half-lives.
4. Compute `T_half = Delta t / n`.

## Template B: Decay Chain Identity

1. Track `A` and `Z` changes step by step.
2. Apply:
   - alpha: `A-4`, `Z-2`
   - beta-minus: `A`, `Z+1`
   - gamma: no change
3. Match final nuclide option.

## Template C: Mass Defect Energy

1. Compute `Delta m = m_initial - m_final`.
2. If in atomic mass unit, use `E(MeV) = Delta m(u) x 931`.
3. If in kg, use `E = Delta m c^2`.
4. Keep sign physical: released energy means final rest mass smaller.

## Template D: Nuclear Equation Balancing

1. Write unknown as `A, Z`.
2. Balance mass numbers.
3. Balance atomic numbers.
4. Verify emitted particle type is physically valid.

---

## 5) Exam-Day Quick Reminders

- Always do background correction first.
- Half-life is multiplicative, not additive-linear decay.
- `A` and `Z` are both conserved in every nuclear equation.
- Beta-minus raises `Z` by 1, not lowers it.
- Gamma does not change nuclide identity.
- Check direction of magnetic/electric deflection with charge sign.
- For energy release, final total rest mass must be lower.
- Keep unit consistency: `u`, `MeV`, `J`, `s`, `year`.

