import { Component, OnInit } from '@angular/core';
import {NoteService} from '../note.service';
import {Note} from '../note';

@Component({
  selector: 'app-home-note',
  templateUrl: './home-note.component.html',
  styleUrls: ['./home-note.component.css']
})
export class HomeNoteComponent implements OnInit {
  notes: Note[] = [];
  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.getAllNotes().subscribe(
      (notes: Note[]) => { this.notes = notes; });
  }
}
