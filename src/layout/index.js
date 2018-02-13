let path = require('path')
export default class Layout{
  render(){
      let html = require("html-loader!./layout.html");
      document.body.innerHTML = html;
  }
}
