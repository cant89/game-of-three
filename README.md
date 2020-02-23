# Game of three

Stupid non-sense game built with:
- Front -> React, Redux, Socket.io, Styled Components
- Back -> NodeJS with Express.js and Socket.io

## How to run

Open two terminal and type

1. `cd app && npm start`

2. `cd server && node index.js`

Enjoy

## How to play

1. Choose the right incremental (-1, 0, +1) in order to obtaint a number divisible by 3
2. If you choose the wrong one, you lose. If not, go to next step
3. The app divide the number by 3 automatically
4. If the result is 1, you win. If not, go to next step
3. The result will be sent to the opponent who will do the same step, starting from point (1)
