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
    this.incBtn = document.querySelector('.increment');
    this.decBtn = document.querySelector('.decrement');
    this.output = document.querySelector('.output');
  };

  bindEvents: function(){
    this.incBtn.addEventListener('click', () => {
      this.count +=1;
      this.render();
    });
    this.decBtn.addEventListener('click', () => {
      this.count -=1;
      this.render();
    });
  };

  render: function(){
    this.output.textContent = this.count;
}
};

Counter.start();
