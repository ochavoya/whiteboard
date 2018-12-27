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
  id: number;
  sectionId: number;
  author: string;
  title: string;
  detail: string;
  createdOn: Date;
  expiresOn: Date;
  active: boolean;
}

export interface ItemDTO {
  sectionId: number;
  title: string;
  detail: string;
  createdOn: Date;
  expiresOn: Date;
}

export interface RegistrationDTO {
  username: string;
  password: string;
  email: string;
}

export interface LoginDTO {
  username: string;
  password: string;
}

export interface LoginResponse {
  username: string;
  success: boolean;
}
