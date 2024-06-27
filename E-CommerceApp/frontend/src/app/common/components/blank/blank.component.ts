import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.css'
})
export class BlankComponent {
 @Input() title: string =""; //Input yazılma sebebi dışarıdan veri almak için 
 @Input() sectionTitle: string = "";
}

