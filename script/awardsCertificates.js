const awardsCertificateslist = document.getElementById('awardsCertificatesList');

export function fetchawardsCertificates() {
    fetch('http://localhost:3000/api/awardsCertificates')
        .then(res => res.json())
        .then(data => renderawardsCertificates(data))
        .catch(err => {
            console.error("Failed to load Awards and Certificates data", err);
            alert("Failed to load Awards and Certificates schedule.");
        });
}

function renderawardsCertificates(data) {
    awardsCertificateslist.innerHTML = '';
    data.forEach(entry => {
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.flexDirection="column";
        div.style.justifyContent="center";
        div.style.alignItems = "center";
        div.style.gap = '10px';
        div.style.marginTop = '10px';
        div.className = 'awardscertificate-entry';
        div.innerHTML = `
        <img src="http://localhost:3000${entry.imagePath}" class="big-size" alt="Image" />
            <p class="text-decoration">${entry.description}</p>
        </div>
        `;
        awardsCertificateslist.prepend(div);
    });
}
