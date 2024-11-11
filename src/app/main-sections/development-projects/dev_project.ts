const PATH = "../../../../public/resources/images/";

export class DevProject {
  constructor(
    public title: string = "",
    public inProgress: boolean = true,
    public imgSrc: string = PATH + "icons/menu_icon.png",
    public description: string = "",
    public languages: string = "") {

  }
}

export class DevRepo {

}

