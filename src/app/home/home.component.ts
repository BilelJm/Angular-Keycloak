import { Component, OnInit } from '@angular/core';
import { TestService } from '../service/Test-servie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  testData: string = '';

  constructor(private testService: TestService) {}

  ngOnInit(): void {
    this.testService.getTestData().subscribe(
      (data) => {
        this.testData = data;
      },
      (error) => {
        console.error('Error fetching test data:', error);
      }
    );
  }

}
