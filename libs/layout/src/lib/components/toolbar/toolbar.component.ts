import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mtcd-net-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  title = 'Metacode';

  constructor() {}

  ngOnInit(): void {}
}
