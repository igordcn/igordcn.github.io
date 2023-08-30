class FlipCardComponent extends HTMLElement {

    connectedCallback() {
        let title = this.getAttribute("title")
        let text = this.getAttribute("text")
        let image = this.getAttribute("image")
        this.innerHTML = `
        <div id="flip-card">
            <div class="flip-card">
                <div class="inner">
                    <div class="front">
                        <img src="${image}" />
                        <p>${title}</p>
                    </div>
                    <div class="back">
                        <p>${text}</p>
                    </div>
                </div>
            </div>
        </div>`
    }

}
customElements.define('flip-card', FlipCardComponent);