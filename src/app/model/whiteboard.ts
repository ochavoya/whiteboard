interface WhiteBoardHeadline {
  id: number;
  title: string;
  detail: string;
}

interface WhiteBoardColumn {
  id: number;
  whiteBoardId: number;
  icon: string;
  title: string;
  detail: string;
  sections: WhiteBoardSection[];
}

interface WhiteBoardSection {
  id: number;
  columnId: number;
  title: string;
  detail: string;
  items: WhiteBoardItem[];
}

interface WhiteBoardItem {
  id: number;
  sectionId: number;
  title: string;
  detail: string;
  createdOn: Date;
  expiresOn: Date;
  active: boolean;
}

interface ItemDTO {
  sectionId: number;
  title: string;
  detail: string;
  createdOn: Date;
  expiresOn: Date;
}
