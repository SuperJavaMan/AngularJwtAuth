import { Component, OnInit } from '@angular/core';
import {Note} from '../note';
import {NoteService} from '../note.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-delete-note',
  templateUrl: './delete-note.component.html',
  styleUrls: ['./delete-note.component.css']
})
export class DeleteNoteComponent implements OnInit {
  note: Note = new Note();
  id: number;
  message = 'Are sure that you wanna to delete the note?';
  constructor(private noteService: NoteService,
              private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
    this.noteService.getNoteById(this.id)
                    .subscribe(note => this.note = note);
  }

  ngOnInit() {
  }
  deleteNote() {
    console.log(this.id);
    this.noteService.deleteNote(this.id).subscribe();
    this.message = 'Note was deleted!';
  }
}
