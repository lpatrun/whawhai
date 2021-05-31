# Project intro

React in typescript project with jsonrpc2.

# Online

Find me online https://lpatrun.github.io/whawhai/

# Project description

At starting screen you can name your warrior/hero and select 3 attacks and also choose your avatar by clicking on it.

![Starting screen](/src/images/screenshots/img1.png)

You can choose one of five warriors, first one (red) being default choice.

![Warriors screen](/src/images/screenshots/img3.png)

When you select 3 attacks and set name you can start the fight. Select's will go green once you choose attacks.

![Warrior setup screen](/src/images/screenshots/img2.png)

Next phase is battle registration, we're waiting for server to prepare the battle.

![Registration screen](/src/images/screenshots/img4.png)

Last screen is reserved for battle results.

![Registration screen](/src/images/screenshots/img5.png)

# Code

I tried to make the code lean so it is easier to navigate through the project.
Some mistakes can be found because this is work in progress.

I separated error and game state. For state management I used only react hooks, no Mobx or Redux.
I have used CSS to style components, it will be upgraded in the future.
