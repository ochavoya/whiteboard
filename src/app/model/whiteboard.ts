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
  boardId: number;
  sectionId: number;
  title: string;
  detail: string;
  expiresOn: Date;
}

export interface ItemDTO {
  token: string;
  sectionId: number;
  title: string;
  detail: string;
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
  success: boolean;
  token: string;
}
