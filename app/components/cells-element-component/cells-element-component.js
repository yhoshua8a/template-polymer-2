
(function CellsElementDefinition(){

  'use strict';


  class CellsElementComponent extends Polymer.Element {
    static get is() { return "cells-element-component"; }

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
  customElements.define(CellsElementComponent.is, CellsElementComponent);

})();
