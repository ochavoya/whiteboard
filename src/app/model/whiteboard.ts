export interface WhiteBoardHeadline {
  id: number;
  title: string;
  detail: string;
}

export interface WhiteBoardColumn {
  id: number;
  whiteBoardId: number;
  icon: string;
  title: string;
  detail: string;
  sections: WhiteBoardSection[];
}

export interface WhiteBoardSection {
  id: number;
  columnId: number;
  title: string;
  detail: string;
  items: WhiteBoardItem[];
}

export interface WhiteBoardItem {
  boardId: number;
  sectionId: number;
  title: string;
  detail: string;
  expiresOn: Date;
}

export interface ItemDTO {
  token: string;
  boardId: number;
  sectionId: number;
  title: string;
  detail: string;
  expiresOn: Date;
}

export interface RestMessage<T> {
  success: boolean;
  data: T;
}

export interface RegistrationDTO {
  name: string;
  username: string;
  password: string;
}

export interface LoginDTO {
  username: string;
  password: string;
}