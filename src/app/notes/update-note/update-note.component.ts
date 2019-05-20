import { Component, OnInit } from '@angular/core';
import {Note} from '../note';
import {NoteService} from '../note.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit {
  note: Note = new Note();
  id: number;
  message;
  constructor(private noteService: NoteService, private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
    this.noteService.getNoteById(this.id).subscribe(note => this.note = note);
  }

  ngOnInit() {
    this.message = null;
  }

  updateNote() {
    if (this.note.title !== '' && this.note.body !== '') {
      this.noteService.updateNote(this.note, this.id).subscribe();
      this.message = 'Updated succesfull!';
    } else {
      this.message = 'Fields Title or Body can not be empty!';
    }
  }
}
