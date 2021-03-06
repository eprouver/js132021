# BLANKS 🕵🏻‍♂️
> Fill in every empty space.
> Reduce the space between us.

Created for the [js13k](https://js13kgames.com/) competition 2021

# Demo Link
[http://lespace.surge.sh/](http://lespace.surge.sh/)

# Gameplay
Blanks Detective is a mystery themed, point-and-click, logic puzzle game.  Fill in the empty spaces on the board as new clues are revealed.  If you can fill in the board correctly and submit before the 'possible thumbs up' message, you get a 'gold medal' bonus.  To 'solve the case' you must answer correctly within the first three attempts.  Watch out, your evidence may get stolen.

If you're having trouble, after 'possible thumbs up' you can use the extra clue button.  There is no penalty for additional clues. Although, it will eventually give you the whole answer, at which point the "Well Done" message may feel sarcastic.

The cases are entirely generated in the browser for infinite replay. After the tutorial there is a ramping up of board size before the board sizes also become random, so some will be easy and some quite a bit harder.

Periodically you will see the 'case files' screen where you can choose the board-size of your next case or play one of the community cases submitted to the NEAR blockchain.

# [NEAR](https://near.org/) and [Coil](https://coil.com/)
If you are signed in with NEAR you can post a new case to the community with your username.

If you are signed in with Coil you can access the 'case files' screen from the main menu - selecting 'new case' in this menu skips the tutorial and the 'ramping up' board sizes. You can also generate a 5x5 board, which is larger than all random boards.  It may take a moment to generate.

# Theme
The theme of the competition was **SPACE**.
The game uses that theme by:
* Filling in the empty spaces in the board
* Completing the puzzle reduces the space between the characters
* Filling in the empty space in all the template strings
* There's no time limit to give you some space to think

# Why does it say "Woman Doctor" and "Man Zombie"?
All of the characters including the detective shuffle randomly both skin tone and gender.

The audio is using the speechSynthesis library of the browser, used by screen readers. What you hear is how each emoji is read by a randomly chosen screen reader voice. Although you can remove the skin tone from the emoji before speechSynthesis to avoid the browser saying things like "Man Doctor with Medium Light Skin Tone", because of how the emojis are defined, removing the gender breaks the meaning in some cases.  For example, instead of "Woman Scientist", it would say "microscope" or "person microscope".

# Layout
I wanted to make something I could play on my Surface Duo, so the layout is in two equal columns.

# toki pona
[toki pona](https://en.wikipedia.org/wiki/Toki_Pona) is a tiny constructed language based on Taoist principles of simplicity. It only has 137 basic words.  It's kind of like 1984's New Speak but with the exact opposite goal.

# 13K Notes
I went back and forth on some features.  Originally I started with a top down section where the user had to walk around to collect the clues, but it didn't seem to add anything fun.

Also, originally the clue list was pruned of any clues that could be removed without effecting the solution, but it wasn't fun. It made every board very challenging and you couldn't really play along as the clues arrive.  Also, thematically it's more like an investigation that you'd turn up some information you'd already figured out.

# Categories
* Desktop
* Mobile
* Web Monetization
* Decentralized (NEAR)
