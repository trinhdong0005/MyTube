export interface IVideoCard {
  title: string;
  file_code: string;
  single_img: string;
  uploaded: string;
  views: string;
  length: string;
}

export interface FileItem {
  single_img: string;
  splash_img: string;
  title: string;
  uploaded: string;
  length: string;
  canplay: number;
  download_url: string;
  public: string;
  file_code: string;
  fld_id: string;
  views: string;
}

export interface FileListResponse {
  files: FileItem[];
  totalPages: number;
  currentPage: number;
}

export interface FileInfo {
  title: string;
  single_img: string;
  splash_img: string;
  length: string;
  canplay: number;
  protected_embed: string;
  protected_dl: string;
  uploaded: string;
  views: string;
  filecode: string;
  size: string;
}

export interface SearchInfo {
  title: string;
  file_code: string;
  single_img: string;
  splash_img: string;
  uploaded: string;
  views: string;
  length: string;
}