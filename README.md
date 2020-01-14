# SnakeJS
Game Snake Javascript-vanilla

This game was created so I could familiarize with javascript.

To learn the game development and, more complex, features of javascript I have followed
a tutorial of how to make a Breakout Game in javascript.

The link for the YouTube video of the tutorial:
Intro to Game Development with JavaScript - Full Tutorial 
by freeCodeCamp.org

https://www.youtube.com/watch?v=3EMxBkqC4z0&t=2753s

# Modules Description

## Index

The index module basically start and support the main loop of the game.
It calls the game module, asks to update and to draw the new iterations of this module.

## Game

The game module holds and address some objects from the game, in a way that it is easier to use them.
It also manage gamestates, the general draw and update functions and ask for the input handler module.

## Input

It is a basic handler of keyboard inputs that uses event listener to process it.

## Snake

Snake handle the position and update of the various body objects.
That way, It can be used to manipulate and add bodies to the snake each time it sounds necessary in more easy way.

## Body

The body module handle the draw and update of all the bodies from the snake.
The head of the snake receive the directions from the input handler.
The rest of the body receive its new position from the old position of the previous body in the snake.

## Fruit

This module insert the fruit randomly in the field and detects when it is eaten to reposition it.
It, also, asks to the snake module to add a body in the snake.

## Collision Detection

This module only contains one function that checks for a collision and returns a Boolean.
It is a very simple function since the table has discrete positions.
The motivation to modularize this function is that it is used in excess on the other modules. 
