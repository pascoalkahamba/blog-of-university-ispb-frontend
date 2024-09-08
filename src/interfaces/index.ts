import { TRole } from "@/@types";

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
  profile: IProfile;
  role: TRole;
  registrationNumber: string;
  contact: string;
}
