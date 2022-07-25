import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-panel',
  templateUrl: './dashboard-panel.component.html',
  styleUrls: ['./dashboard-panel.component.css']
})
export class DashboardPanelComponent implements OnInit, OnChanges {

  selezionato = '';

  @Input() selezioneEsterna: boolean = false;
  @Output() cambiaSelezioneEsterna: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  changeColor(selezionato: string): void {
    this.cambiaSelezioneEsterna.emit(false);
    this.selezionato = selezionato;
  }

  ngOnChanges(): void {
    if (this.selezioneEsterna === true) this.selezionato = '';
  }

  ngOnInit(): void {
  }

}
