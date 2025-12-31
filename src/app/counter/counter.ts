import { Component, signal, Signal, computed, input, Input, Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
  standalone: true
})
export default class Counter {
  title = "counter"

  count = signal(0);
  doubleCount:Signal<number> = computed(() => this.count()*2);
  
  increment(){
    this.count.set(this.count()+1);
  }

  decrement(){
    if(this.count() > 0){
      this.count.set(this.count()-1);
    }
  }

  readonly occupation = input<string>();
  // @Input() occupation = '';
  @Input({alias:"firstname"}) name = '';
  @Input() age = 0;

  @Output() childData = new EventEmitter<string>()
}
