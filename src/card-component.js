export function createCard(pokemon) {
    const html = /*html*/ `
        <li>
            <h2>${pokemon.pokemon}</h2>
            <img src="${pokemon.url_image}">
            <p>
                HP: ${pokemon.hp}
                A: ${pokemon.attack}
                D: ${pokemon.defense}
            </p>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}