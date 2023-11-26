# XBCAD WIL PROJECT

**!!!Please remember to pull the code before you make changes!!!**

This mono repo contains the source code for both the web and mobile versions of the catering app for the XBCAD WIL project.

## Contributors

- Jarrod Sloan (ST10247529)
- Peter Thompson (ST10119797)

## Table of Contents

- [XBCAD WIL PROJECT](#xbcad-wil-project)
  - [Contributors](#contributors)
  - [Table of Contents](#table-of-contents)
  - [Todo List](#todo-list)
    - [List for Jarrod Sloan](#list-for-jarrod-sloan)
    - [List for Peter Thompson](#list-for-peter-thompson)
  - [Requirements](#requirements)
  - [Catering Web \&\& CMS Install \& Run Instructions](#catering-web--cms-install--run-instructions)
  - [Catering Mobile Install \& Run Instructions](#catering-mobile-install--run-instructions)

## Todo List

This is the todo list as of November 16, 2023.

### List for Jarrod Sloan

- [x] Create and setup database
- [x] Web landing page
- [x] Contact us page web
- [x] Contact us page mobile
- [x] Testimony page web
- [x] Contact us logic (with Resend) web
- [x] Blog content page web
- [x] Recipe content page web
- [x] About page web
- [x] Blog list page web
- [x] Auth logic
- [x] Recipe list page web
- [x] Created CMS
- [x] CMS Recipe logic and ui
- [x] CMS Blog logic and ui
- [x] Web account page ui and logic
- [x] Mobile acocunt page ui and logic
- [x] Web mobile responsiveness

---

### List for Peter Thompson

- [ ] Blog list page mobile
- [ ] Recipe list page mobile
- [ ] Legal pages for web (Terms & Conditions + Privacy Policy)
- [ ] Legal pages for mobile (Terms & Conditions + Privacy Policy)
- [x] Mobile Landing page
- [ ] Testimony page mobile
- [ ] Recipe content page mobile
- [x] Mobile layout shell
- [x] About page mobile
- [ ] Blog content page mobile

## Requirements

- Node (LTS)
- NPM
- PNPM
- Flutter SDK

If you do not have PNPM installed run the following (requires npm):

```bash
npm install -g pnpm
```

**Optional**:
If you do not have Android you can install it from [here](https://developer.android.com/studio/install).

If you do not have the Flutter SDK follow the instructions for your operating system [here](https://docs.flutter.dev/get-started/install).

## Catering Web && CMS Install & Run Instructions

1. Clone the repo:

   ```bash
   git clone https://github.com/SuzuyaBish/catering-monorepo.git
   ```

2. Move into the catering web folder and install dependencies:

   ```bash
   cd catering-monorepo && pnpm install
   ```

3. Run the catering-web && catering-cms applications:

   ```bash
   pnpm turbo dev
   ```

The applications will now be running on [localhost:3000](http://localhost:3000/) && [localhost:3001](http://localhost:3001).

If you want to run each of these individually do the following:

```bash
pnpm turbo dev --filter catering-web
or
pnpm turbo dev --filter catering-cms
```

## Catering Mobile Install & Run Instructions

These instructions assume you are using VSCode.

1. Clone the repo (if you haven't already):

   ```bash
   git clone https://github.com/SuzuyaBish/catering-monorepo.git
   ```

2. Open the project in VSCode:

   ```bash
   cd catering-monorepo/apps/catering-mobile && code .
   ```

3. Select the device you want to run the application on:

   ```bash
   Cntrl + Shift + P
   Flutter: Select Device
   ```

4. Run the application:

   ```bash
   F5
   ```

The application will now start on the chosen device.
