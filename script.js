const rhymes = [
    {
        title: 'Ring Around the Rosie',
        lines: {
            1: "Ring around the rosie",
            2: "A pocket full of posies",
            3: "Ashes! Ashes!",
            4: "We all fall down!"
        }
    }, 
    {
        title: "Hey Diddle Diddle",
        lines: {
            1: "Hey diddle diddle",
            2: "The cat and the fiddle",
            3: "The cow jumped over the moon",
            4: "The little dog laughed",
            5: "To see such sport",
            6: "And the dish ran away with the spoon."
        }
    },
    {
        title: 'Rock-a-bye-baby',
        lines: {
            1: "Rock a bye baby on the tree top",
            2: "When the wind blows the cradle will rock",
            3: "When the bough breaks the cradle will fall",
            4: "And down will come baby, cradle and all."
        }
    },
    {
        title: 'Jack Sprat',
        lines: {
            1: "Jack Sprat could eat no fat",
            2: "His wife could eat no lean",
            3: "And so between them both, you see",
            4: "They licked the platter clean."
        }
    },
    {
        title: 'Baa Baa Black Sheep',
        lines: {
            1: "Baa, baa, black sheep",
            2: "Have you any wool?",
            3: "Yes, sir, yes, sir",
            4: "Three bags full",
            5: "One for the master",
            6: "And one for the dame",
            7: "And none for the little boy",
            8: "Who lives in the lane."
        }
    }, 
    {
        title: 'London Bridge is Falling Down',
        lines: {
            1: "London Bridge is falling down",
            2: "Falling down, falling down",
            3: "London Bridge is falling down",
            4: "My fair lady"
        }
    },
    {
        title: 'As I was going to St Ives',
        lines: {
            1: "As I was going to St Ives",
            2: "I met a man with seven wives",
            3: "Each wife had seven sacks",
            4: "Each sack had seven cats",
            5: "Each cat had seven kits",
            6: "Kits, cats, sacks, and wives",
            7: "How many were there going to St Ives?"
        }
    }, 
    {
        title: "Pat-a-cake Pat-a-cake Baker's Man",
        lines: {
            1: "Pat-a-cake, pat-a-cake, baker's man",
            2: "Roll it, pat it, and mark it with a B",
            3: "Put it in the oven for Baby and me."
        }
    }, 
    {
        title: 'To Market! To Market!',
        lines: {
            1: "To market, to market, to buy a fat pig",
            2: "Home again, home again, jiggety-jig",
            3: "To market, to market, to buy a fat hog",
            4: "Home again, home again, jiggety-jog",
            5: "To market, to market to buy a plum cake",
            6: "Home again, home again, market is late",
            7: "To market, to market, to buy a plum bun",
            8: "Home again, home again, market is done."
        }
    },
    {
        title: 'Ding Dong Bell',
        lines: {
            1: "Ding dong bell",
            2: "Pussy’s in the well",
            3: "Who put her in?",
            4: "Little Johnny Green.",
            5: "Who pulled her out?",
            6: "Little Tommy Stout"
        }
    }
]


function getLineCount(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}


const rhymesLineCount = getLineCount(3, 9);

const blessingGenerator = (arr) => {
    let count = 1;
    let newRhyme = [];
    while (count <= rhymesLineCount) {
        console.log(count);
        const randomIndex = Math.floor(Math.random() * arr.length);
        console.log(randomIndex);
        console.log(arr[randomIndex].lines[count]);
       if(arr[randomIndex].lines[count] === undefined) {
            continue;
        } else {
            newRhyme.push(arr[randomIndex].lines[count]);
            console.log(newRhyme);
        } 
        count++;
    }
    console.log(newRhyme);
    return newRhyme.join(', ');

}

console.log(blessingGenerator(rhymes));

// Rhyming: https://api-ninjas.com/api/rhyme
// Meter: https://rednoise.org/rita/