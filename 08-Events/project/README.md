# The project is to Use start button to change background color randomly, and stop button to stop this action.

## Steps

# Generating Random Colors in function so that to utilize that function in click-eventListener on start and stop Buttons

### generating random colors in hex-values

### generating random numbers

Math.random() gives random numbers between 0 and 1(1 exclusive), multiplying it by a whole number generates decimal numbers between 0 and that multiplier, so Math.floor() method will round the generated number to lower whole number.

Math.floor(Math.random() \* 16)

<!-- putting this code in color to get hex-values -->

color += hex[Math.floor(Math.random() * 16)];

 <!-- and iterating this code to get random hex-colors -->

for (let i = 0; i < 6; i++) {
color += hex[Math.floor(Math.random() * 16)];
}

  <!-- the function will return color -->

Now connecting this code to buttons through eventListeners
Declaring functions into variables and use their reference in eventListeners
startChangingBgColor,
stopChangingBgColor

apply setInterval()and clearInterval() on these functions respectively.

### checking corner-cases,

keeping intervalId in global scope,
declaring its value to null,
and setting if-condition on it.
