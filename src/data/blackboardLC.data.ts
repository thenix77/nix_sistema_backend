import { dbSinfo, dbBlackBoard } from "../database/conection";
import { ILcNrc } from "../models/listacruzada.model";

class Data {
  private dbSinfo = dbSinfo();
  private dbBlackBoard = dbBlackBoard();
  private lcnrc: ILcNrc[] = [];

  async index(): Promise<ILcNrc[]> {
    const ssql =
      "select distinct cm1.course_Id padre,cm2.course_Id hijo " +
      "from course_users cu " +
      "left join course_main cm1 on cm1.pk1=crsmain_pk1 " +
      "left join course_main cm2 on cm2.pk1=child_crsmain_pk1 " +
      "where child_crsmain_pk1 is not null " +
      "order by padre, hijo";

    const { rows } = await this.dbBlackBoard.query(ssql);
    this.lcnrc = rows;

    return this.lcnrc;
  }

  async findLC(LC: string) {
    this.lcnrc = await this.index();

    const rst: ILcNrc[] = this.lcnrc.filter((data) =>
      data.padre.includes(LC.toUpperCase())
    );
    return rst;
  }

  async findNRC(NRC: string) {
    this.lcnrc = await this.index();

    const rst: ILcNrc[] = this.lcnrc.filter((data) =>
      data.hijo.includes(NRC.toUpperCase())
    );
    console.log(rst);
    return rst;
  }
  async find(FIND: string) {
    this.lcnrc = await this.index();

    const rst: ILcNrc[] = this.lcnrc.filter(
      (data) =>
        data.hijo.includes(FIND.toUpperCase()) ||
        data.padre.includes(FIND.toUpperCase())
    );

    return rst;
  }
}

const data = new Data();
export default data;
