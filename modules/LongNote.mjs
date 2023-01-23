import Note from './Note.mjs';

class LongNote extends Note {
  constructor(x=0, t=0, endTime=1000){
    super(x, t);
    this.t$ = endTime; // using end anchor notation from regex for "end time"
  }
  setEnd(t){
    this.t$ = t;
  }
  getEnd(){
    return this.t$;
  }
  clone(){
    return new LongNote(this.x, this.y, this.t$);
  }
}

export default LongNote;
export { LongNote };
