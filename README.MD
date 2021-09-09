# BLANKS 🕵🏻‍♂️
> Fill in the empty spaces.
> Reduce the space between us.

Created for the [js13k](https://js13kgames.com/) competition 2021

# Gameplay
BLANKS 🕵🏻‍♂️  &nbsp; is a puzzle game in the style of the zebra puzzle.  The cases are randomly generated in the browser and get progressively more difficult. The player must read the clues to fill in the empty spaces and solve the case.

Periodically the player gets the 'case files' screen where they can choose the size of their next case or play one of the community cases submitted to the NEXT blockchain.

If you play with sound & solve the puzzle before 'possible solution', you hear '100%'.

#NEAR and Coil
If you are signed in with NEAR you can post to community boards
If you are signed in with Coil you can access case files from the main menu

# Theme
The theme of the competition was **SPACE**.
The game uses that theme by:
* Filling in the empty spaces in the board
* Completing the puzzle reduces the space between the characters
* Filling in the empty space in all the template strings
* There's no time limit to give you some space to think

# Why does it say "Woman Doctor" and "Man Astronaut"?
The voices are using the speechSynthesis library of the browser, used by screen readers. That's how the emojis are read by some of the voices in screen reader. Although I was able to remove the skin tone from the emoji before speechSynthesis to avoid the browser saying things like "Man Doctor with Medium Light Skin Tone" in those clues, because of how the emojis defined, removing the gender breaks the meaning in some cases.  For example, instead of "Woman Scientist", it would just say "microscope".

# Layout
I wanted to make something I could play on my Surface Duo, so the layout is in two equal columns

# toki pona
[toki pona](https://en.wikipedia.org/wiki/Toki_Pona) is a tiny constructed language based on Taoist principles of simplicity. It only has 137 basic words.  It's kind of like 1984's New Speak but with the exact opposite goal.

# 13K Notes
I went back and forth on some features.  Originally I started with a top down section where the user had to walk around to collect the clues, but it didn't seem to add anything fun. I also had a system where finishing without any mistakes earned a silver medal and before 'solution possible' earned a gold medal, but it didn't translate well to the muted version and wasn't as enjoyable as playing without a time limit.  

I found playing in the other languages more enjoyable than either of those features, but if you play with the sound on and thumbs-up before 'solution possible' it will add '100%' to the good job message.  So, you can still test yourself against that time limit.

# Categories
* Desktop
* Mobile
* Web Monitization
* Decentralized
