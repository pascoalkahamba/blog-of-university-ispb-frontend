import axios from "@/axios";
import {
  ICourse,
  ICreateAccountData,
  ILoginResponse,
  ISignin,
  IStudentData,
} from "@/interfaces";

export async function createdAccount(studantData: ICreateAccountData) {
  const response = await axios.post<IStudentData>("/student/create", {
    ...studantData,
  });

  const createdStudent = response.data;

  return createdStudent;
}

export async function getAllCourses() {
  const response = await axios<ICourse[]>("department/getAllCourses");
  const allCourses = response.data;

  return allCourses;
}

export async function signinStudent({ email, password }: ISignin) {
  const response = await axios.post<ILoginResponse>("/student/login", {
    email,
    password,
  });
  const userLogged = response.data;
  return userLogged;
}
