import { Component, OnInit } from '@angular/core';
import { BookMarkService } from '../services/bookmark.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

  bookmarkList: any = [];

  constructor(public bookmarkService: BookMarkService) { }

  ngOnInit(): void {
    this.loadBookmarks();
  }

  //Get Bookmarks
  loadBookmarks() {
    return this.bookmarkService.getBookmarks().subscribe((data: {}) => {
      this.bookmarkList = data;
      console.log(data);
    })
  }

  delBookmark(id) {
    return this.bookmarkService.deleteBookmark(id).subscribe(res => {
      console.log('deleted')
      document.location.reload()
    })
  }

}
