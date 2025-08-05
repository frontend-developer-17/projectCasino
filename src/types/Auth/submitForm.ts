type Data ={
    email:string,
    userName:string,
    password:string
}

export type TOutletContext={
  formData:Data,
  handleChange:()=>void, 
  currentErr:Data,
  clearField:()=>void
}