import  { Component, Prop, EventEmitter, Event, h } from  '@stencil/core';

@Component({
   tag: 'my-button-component',
   styleUrl: 'my-component.css',
   shadow: true
})
export  class  MyComponent  {
  @Prop() text: string = "";
  @Prop() icon: string = "";
  @Prop() bgColor: 'red' | 'black' | 'white';
  @Prop() textColor: 'red' | 'black' | 'white';

  @Event() btnClicked: EventEmitter;

  emitValue() {
    this.btnClicked.emit({ value: 1 });
  }

   render() {
    return [
      <button type="button" class={`bg-${this.bgColor} text-${this.textColor} btn-primary`} onClick={() => this.emitValue()}>{this.text}<span class="icon">{this.icon}</span></button>
    ];
   }
}
