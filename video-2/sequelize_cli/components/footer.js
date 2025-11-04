class FooterAH extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <style>
        .app-footer {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          padding: 2rem;
          background: linear-gradient(135deg, #14532d, #32cd32); /* Verde oscuro a neón */
          color: white;
          margin-top: 2rem;
        }
        .footer-section h5 {
          color: #90ee90; /* verde claro */
          margin-bottom: 1rem;
          border-bottom: 1px solid #32cd32;
          padding-bottom: 0.5rem;
        }
        .footer-section ul {
          list-style: none;
          padding: 0;
        }
        .footer-section ul li {
          margin-bottom: 0.5rem;
        }
        .footer-section ul li a {
          color: #e0ffe0;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-section ul li a:hover {
          color: #adff2f;
        }
        .footer-bottom {
          grid-column: 1 / -1;
          text-align: center;
          padding-top: 1rem;
          border-top: 1px solid rgba(50, 205, 50, 0.3);
          color: #cfc;
          font-size: 0.9rem;
        }
        @media (max-width: 576px) {
          .app-footer {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      </style>
      <footer class="app-footer">
        <div class="footer-section">
          <h5>Clase N°6</h5>
          <p>Excel</p>
        </div>

        <div class="footer-section">
          <h5>Contacto</h5>
          <ul>
            <li>Nombre: Alan Hidalgo</li>
            <li>Cédula: 34668701</li>
            <li>Universidad Nueva Esparta</li>
          </ul>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 Clase N°7. Universidad Nueva Esparta.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define("footer-ah", FooterAH);
module.exports = FooterAH;
