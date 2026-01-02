import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-design',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-design.component.html',
  styleUrls: ['./upload-design.component.scss'],
})
export class UploadDesignComponent {
  preview: string | null = null;

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const file = event.dataTransfer?.files?.[0];
    if (file) this.processFile(file);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) this.processFile(file);
  }

  processFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => (this.preview = reader.result as string);
    reader.readAsDataURL(file);
  }
}