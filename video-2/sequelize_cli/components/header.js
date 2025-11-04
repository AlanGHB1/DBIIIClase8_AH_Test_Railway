class HeaderAH extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <style>
        .app-header {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #32cd32, #14532d); /* Verde brillante a oscuro */
          color: white;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 1000;
        }
        .header-logo {
          justify-self: start;
          font-size: 1.8rem;
          font-weight: bold;
          background: linear-gradient(to right, #aaffaa, #32cd32); /* Degradado texto verde */
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        .header-nav {
          justify-self: center;
        }
        .header-user {
          justify-self: end;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        @media (max-width: 992px) {
          .app-header {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;
            justify-items: center;
            gap: 1rem;
            padding: 1rem;
          }
          .header-logo, .header-user {
            justify-self: center;
          }
          .header-nav .nav {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      </style>
      <header class="app-header">
        <div class="header-logo">Clase N°7</div>
        <div class="header-user">
          <button class="btn btn-sm btn-outline-light"></button>
        </div>
      </header>
    `;
  }
}

customElements.define("header-ah", HeaderAH);
module.exports = HeaderAH;
