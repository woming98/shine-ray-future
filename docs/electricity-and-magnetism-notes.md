# Electricity and Magnetism Notes (from Question Bank)

Source scope: electricity-and-magnetism related questions only.

---

## 1) Chapter Coverage and Counts

- `electric-circuits`: 168
- `electromagnetic-induction`: 86
- `magnetic-field`: 74
- `domestic-electricity`: 74
- `electrostatics`: 66
- `alternating-current`: 47

Total: **515**

---

## 2) Core Formula Sheet

## 2.1 Circuits and Power

- `V = IR`
- `P = VI = I^2R = V^2/R`
- `E = Pt = VIt`
- Series: `R_total = R1 + R2 + ...`
- Parallel: `1/R_total = 1/R1 + 1/R2 + ...`
- Potential divider: `V1/V2 = R1/R2`

## 2.2 Electrostatics

- Coulomb law: `F = k|Q1Q2|/r^2`
- Electric field strength: `E = F/q`
- Uniform field plates: `E = V/d`

## 2.3 Magnetism and EM Induction

- Force on wire: `F = BIL sin(theta)`
- Force on charge: `F = qvB sin(theta)`
- Magnetic flux: `Phi = BA cos(theta)`
- Motional emf: `epsilon = Blv`
- Faraday law: `epsilon = Delta(NPhi)/Delta t`

## 2.4 AC and Transformers

- Voltage ratio: `Vp/Vs = Np/Ns`
- Ideal transformer power: `VpIp = VsIs`
- Efficiency: `eta = Pout/Pin`
- Line loss: `Ploss = I^2R`
- AC rms: `Vrms = V0/sqrt(2)`, `Irms = I0/sqrt(2)`
- Frequency-period: `f = 1/T`

---

## 3) High-Frequency Topics by Chapter

## 3.1 Electric Circuits (168)

Common question types:

- Mixed series-parallel equivalent resistance
- Current/voltage split in branches
- Rated values (`W`, `V`, `A`) and operating condition checks
- Power and energy-cost calculations

Frequent mistakes:

- Treating series current and parallel current rules incorrectly
- Using one power formula in the wrong known-variable setup
- Unit errors between `J`, `Wh`, `kWh`

---

## 3.2 Domestic Electricity (74)

Common question types:

- Fuse rating and safe current
- Live/neutral/earth wire role
- Appliance power and household loading
- Safety design and fault scenarios

Frequent mistakes:

- Confusing fuse function with earth wire function
- Summing powers but forgetting supply voltage/current relation
- Ignoring simultaneous-use condition in load questions

---

## 3.3 Electrostatics (66)

Common question types:

- Charge interaction and field direction
- Induction vs charging by contact
- Force comparison under changed distance/charge
- Charged particle motion in uniform electric field

Frequent mistakes:

- Sign-direction confusion (field vs force direction)
- Forgetting inverse-square dependence in Coulomb force
- Mixing scalar magnitude and vector direction statements

---

## 3.4 Magnetic Field (74)

Common question types:

- Field direction around current-carrying wire/coil
- Fleming left-hand/right-hand rule direction checks
- Force on wire/particle in magnetic field
- Motor principle and torque direction

Frequent mistakes:

- Wrong hand-rule selection for situation
- Missing `sin(theta)` factor
- Treating magnetic force as doing work on charge

---

## 3.5 Electromagnetic Induction (86)

Common question types:

- Lenz law current direction
- Flux-change reasoning (`BAcos(theta)`)
- Rod-cutting-field induced emf/current
- Eddy current effects and damping

Frequent mistakes:

- Sign and direction errors in Lenz law
- Assuming induction exists even when flux is constant
- Using full rod length instead of effective cutting length

---

## 3.6 Alternating Current (47)

Common question types:

- RMS-peak conversion
- Transformer turns/current/power chain questions
- Transmission with step-up/step-down logic
- Efficiency and power-loss design comparisons

Frequent mistakes:

- Reversing turns ratio
- Applying transformer equations to DC source
- Mixing input/output power when efficiency < 100%

---

## 4) Fast Problem-Solving Templates

## Template A: Circuit Calculation

1. Simplify network to equivalent resistance.
2. Use `V=IR` for total current/voltage.
3. Back-calculate branch currents/voltages.
4. Apply `P` formula matching known quantities.

## Template B: Transformer + Efficiency

1. Use turns ratio for voltage.
2. Use ideal power relation or `eta = Pout/Pin`.
3. Solve current at each side.
4. Check unit and physical reasonableness.

## Template C: Induction Direction

1. Decide whether flux increases or decreases.
2. Use Lenz law to oppose flux change.
3. Determine induced field direction first.
4. Convert to current direction via right-hand rule.

## Template D: Transmission Loss

1. Find transmission current from required power and line voltage.
2. Compute cable loss by `Ploss = I^2R`.
3. Compare designs by changing voltage/current.
4. Conclude high-voltage transmission benefit.

---

## 5) Exam-Day Quick Reminders

- Always define direction before using signs.
- For induction, ask: "is flux changing?"
- For AC power comparisons, use rms values.
- For transformer questions, identify primary/secondary clearly first.
- For line loss, current is the key variable (`I^2R`).
- Do not apply transformer action to DC supply.
- Separate safety-wire concepts: fuse vs earth vs neutral.
- Check if question asks magnitude only or magnitude + direction.

