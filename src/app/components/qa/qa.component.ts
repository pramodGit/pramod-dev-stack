import { ChangeDetectorRef, Component } from '@angular/core';
import AccordionComponent from '../../shared/accordian/accordian.component';
import { Data } from './qa.data';
import { AccordionItem } from '../../models/accordian-item.model';
import { SearchService } from '../../shared/services/search.service';

@Component({
  selector: 'questions-answer',
  imports: [AccordionComponent],
  templateUrl: './qa.component.html'
})
export class QuestionsAnswers {
  data:AccordionItem[] = Data;
  activeIndex: number | null = null;
  filteredData = [...this.data];
  constructor(private cdr: ChangeDetectorRef, private searchService: SearchService) {}
  handleItemClick(index: number) {
    // Toggle same item, otherwise open selected
    this.activeIndex = this.activeIndex === index ? null : index;
  }
  ngOnInit(): void {
    console.log("ngOnInit QA data ", this.data.length);
    this.searchService.searchTerm$.subscribe(term => {
      const lower = term.toLowerCase();
      this.filteredData = this.data.filter(item =>
        item.question.toLowerCase().includes(lower)
      );
      this.cdr.detectChanges(); // ✅ manually trigger view update
    });
  }
}
