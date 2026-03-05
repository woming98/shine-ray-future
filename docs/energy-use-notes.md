# Energy and Use of Energy Notes (from Question Bank)

Scope: `energy-and-use-of-energy`  
Question count: **51**

---

## 1) Core Formula Sheet

## 1.1 Illuminance and Light Output

- Point source illuminance:
  - `E = Phi/(4pi r^2)`
- Lambert cosine correction:
  - `E = [Phi/(4pi r^2)] cos(theta)`
- Luminous flux from efficacy:
  - `Phi = (lm/W) x P`

Key units:

- `E` in `lx` (lux)
- `Phi` in `lm`
- `P` in `W`
- `r` in `m`

## 1.2 Efficiency and Useful Energy

- `eta = E_useful/E_input = P_useful/P_input`
- `E = Pt`
- Heating relation:
  - `Q = mc Delta T`

## 1.3 Cost and Labels

- Electricity cost:
  - `cost = E(kWh) x tariff`
- Average power from label:
  - `P_avg = E_total/t_total`

## 1.4 Heat Pump / Refrigerator

- Heat pump:
  - `COP_HP = Q_H/W`
- Refrigerator / cooling mode:
  - `COP_R = Q_C/W`
- Energy relation:
  - `Q_H = Q_C + W`

---

## 2) High-Frequency Question Types

## 2.1 Lamp and Illuminance

Common:

- Compare lamp brightness from `Phi = efficacy x P`
- Inverse-square change with distance
- Surface tilt effect using cosine factor

Frequent mistakes:

- Forgetting `cos(theta)` when surface is tilted
- Using diameter as radius directly
- Mixing `lm` and `lx`

---

## 2.2 End-use Efficiency

Common:

- Useful output power from rated input and efficiency
- Heat lost to surroundings: `loss = input - useful`
- Appliance comparison (incandescent, CFL, LED, induction cooker)

Frequent mistakes:

- Treating all input as useful output
- Writing efficiency percentage as a raw number incorrectly

---

## 2.3 Heating/Cooling Energy

Common:

- Water heating cost (`Q = mc Delta T`)
- Room cooling estimate with air mass and specific heat
- Time required from cooling capacity

Frequent mistakes:

- Wrong mass from volume-density conversion
- Not converting minutes/hours/seconds consistently
- Mixing `J` and `kWh`

---

## 2.4 COP Problems

Common:

- Calculate COP from `Q_H`, `Q_C`, or `W`
- Determine cooling capacity from rated power and COP
- Interpret why COP can be greater than 1

Frequent mistakes:

- Using efficiency definition for COP
- Confusing `Q_H` and `Q_C`

---

## 2.5 Energy Label (EELS-style) Questions

Common:

- Infer average power from annual energy use
- Compare appliance grades by annual consumption and function
- Interpret meaning of cooling capacity and annual usage assumptions

Frequent mistakes:

- Assuming annual consumption means 24/7 operation unless specified
- Ignoring stated yearly operating hours/wash cycles

---

## 3) Fast Solving Templates

## Template A: Illuminance at a Point

1. Compute luminous flux if needed: `Phi = efficacy x P`.
2. Find source-point distance `r` from geometry.
3. If surface tilt exists, include `cos(theta)`.
4. Use:
   - normal facing: `E = Phi/(4pi r^2)`
   - tilted: `E = [Phi/(4pi r^2)] cos(theta)`

## Template B: Heating Cost

1. Compute useful heat: `Q = mc Delta T`.
2. Convert to input energy: `E_in = Q/eta`.
3. Convert `E_in` to `kWh`.
4. Multiply tariff for cost.

## Template C: COP

1. Identify device mode:
   - heating mode use `COP_HP = Q_H/W`
   - cooling mode use `COP_R = Q_C/W`
2. Use `Q_H = Q_C + W` when needed.
3. Solve unknown and check physical meaning.

## Template D: Energy Label Average Power

1. Get total annual energy (`kWh`) and total annual operating time (`h`).
2. Use `P_avg = E_total/t_total`.
3. Convert `kW` to `W` if required.

---

## 4) Concept Quick Summary

- Brightness at a point depends on output, distance, and surface orientation.
- Efficacy (`lm/W`) is key for lighting efficiency comparison.
- End-use efficiency focuses on useful output, not total emitted forms.
- Induction cooking is generally more efficient than open-flame gas heating in end-use context.
- COP is not a percentage efficiency and can be larger than 1.

---

## 5) Exam-Day Reminders

- Keep units strict: `W`, `J`, `Wh`, `kWh`, `lm`, `lx`.
- For geometry questions, verify whether angle is to normal or to surface.
- For cost questions, always convert to billing unit (`kWh`) before multiplying tariff.
- For COP questions, first decide whether the useful quantity is heating (`Q_H`) or cooling (`Q_C`).

