import { Component } from '@angular/core';
import { Directive, ElementRef, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-draggable-directive',
  templateUrl: './draggable-directive.component.html',
  styleUrls: ['./draggable-directive.component.css'],
})
export class DraggableDirectiveComponent {
  private startX = 0;
  private startY = 0;
  private x = 0;
  private y = 0;

  constructor(
    private element: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.element.nativeElement.style.position = 'relative';
    this.element.nativeElement.style.border = '1px solid red';
    this.element.nativeElement.style.backgroundColor = 'lightgrey';
    this.element.nativeElement.style.cursor = 'pointer';
    this.element.nativeElement.style.display = 'block';
    this.element.nativeElement.style.width = '65px';
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    event.preventDefault();
    this.startX = event.screenX - this.x;
    this.startY = event.screenY - this.y;
    this.document.addEventListener('mousemove', this.mousemove);
    this.document.addEventListener('mouseup', this.mouseup);
  }

  private mousemove = (event: MouseEvent): void => {
    this.y = event.screenY - this.startY;
    this.x = event.screenX - this.startX;
    this.element.nativeElement.style.top = `${this.y}px`;
    this.element.nativeElement.style.left = `${this.x}px`;
  };

  private mouseup = (): void => {
    this.document.removeEventListener('mousemove', this.mousemove);
    this.document.removeEventListener('mouseup', this.mouseup);
  };
}
