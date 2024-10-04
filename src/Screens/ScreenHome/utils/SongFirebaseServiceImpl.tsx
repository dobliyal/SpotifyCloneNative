import { SongFirebaseService } from './SongFirebaseService'; 
import { SongEntity } from './SongEntity'; 
import { SongModel } from './SongModel'; 
import { getFirestore, collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { right, left, Either } from 'fp-ts/lib/Either'; 

export class SongFirebaseServiceImpl extends SongFirebaseService {
  async getNewSongs(): Promise<Either<string, SongEntity[]>> {
    try {
      const songs: SongEntity[] = [];
      const firestore = getFirestore();
      const songsRef = collection(firestore, 'Songs');
      const q = query(songsRef, orderBy('releaseDate', 'desc'), limit(3));
      const snapshot = await getDocs(q);

      snapshot.forEach((doc) => {
        const songModel = SongModel.fromJson(doc.data());
        songs.push(songModel.toEntity());
      });

      return right(songs);
    } catch (error) {
      console.error(error);
      return left('An error occurred, please try again.');
    }
  }
}
