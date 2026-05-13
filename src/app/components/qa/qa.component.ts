import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import AccordionComponent from '../../shared/accordian/accordian.component';
import { AccordionItem } from '../../models/accordian-item.model';
import { SearchService } from '../../shared/services/search.service';

@Component({
  selector: 'questions-answer',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './qa.component.html'
})
export class QuestionsAnswers implements OnInit {
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);
  private searchService = inject(SearchService);

  // 1. Data Signals
  private rawData = signal<AccordionItem[]>([]);
  
  // 2. Search Signal (Converts Observable to Signal automatically)
  private searchTerm = toSignal(this.searchService.searchTerm$, { initialValue: '' });

  // 3. Computed Filtering (Purely reactive, no detectChanges needed!)
  filteredData = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const data = this.rawData();
    if (!term) return data;
    return data.filter(item => 
      item.question.toLowerCase().includes(term) || 
      item.answer?.includes(term)
    );
  });

  ngOnInit(): void {
    // Watch the URL category (:category)
    this.route.params.subscribe(params => {
      const category = params['category'] || 'angular';
      this.loadData(category);
    });
  }

  private loadData(category: string) {
    // Maps "angular" to "angular/qa.data.json"
    const formattedCategory = category.charAt(0) + category.slice(1);
    const s3Url = `https://s3.ap-south-1.amazonaws.com/pramod.click/data/${formattedCategory}/qa.data.json`;

    this.http.get<AccordionItem[]>(s3Url).subscribe({
      next: (res: AccordionItem[]) => this.rawData.set(res), // Add : AccordionItem[]
      error: (err: any) => console.error('S3 Fetch Error:', err) // Add : any
    });
  }
}