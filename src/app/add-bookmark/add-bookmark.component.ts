import { Component, OnInit, NgZone, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BookMarkService } from '../services/bookmark.service';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {
  bookmarkForm: FormGroup;

  @Input() isOpen: boolean;

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public bookmarkService: BookMarkService
  ) { }

  ngOnInit(): void {
    this.addBookmark();
  }

  addBookmark() {
    this.bookmarkForm = this.fb.group({
      tabName: new FormControl,
      url: new FormControl
    })
  }

  submitBookmark() {
    this.bookmarkService.createBookmark(this.bookmarkForm.value).subscribe(res => {
      console.log('Added bookmark')
      this.ngZone.run(() => {
        document.location.reload()
      })
    });
  }

}
