# Experiences Page Design Notes

## Current Purpose

The experiences page is the broad resume-style work page. It organizes Shrey's work across clinical AI, product engineering, human factors research, embodied systems, patient-facing experience, medical-device invention, and early AR/product work.

This page is broader than the individual case-study pages. It should read like responsibilities and accomplishments, while individual project pages can go deeper into problem, people, process, product, architecture, PRD, and case-study detail.

## Current Structure

1. Top navigation
   - Brand link: `Codes by Shrey`
   - Primary routes: `Education`, `Experiences`, `Expression`

2. Page hero
   - Eyebrow: `Experiences`
   - H1: `Clinical AI, human factors, full-stack prototypes, and embodied systems.`

3. Experience list
   - `mpathic`
     - Clinical AI evaluator role
     - Not currently clickable as a full card
     - Anchor: `#mpathic`
   - `Somanaut @ Practice Intuition`
     - Clickable card to `../expression/`
     - Split into digital product system and coaching/embodied practice
     - Includes Practice Intuition links and Bonita MVP links
   - `Clinical Roleplay Simulator - NBME`
     - Clickable card to `../clinical-roleplay/`
     - Main NBME / clinical roleplay simulator experience
     - Includes case study, PRD anchor, live demo, GitHub repo, and tech stack
   - `HapTrek`
     - Clickable card to `../haptrek/`
     - Haptic outdoor navigation / embodied interface work
     - Includes tech stack and gainsbyshrey reference
   - `NATHAN Sports / United Sports Brands`
     - Clickable card to `../nathan-sports/`
     - UX research, mixed-methods adjacent research, and mobile usability recommendations
     - Includes HF795 and HF780 sub-boxes
   - `YMCA + Wellness Group`
     - Clickable card to `../gainsbyshrey/`
     - Coaching, swim instruction, movement education, wellness context
   - `Associate PM @ CCnC Solutions + EMT`
     - Clickable card to `../chatEMT/`
     - Product incubation plus EMT as secondary experience context
   - `Glenoid Implant Patent - RPI`
     - Clickable card to `../patent/`
     - Biomedical engineering capstone / patent experience
   - `Praxik LLC - AR Internship Project`
     - Clickable card to `../praxik/`
     - Swift / ARKit / SceneKit museum-learning prototype

## Current Visual Approach

The page uses repeated experience cards with:
- Two-column layout on desktop
- Main work description on the left
- Links, tags, and category metadata on the right
- Clickable-card behavior where a deeper page exists
- Sub-boxes inside large experiences when multiple related roles or research efforts are paired

Current category color language:
- Red: tech stack / education-coded items
- Blue: concepts, themes, frameworks, experience tags
- Purple: live links and internal reference links

Dropdowns were removed from this page so tech stacks and link buttons are visible directly on the card.

## Current Interaction / Routing

Clickable experience cards use `data-href` and JavaScript at the bottom of the page. The JavaScript intentionally ignores clicks on links/buttons so internal buttons remain usable.

Current card routes:
- Somanaut: `../expression/`
- NBME: `../clinical-roleplay/`
- HapTrek: `../haptrek/`
- Nathan Sports: `../nathan-sports/`
- YMCA + Wellness Group: `../gainsbyshrey/`
- CCnC + EMT: `../chatEMT/`
- Patent: `../patent/`
- Praxik: `../praxik/`

## Design Intent So Far

The current page is meant to be readable like a resume but more visually organized:
- Main bullets should focus on responsibilities and accomplishments.
- Deep project detail belongs on individual pages.
- Related experiences can be paired when they clarify a theme.
- Tags and links should help route different audiences to the right proof.

## Future Edit Notes

Future edits may:
- Give each experience a more specific visual treatment
- Add actual deep pages for mpathic or EMT
- Reorder experiences based on job target
- Make role-specific variants for researcher, product, developer, or coaching audiences
- Tighten or expand bullet language based on resume targeting

