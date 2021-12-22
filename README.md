# Some integration challenge based on Benjamin Code's YT video

<div align="center">
  <img src="https://github.com/Console-buche/inte_marvel/blob/main/demo.gif?raw=true" alt="Inte marvel / benjamin code's challenge"></a>
</div>

Just for the sake of it, I went for react and totally overengineered the thing... But it was good practice and a fun project to make.
Things to note : I went for simple hooks to manage card state. It's a bit ugly but bringing in a store manager would have been way too much for a simple UI that's not destined to be put to prod or anything.
Also : I'm sure there's tons of hardcoded values & unoptimized stuff left, but since the goal was to go as fast as possible well... Here goes :P This project will remain "as is" and not intended to be scalable.
If you want to fork it to build a prod project, here are a few things to work on :
1. add routing (no active links in nav components)
2. add a store manager or some context to hold readable and scalable state
doing 2), you will also need to refactor the card components to rid them of their state props


<strong>/!\ Not responsive !</strong>

Check out Benjamin's video [on YouTube](https://www.youtube.com/watch?v=JTG6VoLJuAc).

## Install, run & build

### `npm install`

### `npm run client`

Runs the app in the development mode.

### `npm run build`

Build it and it'll come!
