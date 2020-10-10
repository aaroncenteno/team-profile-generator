const generateManager = Manager => {
    return `
     <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${Manager.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${Manager.role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
                <li class="list-group-item">Office number: ${Manager.officeNumber}</li>
            </ul>
        </div>
    </div>`
}

const generateEngineers = engineersArr => {
    return `
    ${engineersArr
    .map(({ name, id, email, github, role }) => {
        return `
        <div class="card shadow m-2 col-3">
            <div class="card-header bg-primary ml-0 mt-1 rounded">
                <h2 class= "card-title">${name}</h2>
                <h5 class="card-text"><i class="fas fa-cogs"></i>&nbsp;${role}</h5>
            </div>
            <div class="card-body bg-light my-2">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://www.github.com/${github}" target="_blank">${github}</a></li>
                </ul>
            </div>
        </div>
        `;
    })
    .join('')}
    `}