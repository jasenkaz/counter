const Counter = {
  rootElement = "#app",
  count = 0;

  start function(){
    this.cacheDOM();
    this.bindEvents();
    this.render();
  };

  cacheDOM: function(){
    this.root = document.querySelector(this.rootElement);
    this.incBtn = this.root.querySelector('.increment');
    this.decBtn = this.root.querySelector('.decrement');
    this.amount = this.root.querySelector('.amount');
    this.output = this.root.querySelector('.output');
  };

  bindEvents: function(){
    this.incBtn.addEventListener('click', () => {
      console.dir(this.amount);
      this.count += parseInt(this.amount.value);
      this.render();
    });
    this.decBtn.addEventListener('click', () => {
      this.count -= parseInt(this.amount.value);
      this.render();
    });
  };

  render: function(){
    this.output.textContent = this.count;
}
};

Counter.start();
