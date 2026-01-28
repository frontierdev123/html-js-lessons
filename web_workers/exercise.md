
Task: Build a Number Validator
Create a web worker that validates whether numbers are prime, even, or odd without freezing the UI.
Requirements:

Main thread (HTML/JS):

Input field where user types a number
Button to "Check Number"
Display area for results
Keep UI responsive while calculation happens


Worker thread:

Receive a number from main thread
Check if it's prime (brute force is fine)
Check if it's even or odd
Send results back to main thread


Results to display:

The number
Whether it's prime
Whether it's even or odd
Time it took to calculate



Example Output:
Number: 97
Prime: Yes
Type: Odd
Time: 0.5ms
Constraints:

Don't freeze the UI (that's the whole point!)
Test with large numbers (10,000,000+)
Handle errors if user enters non-numbers

Bonus Challenges:

Add a "Cancel" button to terminate the worker
Check multiple numbers in sequence
Display a loading spinner while calculating


This teaches you to: create workers, post/receive messages, handle state, and solve real performance problems.
