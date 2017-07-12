import { Component, Input, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css'],
  providers: [AlbumService]
})
export class EditAlbumComponent implements OnInit {
  @Input() selectedAlbum;

  editAlbumButton: boolean = true;
  editAlbumForm: boolean = false;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

  beginUpdatingAlbum(albumToUpdate){
    this.albumService.updateAlbum(albumToUpdate);
  }

  beginDeletingAlbum(albumToDelete){
    if(confirm("Are you sure you want to delete this item form the inventory?")){
      this.albumService.deleteAlbum(albumToDelete);
      this.editAlbumButton = true;
    }
  }

  finishEditingAlbum(){
    this.editAlbumButton = true;
    this.editAlbumForm = false;
  }

  editThisAlbum(){
    this.editAlbumForm = true;
    this.editAlbumButton = false;
  }

}
