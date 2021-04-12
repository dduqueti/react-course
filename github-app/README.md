# Summary

In this project we’re going to create a form. We wait for the user to type in a GitHub username, and when this happens we ask to the GitHub API the user’s public information, and we show a nice user card.

This project will teach you two new things compared to the previous one:

iterations in JSX
how to handle a simple form in React
how to perform network requests and update the state of the application when we get the information back

# Challenges

- Add a link to the person’s GitHub account in the card
- Add a button to remove a card from the list
- Search on every keypress rather than on the form submit event. If the current input box content matches a user, show it “on hover”, and only add it to the list when clicked (beware of API limits, 60 per hour on unauthenticated requests)
