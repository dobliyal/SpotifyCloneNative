import firestore from '@react-native-firebase/firestore';
import { SongEntity } from './SongEntity'; 
import { Timestamp } from 'firebase/firestore';

export class SongModel {
  title?: string;
  artist?: string;
  duration?: number;
  releaseDate?: Timestamp; 
  isFavorite?: boolean;
  songId?: string;

  constructor({
    title,
    artist,
    duration,
    releaseDate,
    isFavorite,
    songId,
  }: {
    title?: string;
    artist?: string;
    duration?: number;
    releaseDate?: Timestamp; 
    isFavorite?: boolean;
    songId?: string;
  }) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.releaseDate = releaseDate;
    this.isFavorite = isFavorite;
    this.songId = songId;
  }

  static fromJson(data: Record<string, any>): SongModel {
    return new SongModel({
      title: data.title,
      artist: data.artist,
      duration: data.duration,
      releaseDate: data.releaseDate,
      isFavorite: data.isFavorite,
      songId: data.songId,
    });
  }

  toEntity(): SongEntity {
    if (!this.title || !this.artist || !this.duration || !this.releaseDate || this.isFavorite === undefined || !this.songId) {
      throw new Error('Missing properties to convert to SongEntity');
    }

    return new SongEntity({
      title: this.title,
      artist: this.artist,
      duration: this.duration,
      releaseDate: this.releaseDate,
      isFavorite: this.isFavorite,
      songId: this.songId,
    });
  }
}
