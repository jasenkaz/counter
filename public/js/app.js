const Counter = {
  rootElement: '#app',
  count: 0,
  start: function(){
    this.cacheDOM();
    this.bindEvents();
    this.render();
  },
  cacheDOM: function(){
    this.root = document.querySelector(this.rootElement);
    this.incBtn = this.root.querySelector('.increment');
    this.decBtn = this.root.querySelector('.decrement');
    this.amount = this.root.querySelector('.amount');
    this.output = this.root.querySelector('.output');
  },
  bindEvents: function(){
    //only click events and only on the incBtn
    this.incBtn.addEventListener('click', () => {
      console.dir(this.amount);
      // this.count += 1;
      // this.count += Number(this.amount.value); //way one
      // this.count += parseFloat(this.amount.value); //way two -> similar to Number
      this.count += parseInt(this.amount.value);
      // this.count += +this.amount.value;
      this.render();
    });
    this.decBtn.addEventListener('click', () => {
      this.count -= parseInt(this.amount.value);
      this.render();
    });
  },
  render: function(){
    this.output.textContent = this.count;
  }
};
Counter.start();
