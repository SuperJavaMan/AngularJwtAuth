import { Component, OnInit } from '@angular/core';
import {NoteService} from '../note.service';
import {Note} from '../note';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  note: Note = new Note();
  message;
  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }
  addNote() {
  this.noteService.addNote(this.note).subscribe();
  this.message = 'Added succesfuly!';
  }
}
