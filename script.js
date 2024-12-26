// Get data from players.xml file:
// This is how the data is structured
{/* <topFootballers>
  <player>
    <name>Vinicius Junior</name>
    <club>Real Madrid</club>
    <country>Brazil</country>
    <image>https://example.com/vinicius-junior.jpg</image>
    <flagColor>green</flagColor>
    <description>Vinicius Junior is a talented winger known for his speed and dribbling skills.</description>
    <age>23</age>
  </player> */}

//   Use Fetch to retrieve players
fetch('players.xml')
   .then(response => response.text())
   .then(xml => {
        // Parse the XML document
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xml, 'text/xml');

        const players = xmlDoc.querySelectorAll('player')

        for (const player of players) {
            const name = player.querySelector('name').textContent;
            const club = player.querySelector('club').textContent;
            const country = player.querySelector('country').textContent;
            const image = player.querySelector('image').textContent;
            const flagColor = player.querySelector('flagColor').textContent;
            const description = player.querySelector('description').textContent;
            const age = player.querySelector('age').textContent;

            document.getElementById('display-players').innerHTML  +=
            `<div class="player-card">
                <img src="${image}" alt="${name}">
                <h3>${name}</h3>
                <p>${club}</p>
                <p>${country}</p>
                <p>Age: ${age}</p>
                <p style="color: ${flagColor}">Flag Color: ${flagColor}</p>
                <p>${description}</p>
                <button onclick="deletePlayer(this)">Delete</button>
                <button onclick="editPlayer(this)">Edit</button>
            `;
        }
        
   });