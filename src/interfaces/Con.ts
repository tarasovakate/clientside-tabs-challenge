interface Content {
  id:string
  type:string
  sectionId:string
  sectionName:string
  webPublicationDate:string
  webTitle:string
  webUrl:string
  apiUrl:string
  isHosted:false
  pillarId:string
  pillarName:string
}

export  type ContentList = Content[]