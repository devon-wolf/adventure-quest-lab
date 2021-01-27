# adventure-quest-lab

## Plan
### Pages
1. Home
- Form for user data
	- On submit:
		- store the data in localStorage
		- redirect user to map/list
2. Map/List
- `<ul>` (or whatever other element) to inject quests into
- in JavaScript:
	- grab quest data
	- if all quests have been completed, redirect to results page
	- loop through it
	- generate a title for each quest
		- if the quest has been completed, cross it out/otherwise indicate this and kill link
		- if the quest has NOT been completed, it should be a link to the correct quest
3. Quest
- header, image, paragraph, (or whatever elements the quest format requires) list of radio button inputs, submit button
- in JavaScript:
	- grab the ID of the quest from the URL
	- use the ID to `findByID` that quest in our quest data
	- use the quest data to populate the elements of the HTML
	- on submit:
		- calculate the user's new stats (HP and gold)
		- put the new stats in local storage
		- if user HP <= 0, redirect to results page
		- send the user back to the map
4. Results
- Place to display some custom ending, determined by the user's stats
- Button to play again
	- On submit:
		- clear localStorage
		- redirect to home page
