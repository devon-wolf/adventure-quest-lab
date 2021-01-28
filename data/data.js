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
		Recognizing the machine as a potent religious symbol from the Before Times, you fall to your knees and bow forward in reverence. The silicon gods smile upon you, and you feel refreshed. You gain 20 hp.
		`,
        hp: 20,
        gold: 0
    }]
};

const door = {
    id: 'door',
    title: 'A Glowing Door',
    description: `
	Something about a door. It's glowing, apparently.
	`,
    choices: [{
        id: 'knock',
        description: 'Knock politely',
        result: `
		No one answers, but you are terribly polite and wouldn't dream of entering uninvited. You continue to wait in the lab indefinitely, suffering 20 hp of malnutrition, dehydration, and boredom.
		`,
        hp: -20,
        gold: 0
    },
    {
        id: 'open',
        description: 'Turn the knob and open the door',
        result: `
		DING DING DING TREASURE - 300 gold is yours, but something smells... weird. You lose 10 hp to mysterious forces.
		`,
        hp: -10,
        gold: 300
    },
    {
        id: 'kick',
        description: 'Kick the thing down',
        result: `
		You would have been heir to a grand treasure, but the door you damaged was worth more than the room's abundant riches. After all the math is done, you lose 5 gold.
		`,
        hp: 0,
        gold: -5
    }]
};

const quests = [machine, door];
export default quests;