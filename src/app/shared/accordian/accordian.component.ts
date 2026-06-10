import { AfterViewInit, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { AccordionItem } from '../../models/accordian-item.model';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordian.component.html',
  imports: [NgFor, NgIf, NgClass]
})
export default class AccordionComponent implements AfterViewInit {
  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}
  
  @Input() items: AccordionItem[] = [];
  openIndex: number | null = 0;

  sanitize(html: string | string[]): SafeHtml {
    if (Array.isArray(html)) {
      html = html.join('<br>'); // Optional: join array into HTML string
    }
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  ngAfterViewInit() {
    // Attach event delegation after view is initialized
    this.renderer.listen(this.el.nativeElement, 'click', (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a') {
        const href = target.getAttribute('href');
        if (href?.startsWith('/')) {
          event.preventDefault();
          this.router.navigateByUrl(href);
        }
      }
    });
  }
  isArray(val: any): val is string[] {
    return Array.isArray(val);
  }

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }

  isOpen(index: number): boolean {
    return this.openIndex === index;
  }

}
