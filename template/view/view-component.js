
(function <%= className %>Definition(){

  'use strict';


  class <%= className %>Component extends Polymer.Element {
    static get is() { return "<%= tag %>-component"; }

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
  customElements.define(<%= className %>Component.is, <%= className %>Component);

})();
