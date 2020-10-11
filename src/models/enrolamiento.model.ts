export interface IEnrolamiento {
  batch_uid: string;
  user_id: string;
  firstname: string;
  lastname: string;
  student_id: string;
  email: string;
  course_id: string;
  sourcedid_id: string;
  role: string;
  row_status: string;
}

export interface ITerm {
  name: string;
  sourcedid_id: string;
  start_date: Date;
  end_date: Date;
}
