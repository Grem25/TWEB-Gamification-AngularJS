# Ang-Generator
During this project we had to build an application with a structure of client-server side.

If you want to launch our client locally you can git clone our repository and then you need to have a few tools installed such as NodeJS mainly.

```
git clone https://github.com/Grem25/TWEB-Gamification-AngularJS
```
once you are inside and you have all the tools ready. You can sart the client with this command.
```
grunt dev
```
To be able to really test it you will need to run the server to be able to have the requests going and coming.

you want to play you can have the link of the game at this following address

https://grem25.github.io/TWEB-Gamification-AngularJS/#!/dashboard

The link for the server repository is here
https://github.com/CoolPolishGuy/TWEB-projet3-server

## Rules of the game

You can find the rules on dashboard once you login to our website.

But here some specifications that are explained.

You can choose to play with some player, by adding him through the "new username" option.
If you want to generate a set a people you can send this request:
https://fierce-sierra-52540.herokuapp.com/init

or to clear the data 
https://fierce-sierra-52540.herokuapp.com/clearData

The fights are random, you don't know who you are fight but you can see some statistics of yours results.

Our alogorithm take to account if you have higher level you will then have more chance to win
For example if you we have user_1 is level 3 and user_2 is level 6 then user_2 will have double chance of winning.

## Authors
Jérémie Zanone & Wojciech Myszkorowski
