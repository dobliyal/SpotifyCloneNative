//import firestore from '@react-native-firebase/firestore';
import { Timestamp } from 'firebase/firestore';

export class SongEntity {
  title: string;
  artist: string;
  duration: number;
  releaseDate:Timestamp;
  isFavorite: boolean;
  songId: string;

  constructor({
    title,
    artist,
    duration,
    releaseDate,
    isFavorite,
    songId,
  }: {
    title: string;
    artist: string;
    duration: number;
    releaseDate: Timestamp;
    isFavorite: boolean;
    songId: string;
  }) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.releaseDate = releaseDate;
    this.isFavorite = isFavorite;
    this.songId = songId;
  }
}
