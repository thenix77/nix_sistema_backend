export interface IEnrolamiento {
    batch_uid:string
    role :string
    usuariovisible: string
    periodo: string
    course_id: string
    cursocerrado: string
    cursovisible:string
}


export interface IVBEnrolamiento{
  periodo: string
  id_alumno: string
  alumno: string
  nrc: string
  id_curso: string
  curso: string
  zonal: string
  campus: string
  deuda: string
  retirado: string
  calificable: string
  accesobb: string
  matriculable:string
}