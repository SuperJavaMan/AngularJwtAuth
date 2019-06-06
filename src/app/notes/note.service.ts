import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Note} from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  url = 'http://notes-service-jwt.herokuapp.com/api/notes/';
  constructor(private http: HttpClient) { }

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.url);
  }
  getNoteById(id: number): Observable<Note> {
    return this.http.get<Note>(this.url + id);
  }
  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.url, note);
  }
  updateNote(note: Note, id: number): Observable<Note> {
    return this.http.put<Note>(this.url + id, note);
  }
  deleteNote(id: number) {
    return this.http.delete(this.url + id);
  }
}
