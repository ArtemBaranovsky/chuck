const template = document.createElement('template');
template.innerHTML = `
<style>
<style>
  .nav-panel {
    display: none;
  }
</style>
<div class="btn-group nav-panel">
  <ul></ul>
</div>`;

class NavPanel extends HTMLElement{
  constructor(){
    super();
    this._categories = null;
    this.attachShadow({ mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    let parent = document.querySelector('ul');
    // this.shadowRoot.querySelector('.nav-panel').category = this.getAttribute('categories');

    // let categories = this.getAttribute('categories');
    // this.shadowRoot.querySelector('.nav-panel').categories = categories;
    // console.log(this.shadowRoot.querySelector('.nav-panel'));
    // console.log(categories);

    // categories.forEach((category) => {
    //   let li = document.createElement('li');
    //   li.innerHTML = `<button type="button" className="navbtn">}</button>`;
    //   this.shadowRoot.querySelector('button').innerText = category;
    //   parent.appendChild(li);
    // })
  }

  connectedCallback(){
    if (!this.rendered) {
      let categories = this.getAttribute('categories');
      this.render();
      this.rendered = true;
    }
  }

  static get observedAttributes() { // (3)
    return ['categories'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this._categories = newValue;
    this.render();
  }

  get categories() {
    return this._categories;
  }
  set categories(v) {
    this.setAttribute("categories", v);
  }

  render(){
    this.ul;
  }
}

window.customElements.define('nav-panel', NavPanel);
