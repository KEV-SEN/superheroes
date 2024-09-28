// URL del archivo JSON de superhéroes
const jsonUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

// Función para cargar y mostrar los datos
async function loadSuperheroes() {
    try {
        const response = await fetch(jsonUrl);
        const data = await response.json();
        displaySuperheroes(data);
    } catch (error) {
        console.error("Error al cargar el JSON:", error);
    }
}

// Función para mostrar los datos en el HTML
function displaySuperheroes(data) {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Limpiar el contenido anterior

    const squadName = document.createElement('h2');
    squadName.textContent = `Nombre del Escuadrón: ${data.squadName}`;
    content.appendChild(squadName);

    const homeTown = document.createElement('p');
    homeTown.textContent = `Ciudad: ${data.homeTown} (Formado en ${data.formed})`;
    content.appendChild(homeTown);

    const membersTitle = document.createElement('h3');
    membersTitle.textContent = 'Miembros:';
    content.appendChild(membersTitle);

    const membersList = document.createElement('div');
    membersList.classList.add('members-list');
    
    data.members.forEach((member, index) => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        
        // Añadir la imagen correspondiente
        const image = document.createElement('img');
        image.src = `Imagenes/imagen${index + 1}.jpg`; 
        image.alt = `${member.name}`;
        image.classList.add('member-image');
        memberCard.appendChild(image);
        
        const name = document.createElement('h4');
        name.textContent = member.name;
        memberCard.appendChild(name);
        
        const age = document.createElement('p');
        age.textContent = `Edad: ${member.age}`;
        memberCard.appendChild(age);
        
        const secretIdentity = document.createElement('p');
        secretIdentity.textContent = `Identidad Secreta: ${member.secretIdentity}`;
        memberCard.appendChild(secretIdentity);
        
        const powers = document.createElement('p');
        powers.textContent = `Poderes: ${member.powers.join(', ')}`;
        memberCard.appendChild(powers);
        
        membersList.appendChild(memberCard);
    });

    content.appendChild(membersList);
}

// Cargar los superhéroes al iniciar la página
loadSuperheroes();
