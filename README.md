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

3. In order for the application to not error please do the following:

   ```bash
   create a new file called .env.local in the root directory of both the web and cms and paste the following:


   NEXT_PUBLIC_SUPABASE_URL=https://rzqslwrkxnifdgwlulxv.supabase.co 
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6cXNsd3JreG5pZmRnd2x1bHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1NjEwOTgsImV4cCI6MjAxNjEzNzA5OH0.s8BpHTLZtkRF-PqNLydv4ISON-B2eUMs2QHeRih2SK0 

   NEXT_PUBLIC_RESEND_API_KEY=re_QEjoJzJa_J3epLnZJnBDApDVchjuimywK
   ```

   These are the credentials in order to connect to the database and the email api.

4. Run the catering-web && catering-cms applications:

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

> Catering mobile has moved to [this repo](https://github.com/SuzuyaBish/catering-expo)

1. Clone the repo:

   ```bash
   git clone https://github.com/SuzuyaBish/catering-expo.git
   ```

2. Navigate into the application and install dependencies:

   ```bash
   cd catering-expo && yarn
   ```

3. Run the application:

   ```bash
   yarn start
   ```

4. Open the application:

   ```bash
   Press "a" when the application has started to open on an available Android emulator
   or press i to run on an available ios simulator
   or scan the qr code with the downloaded Expo Go app and the application will open on your device.
   ```
