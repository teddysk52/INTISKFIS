let currentPage = 0;
let selectedMatches = { first: null, second: null };

function init() {
    loadPage(0);
    document.getElementById('totalPages').textContent = PAGES.length;
}

function loadPage(pageIndex) {
    if (pageIndex < 0 || pageIndex >= PAGES.length) return;
    
    const sheet = document.getElementById('sheet');
    sheet.classList.add('flipping');
    
    setTimeout(() => {
        currentPage = pageIndex;
        document.getElementById('content').innerHTML = PAGES[pageIndex].content;
        document.getElementById('currentPage').textContent = pageIndex + 1;
        
        updateButtons();
        sheet.classList.remove('flipping');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
}

function flipPage(direction) {
    const newPage = currentPage + direction;
    if (newPage >= 0 && newPage < PAGES.length) {
        loadPage(newPage);
    }
}

function updateButtons() {
    document.getElementById('prevBtn').disabled = currentPage === 0;
    document.getElementById('nextBtn').disabled = currentPage === PAGES.length - 1;
    
    if (currentPage === PAGES.length - 1) {
        document.getElementById('nextBtn').textContent = '✓ Hotovo!';
    } else {
        document.getElementById('nextBtn').textContent = 'Další →';
    }
}

function selectMatch(element) {
    if (!selectedMatches.first) {
        selectedMatches.first = element;
        element.classList.add('selected');
    } else if (!selectedMatches.second && element !== selectedMatches.first) {
        selectedMatches.second = element;
        element.classList.add('selected');
        checkMatch();
    }
}

function checkMatch() {
    setTimeout(() => {
        const first = selectedMatches.first;
        const second = selectedMatches.second;
        
        const firstId = first.getAttribute('data-id');
        const secondId = second.getAttribute('data-id');
        const firstPair = first.getAttribute('data-pair');
        const secondPair = second.getAttribute('data-pair');
        
        let isCorrect = (firstPair === secondId) || (secondPair === firstId);
        
        if (isCorrect) {
            first.classList.remove('selected');
            second.classList.remove('selected');
            first.classList.add('correct');
            second.classList.add('correct');
            first.onclick = null;
            second.onclick = null;
        } else {
            first.classList.remove('selected');
            second.classList.remove('selected');
        }
        
        selectedMatches = { first: null, second: null };
    }, 500);
}

document.addEventListener('DOMContentLoaded', init);
