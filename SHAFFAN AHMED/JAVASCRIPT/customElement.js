class UserCard extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute("name") || "User";
        const role = this.getAttribute("role") || "Student";

        this.innerHTML = `
            <div>
                <h2>${name}</h2>
                <p>${role}</p>
            </div>
        `;
    }
}

customElements.define("user-card", UserCard);
