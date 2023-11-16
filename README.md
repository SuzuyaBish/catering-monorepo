# XBCAD WIL PROJECT

This mono repo contains the source code for both the web and mobile versions of the catering app for the XBCAD WIL project.

## Contributors

- Jarrod Sloan (ST10247529)
- Peter Thompson (student number)

## Table of Contents

- [XBCAD WIL PROJECT](#xbcad-wil-project)
  - [Contributors](#contributors)
  - [Table of Contents](#table-of-contents)
  - [Todo List](#todo-list)
    - [List for Jarrod Sloan](#list-for-jarrod-sloan)
    - [List for Peter Thompson](#list-for-peter-thompson)
  - [Requirements](#requirements)
  - [Catering Web Install \& Run Instructions](#catering-web-install--run-instructions)
  - [Catering Mobile Install \& Run Instructions](#catering-mobile-install--run-instructions)

## Todo List

This is the todo list as of November 16, 2023.

### List for Jarrod Sloan

- [ ] Create and setup database
- [ ] Web landing page
- [ ] Mobile Landing page
- [ ] Contact us logic (with Resend) web
- [ ] Contact us logic (with Resend) mobile
- [ ] Blog content page web
- [ ] Blog content page mobile
- [ ] Mobile layout shell
- [ ] Recipe content page web
- [ ] Recipe content page mobile

---

### List for Peter Thompson

- [ ] Footer for web
- [ ] Web mobile responsiveness
- [ ] Blog list page web
- [ ] Blog list page mobile
- [ ] Recipe list page web
- [ ] Recipe list page mobile
- [ ] Legal pages for web (Terms & Conditions + Privacy Policy)
- [ ] Legal pages for mobile (Terms & Conditions + Privacy Policy)

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

## Catering Web Install & Run Instructions

1. Clone the repo:

    ```bash
    git clone https://github.com/SuzuyaBish/catering-monorepo.git
    ```

2. Move into the catering web folder and install dependencies:

    ```bash
    cd catering-web && pnpm install
    ```

3. Run the catering-web application:

    ```bash
    pnpm run dev
    ```

The application will now be running on [localhost:3000](http://localhost:3000/).

## Catering Mobile Install & Run Instructions

These instructions assume you are using VSCode.

1. Clone the repo (if you haven't already):

    ```bash
    git clone https://github.com/SuzuyaBish/catering-monorepo.git
    ```

2. Open the project in VSCode:

    ```bash
    cd catering-mobile && code .
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
