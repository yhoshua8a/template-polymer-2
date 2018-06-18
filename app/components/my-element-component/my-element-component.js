
(function ElementDefinition(){

  'use strict';


  class ElementComponent extends Polymer.Element {
    static get is() { return "my-element-component"; }

    static get properties(){
      return {
        default:{type:String,
          value:"default"}
      }
    }

    connectedCallback(){
      super.connectedCallback();
    }

  }
  // Register the new element with the browser
  customElements.define(ElementComponent.is, ElementComponent);

})();
