import { LitElement, html, css } from "lit";

class PagesHeader extends LitElement { 
    static styles = css``;

    render() {
        return html`
            <div class="tw-w-full tw-h-full">你好</div>
        `;
    }
}

customElements.define("pages-header", PagesHeader);
export default PagesHeader;