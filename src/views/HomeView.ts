import { LitElement, html, css } from "lit";
import '../components/PagesHeader';

class HomeView extends LitElement { 
    static styles = css``;
    render() {
        return html`
            <div id="app" class="tw-w-[100dvw] tw-h-[100dvh]">
                <pages-header></pages-header>
            </div>
        `;
    }
}

customElements.define("home-view", HomeView);
export default HomeView;