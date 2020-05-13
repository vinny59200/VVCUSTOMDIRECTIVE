import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '.vvdirective'
})
export class VVdirectiveDirective {

  constructor(private elRef: ElementRef) {}
	ngOnInit() {
    	this.elRef.nativeElement.style.backgroundColor = "gray";
      this.elRef.nativeElement.style.color = "navy";
      console.log("vv directive works!!")
  	}
}
