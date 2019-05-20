import { Component, OnInit } from '@angular/core';
import {NoteService} from '../note.service';
import {ActivatedRoute} from '@angular/router';
import {Note} from '../note';

@Component({
  selector: 'app-show-note',
  templateUrl: './show-note.component.html',
  styleUrls: ['./show-note.component.css']
})
export class ShowNoteComponent implements OnInit {
  id: number;
  note: Note;
  constructor(private noteService: NoteService, private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
    this.noteService.getNoteById(this.id).subscribe(note => this.note = note);
  }

  ngOnInit() {
  }

}
