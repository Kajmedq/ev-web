/**
 * A simple component which enables the LaTeX renederer KaTeX. 
 * Place in the div in which math should be rendered.
 */

import { Component, ElementRef } from '@angular/core';

// Enables the use of the below function from the KaTeX auto renderer.
declare function renderMathInElement(param: any): any;

@Component({
  //standalone: true,
  selector: 'ev-katex',
  templateUrl: './katex.component.html',
  styleUrls: ['./katex.component.scss']
})
export class KatexComponent {
    constructor(private mathElement: ElementRef) {}

    ngAfterViewInit(): void {
        // The KaTeX auto renderer needs an element in which to render the math.
        // 'mathElement' is a reference to this component.
        renderMathInElement(this.mathElement.nativeElement.parentElement);
    }
}
