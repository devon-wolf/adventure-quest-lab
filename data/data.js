const machine = {
    id: 'machine',
    title: 'An Ancient Machine',
    description: `
	One of the ancient machines appears to be on, emitting a soft, low whirr from the corner.
	`,
    choices: [{
        id: 'smash',
        description: 'Smash the thing',
        result: `
		The thing gets smashed, but you break your hand. You lose 10 hp.
		`,
        hp: -10,
        gold: 0
    },
    {
        id: 'hack',
        description: 'Hack the mainframe',
        result: `
		You crack your knuckles and get down to business, but you never learned how to type. You do, however, see a document-like icon on the desktop through the burned out lines of the CRT monitor. You blindly print out the file, not knowing its contents. When the soothing chugga-chug of the dot matrix printer has stopped, you examine your haul - it's a coupon to Pizza Hut, worth approximately 5 gold. Sweet.
		`,
        hp: 0,
        gold: 5
    },
    {
        id: 'pray',
        description: 'Fall prostrate before the ancient idol',
        result: `
		Recognizing the machine for as a potent religious symbol from the Before Times, you fall to your knees and bow forward in reverence. The silicon gods smile upon you, and you feel refreshed. You gain 20 hp.
		`,
        hp: 20,
        gold: 0
    }]
};

const quests = [machine];
export default quests;