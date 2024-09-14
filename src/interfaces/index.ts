import { TEventType, TWhoPosted, TRole } from "@/@types";

export interface ICreateAccount {
  username: string;
  firstPassword: string;
  secondPassword: string;
  isStudent: boolean;
  courseId: number;
  registrationNumber: number;
  email: string;
  contact: number;
}
export interface ISubjects {
  id?: number;
  name: string;
}

export interface ISignin {
  email: string;
  password: string;
}

export interface ICourse {
  id?: number;
  name: string;
  studentId: number | null;
  departmentId: number;
  coordinatorId: number | null;
  subjects: ISubjects[];
}

export interface ICommentDataResult {
  id: number;
  createdAt: Date;
  likes: number;
  unlikes: number;
  statusLike: boolean;
  statusUnlike: boolean;
  updatedAt: Date;
  content: string;
  replies: IReplyDataResult[];
  postId: number;
  admin: IUser | null;
  coordinator: IUser | null;
  student: IUser | null;
  adminId: number | null;
  studentId: number | null;
  coordinatorId: number | null;
}
export interface IReplyDataResult {
  id: number;
  createdAt: Date;
  likes: number;
  unlikes: number;
  statusLike: boolean;
  statusUnlike: boolean;
  updatedAt: Date;
  content: string;
  commentId: number;
  admin: IUser | null;
  coordinator: IUser | null;
  student: IUser | null;
  adminId: number | null;
  studentId: number | null;
  coordinatorId: number | null;
}

export interface IDepartment {
  id: number;
  name: string;
}

export interface IPost {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content: string;
  department: IDepartment;
  comments: ICommentDataResult[];
  picture: IPicture;
  views: number;
  likes: number;
  admin: IUser | null;
  coordinator: IUser | null;
  unlikes: number;
  statusLike: boolean;
  statusUnlike: boolean;
  favorite: boolean | null;
  adminId: number | null;
  coordinatorId: number | null;
}

export interface ILoginResponse {
  user: IUser;
  token: string;
}

export interface ICreateAccountData {
  username: string;
  password: string;
  isStudent: boolean;
  courseId: number;
  registrationNumber: number;
  email: string;
  contact: number;
}
export interface IProfile {
  id: number;
  bio: string;
  photo: IPicture;
  studentId: number | null;
  adminId: number | null;
  coordinatorId: number | null;
}

export interface IPicture {
  id: number;
  name: string;
  url: string;
  adminId: null | number;
  coordinatorId: null | number;
  postId: number;
  studentId: null | number;
}

export interface IStudentData {
  username: string;
  email: string;
  contact: string;
  role: TRole;
}

export interface IUser {
  id: number;
  username: string;
  course: ICourse;
  email: string;
  department: IDepartment;
  departmentId: number;
  profile: IProfile;
  role: TRole;
  registrationNumber: string;
  contact: string;
}

export interface IFile {
  path: string;
  lastModified: number;
  lastModifiedDate: Object;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export interface ICommentDataResult {
  id: number;
  createdAt: Date;
  likes: number;
  unlikes: number;
  statusLike: boolean;
  statusUnlike: boolean;
  updatedAt: Date;
  content: string;
  replies: IReplyDataResult[];
  postId: number;
  admin: IUser | null;
  coordinator: IUser | null;
  student: IUser | null;
  adminId: number | null;
  studentId: number | null;
  coordinatorId: number | null;
}
export interface IReplyDataResult {
  id: number;
  createdAt: Date;
  likes: number;
  unlikes: number;
  statusLike: boolean;
  statusUnlike: boolean;
  updatedAt: Date;
  content: string;
  commentId: number;
  admin: IUser | null;
  coordinator: IUser | null;
  student: IUser | null;
  adminId: number | null;
  studentId: number | null;
  coordinatorId: number | null;
}

export interface ICreatedReplyData {
  commentId: number;
  content: string;
  whoCreator: TWhoPosted;
}

export interface ICustomUpdateProfile {
  id: number;
  formdata: FormData;
  role: TRole;
}

export interface IUpdateUserProfile {
  email: string;
  departmentId?: number;
  registrationNumber?: string;
  password: string;
  contact: string;
  photo?: IPicture;
  courseId?: number;
  bio: string;
  username: string;
}

export interface IGetOneUser {
  id: number;
  role: TRole;
}

export interface ILoginResponse {
  user: IUser;
  token: string;
}

export interface IDepartment {
  id: number;
  name: string;
}

export interface IProfile {
  id: number;
  bio: string;
  photo: IPicture;
  studentId: number | null;
  adminId: number | null;
  coordinatorId: number | null;
}

export interface IPicture {
  id: number;
  name: string;
  url: string;
  adminId: null | number;
  coordinatorId: null | number;
  postId: number;
  studentId: null | number;
}
export interface IPost {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content: string;
  department: IDepartment;
  comments: ICommentDataResult[];
  picture: IPicture;
  views: number;
  likes: number;
  admin: IUser | null;
  coordinator: IUser | null;
  unlikes: number;
  statusLike: boolean;
  statusUnlike: boolean;
  favorite: boolean | null;
  adminId: number | null;
  coordinatorId: number | null;
}

export interface ISimpleUser {
  username: string;
  photoUrl: string;
}

export interface IUseReactions {
  like: number;
  unlike: number;
  statusLike: boolean;
  statusUnlike: boolean;
}

export interface IAddLike {
  id: number;
  like: number;
  statusLike: boolean;
}
export interface IAddUnlike {
  id: number;
  unlike: number;
  statusUnlike: boolean;
}

export interface IEdit {
  type: TEventType;
  status: boolean;
}

export interface IAllUsers {
  admin: IUser | null;
  coordinator: IUser | null;
  student: IUser | null;
  currentUser: IUser;
}

export interface IReply {
  id: number;
  createdAt: Date;
  likes: number;
  unlikes: number;
  statusLike: boolean;
  statusUnlike: boolean;
  updatedAt: Date;
  content: string;
  admin: IUser | null;
  coordinator: IUser | null;
  student: IUser | null;
  adminId: number | null;
  studentId: number | null;
  coordinatorId: number | null;
}
export interface ICreateCommentData {
  content: string;
  postId: number;
  whoCreator: TWhoPosted;
}

export interface ISubjects {
  id?: number;
  name: string;
}

export interface ICourse {
  id?: number;
  name: string;
  studentId: number | null;
  departmentId: number;
  department: IDepartment;
  coordinatorId: number | null;
  subjects: ISubjects[];
}

export interface IDepartmentData {
  id: number;
  name: string;
  coordinators: IUser[];
  courses: ICourse[];
  posts: IPost[];
}
