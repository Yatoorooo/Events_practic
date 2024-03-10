'use strict';
   
    const emojis = ['😄', '😊', '😃', '😁', '😆'];
    const votes = Array(emojis.length).fill(0);

    function displayResults() {
        const votingResults = document.getElementById('votingResults');
        votingResults.innerHTML = '';
        emojis.forEach((emoji, index) => {
            const emojiElement = document.createElement('span');
            emojiElement.textContent = emoji + ' ';
            emojiElement.classList.add('smiley');
            emojiElement.addEventListener('click', () => {
                votes[index]++;
                displayResults();
            });
            const votesElement = document.createElement('span');
            votesElement.textContent = votes[index];
            votingResults.appendChild(emojiElement);
            votingResults.appendChild(votesElement);
            votingResults.appendChild(document.createElement('br'));
        });
    }

    displayResults();