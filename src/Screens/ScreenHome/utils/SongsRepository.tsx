import { Either } from 'fp-ts/lib/Either'; 
import { SongEntity } from './SongEntity'; 

export abstract class SongsRepository {
  abstract getNewSongs(): Promise<Either<string, SongEntity[]>>;
}
