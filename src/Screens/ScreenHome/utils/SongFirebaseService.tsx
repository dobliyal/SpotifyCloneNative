import { Either } from 'fp-ts/lib/Either';
import { SongEntity } from './SongEntity';
import { SongModel } from './SongModel'; 
import { getFirestore, collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

export abstract class SongFirebaseService {
  abstract getNewSongs(): Promise<Either<string, SongEntity[]>>;
}
