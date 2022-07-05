class Header extends HTMLElement {
    constructor(){
        super();
    }
// Declaration of a header extends
connectedCallback() {
    this.innerHTML = `
      <style>
        nav {
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color:  #23272f;
        }

        ul {
          padding: 0;
        }
        
        a {
          font-weight: 700;
          margin: 0 25px;
          color: #fff;
          text-decoration: none;
        }
        
        a:hover {
          padding-bottom: 5px;
          box-shadow: inset 0 -2px 0 0 #fff;
        }
        .flex-container {
            
            display: flex;
            flex-flow: row wrap;
            color: #f2ae36;
          }
          .flex-container > div {
            background-color: #5ac9a6;
            width: 100px;
            margin: 20px;
            text-align: center;
            line-height: 40px;
            font-size: 24px;
            color: #362d45;
          }
          
          
      </style>
      <header>
        <nav>
        <div class="flex-container">
          <div><a href="index.html">Index</a></div>
          </div>
        </nav>
      </header>
    `;
  }
}


customElements.define('header-component', Header);
